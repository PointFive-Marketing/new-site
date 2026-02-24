---
title: "Suboptimal Warehouse Auto-Suspend Configuration"
date: "2025-01-15"
author: "Simar Arora"
excerpt: "Overly generous auto-suspend thresholds keep Snowflake warehouses active while idle, accruing unnecessary charges that can be reduced by tightening suspension windows."
category: "Compute"
tags: ["Snowflake", "Virtual Warehouse", "Suboptimal Configuration"]
readingTime: "4 min read"
cloudProvider: "Snowflake"
serviceName: "Virtual Warehouse"
inefficiencyType: "Suboptimal Configuration"
---

## Explanation

If auto-suspend settings are configured with overly generous thresholds, warehouses can remain active while idle, continuing to accrue unnecessary charges. Tightening suspension windows helps shut down resources promptly after query completion, reducing credit expenditure while preserving acceptable performance levels (including caching benefits and interactive responsiveness).

## Relevant Billing Model

Snowflake bills warehouses per second while they are active, regardless of whether queries are actively running. Resources continue accumulating charges until suspended.

## Detection

- Review auto-suspend configurations per warehouse to identify settings with excessively high idle thresholds (e.g., above 5 minutes)
- Examine query frequency and typical idle patterns to assess whether faster suspension would maintain performance
- Confirm whether workloads depend significantly on caching benefits for user-facing operations that might justify longer suspend timers
- Validate proposed adjustments with application teams to prevent unacceptable query latency increases

## Remediation

- Modify warehouse auto-suspend settings to reduce idle-period charges while balancing performance requirements
- For batch and non-interactive workloads, consider shorter intervals (approximately 60 seconds), recognizing the 60-second minimum billing increment
- For interactive workloads where query caching meaningfully enhances performance, moderate suspend timers (up to 5 minutes) may be appropriate
- Communicate cache-loss implications to workload teams for informed decisions
- Periodically review suspend policies as workload patterns and user expectations change
