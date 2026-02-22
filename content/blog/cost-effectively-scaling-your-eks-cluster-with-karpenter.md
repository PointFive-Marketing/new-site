---
title: "Cost Effectively Scaling Your EKS Cluster with Karpenter"
date: "2024-09-12"
author: "Gabriel Yahav"
authorTitle: ""
excerpt: "PointFive shares how they migrated from static EKS Managed Node Groups to Karpenter for dynamic, cost-optimized Kubernetes node provisioning -- covering architecture decisions, configuration details, and lessons learned."
category: "Engineering"
readingTime: "8 min read"
tags: ["Kubernetes", "EKS", "Karpenter", "AWS", "Cost Optimization", "Infrastructure"]
---

Running production Kubernetes workloads in a cloud-native SaaS environment demands scalable infrastructure that adapts to changing demands. Manual node scaling quickly becomes impractical as workloads grow, making automated solutions essential for sustainable infrastructure management.

## The Starting Point

PointFive initially deployed EKS with a single Managed Node Group using Amazon Linux 2 AMI nodes. This group handled both application pods and Kubernetes add-ons (CoreDNS, kube-proxy, and similar system components). As the pod population expanded with increasing memory and CPU requirements, the limitations of this static approach became clear.

The team established two priorities for the next iteration:

- **Scaling with Simplicity** -- efficient worker node scaling without manual instance type management
- **FinOps Focus** -- cost-effective instance selection while maintaining the performance characteristics workloads required

## Karpenter vs. Kubernetes Cluster Autoscaler

The evaluation compared Karpenter against the traditional Kubernetes Cluster Autoscaler across several dimensions:

**Node Provisioning and Instance Selection:** Karpenter dynamically provisions nodes based on actual workload requirements and supports a wide range of instance types automatically. The Cluster Autoscaler relies on predefined node groups with fixed instance type configurations, limiting its flexibility.

**Startup Time:** Karpenter provisions nodes faster by working directly with EC2 Fleet APIs, bypassing the Auto Scaling Group layer that the Cluster Autoscaler depends on.

**Mixed Instance Support:** Karpenter natively handles diverse instance types within a single NodePool. The Cluster Autoscaler requires separate node groups for different instance configurations.

**Node Consolidation:** Karpenter actively consolidates workloads onto fewer nodes when resources are underutilized. The Cluster Autoscaler only scales down empty nodes.

**Cost Optimization:** Karpenter selects the most cost-effective instance types matching workload needs in real time, including Spot instance support. The Cluster Autoscaler is constrained to the instance types defined in its node groups.

## Implementation Architecture

### Dedicated Scheduling Strategy

The team adopted a split-responsibility approach:

- **Kubernetes add-on pods** (CoreDNS, kube-proxy, etc.) remained on the EKS Managed Node Group for stability
- **Application workloads** were delegated entirely to Karpenter-managed nodes

This separation ensures that system-critical components run on predictable, stable infrastructure while application pods benefit from Karpenter's dynamic scaling and cost optimization.

### NodePool Configuration

A single primary NodePool defined the provisioning blueprint. Key configuration parameters included:

- **Consolidation Policy:** `WhenEmptyOrUnderutilized` -- Karpenter identifies and disrupts nodes that are empty or not efficiently packed
- **Resource Limits:** 1000 CPU and 1000Gi memory as upper bounds for the NodePool
- **Architecture:** arm64 for cost efficiency
- **Instance Categories:** c (compute), m (general purpose), and r (memory-optimized) families, generation 2 and above
- **Availability Zones:** us-east-1a, us-east-1b, us-east-1c for distribution

## Key Lessons and Best Practices

### Minimize NodePools

A single NodePool can serve multiple teams and workloads effectively. Additional NodePools should only be created when there are concrete requirements for billing isolation, specific hardware constraints, or distinct disruption policies.

### Set Node Expiration

Configuring an `expireAfter` value ensures regular node cycling. This keeps nodes updated with the latest AMIs, including security patches, without requiring manual intervention.

### Maintain a Broad Instance Type Range

Keeping instance type requirements flexible allows Karpenter to select the most cost-effective and available options that match workload demands. Overly constraining instance types defeats the purpose of dynamic provisioning.

### Enable Consolidation

The `WhenEmptyOrUnderutilized` consolidation mode is essential for cost optimization. It identifies underutilized nodes and redistributes workloads to reduce the total node count, directly lowering cluster costs.

## Scaling Up Without Scaling Out of Control

Karpenter is an evolving tool that continues to add capabilities. For organizations running EKS at scale, it provides a path to efficient, cost-optimized Kubernetes infrastructure that adapts dynamically to workload demands. The combination of automatic instance selection, active consolidation, and simplified configuration means teams can focus on their applications rather than managing node groups manually.
