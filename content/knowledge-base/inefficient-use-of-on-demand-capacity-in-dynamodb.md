---
title: "Inefficient Use of On-Demand Capacity in DynamoDB"
date: "2025-01-15"
author: "Ohad Shalev"
excerpt: "On-Demand mode is often cost-inefficient for DynamoDB tables with consistent throughput — shifting to Provisioned mode with Auto Scaling can yield substantial cost reductions."
category: "Database"
tags: ["AWS", "Amazon DynamoDB", "Inefficient Configuration"]
readingTime: "4 min read"
cloudProvider: "AWS"
serviceName: "Amazon DynamoDB"
inefficiencyType: "Inefficient Configuration"
---

## Explanation

While On-Demand mode is well-suited for unpredictable or bursty workloads, it is often cost-inefficient for applications with consistent throughput. Shifting to Provisioned mode with Auto Scaling enables baseline capacity configuration with incremental scaling, potentially yielding substantial cost reductions without performance compromise.

## Relevant Billing Model

DynamoDB charges apply to reading, writing, and storing data, plus optional features like backups and global tables. Two pricing options exist:

1. **On-Demand Capacity Mode**: Serverless pay-per-request pricing with automatic scaling, billed per request consumed.
2. **Provisioned Capacity Mode**: Hourly charges based on configured read/write capacity regardless of actual usage, supporting Auto Scaling for dynamic adjustment.

## Detection

- Identify tables configured for On-Demand capacity mode
- Review historical read/write activity for consistent or gradually increasing traffic patterns
- Evaluate whether workloads demonstrate steady throughput (regular APIs, background jobs, scheduled processing)
- Assess if baseline provisioned capacity meets typical demand with Auto Scaling handling fluctuations
- Check for operational, architectural, or application dependencies affecting mode switching
- Ensure meaningful, achievable cost savings based on usage trends

## Remediation

For workloads with predictable usage patterns, transition the table to Provisioned capacity mode and enable Auto Scaling to dynamically adjust throughput within configured limits.

## Relevant Documentation

- [DynamoDB Pricing](https://aws.amazon.com/dynamodb/pricing/)
