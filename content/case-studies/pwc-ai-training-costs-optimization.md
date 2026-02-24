---
title: "Full Visibility into AI Training Costs: How PwC Optimized a Custom LLM Pipeline Spanning 8 AWS Regions"
date: "2025-06-15"
author: "PointFive Team"
excerpt: "PwC used PointFive to map and optimize a 32-billion parameter LLM training pipeline across 8 AWS regions and 5 NVIDIA GPU architectures, identifying 11-19% cost reduction opportunities."
category: "Case Study"
tags: ["AWS", "AI", "LLM", "GPU", "SageMaker", "NVIDIA", "Cost Optimization"]
---

## Overview

**Client:** PwC
**Industry:** Professional Services / AI Research
**Cloud Provider:** AWS
**Challenge:** Complex multi-region AI training infrastructure with no end-to-end cost visibility

## The Challenge

PwC's AI research team developed a 32-billion parameter custom LLM using NVIDIA MegatronLM 2.0 and Amazon SageMaker HyperPod. The training infrastructure spanned 8 AWS regions with cutting-edge GPU hardware — from NVIDIA H200s to preview-stage B300 Blackwell GPUs.

With monthly spend reaching approximately $78,000 and 99.6% dedicated to AI/ML workloads, even modest optimization percentages yielded substantial savings. However, the multi-region complexity, mixed compute paradigms (EC2, SageMaker HyperPod, Capacity Blocks), and cutting-edge hardware without pricing history made traditional FinOps tools ineffective.

Key objectives included:

- Mapping the entire LLM training pipeline end-to-end
- Identifying waste across compute, storage, and data transfer components
- Preparing for NVIDIA Blackwell GA pricing transitions
- Delivering engineering-ready recommendations the team could act on with confidence

## The Solution

PointFive's DeepWaste Detection Engine mapped PwC's entire LLM training pipeline end-to-end, surfacing actionable inefficiencies across compute, storage, and data transfer that traditional tools cannot see.

The platform provided complete visibility, attributing costs across all 8 regions and identifying:

- **Dormant snapshot storage** costing $2,750/month
- **Underutilized GPU notebooks** running without active workloads
- **Over-provisioned storage throughput** beyond what training jobs required
- **Cross-region data transfer inefficiencies** between training stages

## Results

- **$78K/month** in AI/ML infrastructure across 8 regions fully mapped and attributed
- **$9K–$15K/month** in savings identified (11–19% cost reduction)
- **5 NVIDIA GPU architectures** optimized, including Blackwell, Hopper, Ampere, and Turing
- **Continuous monitoring** established for Blackwell GA pricing transition
- **$2,750/month** in dormant snapshot storage identified and flagged for removal

## Conclusion

For organizations investing in custom AI training infrastructure, cost visibility becomes exponentially harder as pipelines span regions, GPU architectures, and compute paradigms. PointFive delivered the end-to-end mapping and deep detection that PwC needed to optimize confidently — even on hardware so new that pricing benchmarks didn't yet exist.
