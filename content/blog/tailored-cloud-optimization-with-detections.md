---
title: "Tailored Cloud Optimization with Detections"
date: "2025-01-14"
author: "Noa Avishur"
authorTitle: ""
excerpt: "Generic cloud optimization recommendations rarely fit every organization. PointFive's Detections feature lets administrators customize thresholds, lookback periods, and active detections to align recommendations with real-world operational requirements."
category: "Product Update"
readingTime: "4 min read"
tags: ["Detections", "Cloud Optimization", "Customization", "FinOps", "Product"]
---

Cloud cost optimization is inherently complex, and one-size-fits-all approaches rarely work. PointFive's Detections feature balances research-backed recommendations with the flexibility that enterprises need to align optimization with their specific operational requirements.

## When Generic Recommendations Miss the Mark

Consider a practical scenario: an RDS instance showing 10% CPU utilization over a 30-day period. On the surface, this looks like a clear candidate for downsizing. But within a specific organization, that instance might support critical monthly reporting jobs or serve as a disaster recovery standby. Applying a generic recommendation without context could disrupt essential workflows.

The Detections feature addresses this by enabling administrators to adjust the variables driving each recommendation -- CPU thresholds, lookback periods, and other parameters -- so that the optimization logic reflects organizational priorities rather than generic benchmarks.

Looking ahead, there is potential for even finer granularity: customization at the account or project level. This would allow development environments to prioritize aggressive savings while production systems maintain stricter performance and compliance parameters.

## Three Key Capabilities of the Detections Module

### Focused Catalog

Rather than presenting an exhaustive list of every possible optimization across all cloud services, Detections provides visibility into the specific detections active for your organization. This streamlined view helps teams quickly identify relevant opportunities without sifting through noise.

### Enable and Disable Toggle

Administrators can deactivate specific detections when they are not relevant to their environment. Disabling a detection automatically archives any related opportunities and prevents new ones from being generated. This keeps the optimization pipeline clean and focused on what matters.

### Customizable Variables

The most powerful capability is the ability to adjust the critical parameters driving each detection. Teams can modify thresholds, lookback periods, and other variables to match their operational reality. Changes take effect within 24 hours, and the detection engine re-evaluates the environment using the updated criteria.

## More Control, Less Noise

Traditional cost optimization tools often overwhelm teams with recommendations that do not account for organizational context. The Detections module addresses this information overload by putting customization in the hands of the people who understand their infrastructure best. Teams can filter out irrelevant suggestions and concentrate on the opportunities that align with their business priorities and risk tolerance, driving meaningful cloud cost savings without compromising operational requirements.
