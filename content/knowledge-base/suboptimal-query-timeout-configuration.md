---
title: "Suboptimal Query Timeout Configuration"
date: "2025-01-15"
author: "Simar Arora"
excerpt: "Without appropriate query timeout configuration, inefficient or runaway queries can execute for extended periods, keeping warehouses active and accruing unnecessary costs."
category: "Compute"
tags: ["Snowflake", "Virtual Warehouse", "Suboptimal Configuration"]
readingTime: "4 min read"
cloudProvider: "Snowflake"
serviceName: "Virtual Warehouse"
inefficiencyType: "Suboptimal Configuration"
---

## Explanation

If no appropriate query timeout is configured, inefficient or runaway queries can execute for extended periods (up to the default 2-day system limit). For as long as the query is running, the warehouse will remain active and accrue costs. Proper timeout settings help terminate inefficient queries, free up compute capacity, and allow the warehouse to become idle sooner, making it eligible for auto-suspend once the inactivity timer is reached.

## Relevant Billing Model

Snowflake charges warehouses based on active runtime, when a query is running. A long-running query continues to keep the warehouse active, incurring credit consumption for every second until it finishes or is manually canceled.

## Detection

- Review account-level query timeout settings to confirm if a global policy shorter than the default is enforced
- Identify warehouses with no customized query timeout configured for workloads requiring exceptions
- Evaluate historical query run durations to detect unusually long-running queries that could benefit from timeout enforcement
- Validate with application owners whether specific workloads legitimately require extended query durations before setting tighter policies

## Remediation

- Configure a conservative account-level query timeout policy to limit maximum query execution times (e.g., 4-12 hours based on environment needs)
- Apply customized warehouse-level or user-level timeout policies for workloads that genuinely require longer execution windows
- Regularly review and adjust query timeout settings as workload patterns evolve
- Coordinate changes with data engineering teams to avoid unintended interruption of legitimate long-running jobs
- Setup anomaly detection on long running queries
