---
title: "Infrequently Accessed Objects Stored in S3 Standard Tier"
date: "2025-01-15"
author: "PointFive Team"
excerpt: "Keeping large volumes of infrequently accessed data in S3 Standard results in unnecessary expenses — backups, logs, and archives are strong candidates for colder storage tiers."
category: "Storage"
tags: ["AWS", "Amazon S3", "Inefficient Configuration"]
readingTime: "5 min read"
cloudProvider: "AWS"
serviceName: "Amazon S3"
inefficiencyType: "Inefficient Configuration"
---

## Explanation

S3 Standard is the default storage class and is often used by default even for data that is rarely accessed. Keeping substantial volumes of infrequently accessed data in S3 Standard results in unnecessary expenses. Data types like backups, logs, archives, and historical snapshots are typically strong candidates for migration to colder storage tiers such as S3 Glacier or Deep Archive. When access patterns remain unclear or variable, S3 Intelligent-Tiering can reduce expenses without requiring manual tier transitions.

## Relevant Billing Model

S3 charges based on hourly per-GB storage rates, along with supplementary fees for access, updates, security features, and monitoring.

Multiple storage classes exist, each featuring distinct pricing:

- **S3 Standard**: Highest per-GB storage cost with low access costs; optimal for frequently accessed data
- **S3 Glacier & S3 Glacier Deep Archive**: Substantially reduced storage costs with higher retrieval times and associated fees
- **S3 Intelligent-Tiering**: Automatically transitions objects across classes based on access patterns; includes a small monitoring fee

## Detection

- Identify buckets or prefixes containing substantial data volumes in S3 Standard tier
- Evaluate whether data receives active access or exists for archival, compliance, or backup purposes
- Examine historical trends to establish whether data access is infrequent, irregular, or absent
- Assess the intended data lifecycle (short-term versus long-term retention needs)
- Validate that access latency and retrieval costs for lower-cost tiers align with business requirements
- Coordinate with relevant teams to confirm retention requirements and evaluate tolerance for delayed retrieval

## Remediation

Transfer eligible objects to colder storage tiers (such as Glacier Flexible Retrieval or Deep Archive) via lifecycle policies. For datasets with unclear access patterns, activate S3 Intelligent-Tiering to automatically transition objects based on actual usage patterns. Always verify business, compliance, and recovery-time requirements before implementing transitions.

## Relevant Documentation

- [S3 Pricing](https://aws.amazon.com/s3/pricing/)
