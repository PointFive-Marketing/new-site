---
title: "How PointFive Enabled Cloud Cost Ownership and Action for Nubank Engineers"
date: "2024-11-14"
author: "Alon Arvatz"
authorTitle: ""
excerpt: "Nubank, the world's largest digital banking platform outside Asia, partnered with PointFive to solve cloud cost visibility gaps, drive engineer participation in optimization, and track remediation across a massive distributed engineering organization."
category: "Cloud Optimization"
readingTime: "6 min read"
tags: ["Case Study", "Nubank", "Cloud Optimization", "FinOps", "Engineering", "AWS"]
---

Nubank is the world's largest digital banking platform outside Asia, serving over 100 million customers. At that scale, cloud infrastructure is vast and complex -- and so are the cost optimization challenges that come with a large, distributed engineering organization.

## The Challenge

Nubank's FinOps team faced four interconnected problems:

- **Limited visibility into optimization opportunities** -- the existing tooling could not surface actionable recommendations with enough depth or context for engineers to act on them
- **Numerous small inefficiencies** -- individually, many waste items were too small to justify dedicated engineering time, but collectively they represented significant spend
- **Insufficient engineer participation** -- without clear ownership, context, and workflow integration, engineers were not consistently engaged in cost management
- **No centralized tracking** -- across a large organization, there was no reliable way to track which fixes had been implemented, what savings were realized, and what remained outstanding

## The Solution: Applying the OOCA Framework

PointFive implemented its four-stage approach to bring structure and accountability to Nubank's cloud cost management:

### Ownership

Resource discovery, attribution, and role-based access control established clear ownership across the engineering organization. Every cloud resource was mapped to a responsible team, ensuring that optimization recommendations reached the right people.

### Observability

Comprehensive data collection combined with PointFive's DeepWaste Detection engine provided visibility into cost inefficiencies that had previously been invisible. The detection engine continuously analyzed Nubank's cloud environment to surface new opportunities.

### Context

Resource relationship graphs and detailed usage metrics enriched each recommendation with the context engineers needed to understand the issue, assess risk, and plan remediation.

### Action

A remediation workflow integrated into Nubank's existing engineering tools -- particularly Jira -- provided a structured path from detection to resolution.

## Implementation in Practice

### S3 Bucket Optimization

The team identified hygiene issues across Nubank's S3 estate, including missing Intelligent-Tiering configurations and delayed object transition policies. DeepWaste Detection surfaced these opportunities automatically, and the Jira integration streamlined the ticketing and assignment process so that engineers could address each issue within their normal workflow.

### DynamoDB Cost Visibility

DynamoDB expenses had been particularly opaque. PointFive provided visibility into the cost drivers behind Nubank's DynamoDB usage and helped engineers understand the analytical logic behind each recommendation. This transparency was critical for building trust -- engineers needed to understand why a change was being suggested before they would implement it.

## Results

The collaboration between PointFive and Nubank delivered several outcomes:

- **Centralized tracking** of optimization progress across the entire engineering organization
- **Actionable insights** with detailed remediation steps attached to each opportunity
- **Improved accountability** through clear ownership mapping and workflow integration
- **Sustained optimization** through a continuous detection and remediation cycle rather than one-time cleanup efforts

The Nubank engagement demonstrates that cloud cost optimization at scale requires more than dashboards -- it requires ownership, context, and integrated workflows that make it practical for engineers to act.
