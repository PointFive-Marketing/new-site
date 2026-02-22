---
title: "FinOps Advisory: AWS Service Event"
date: "2025-10-22"
author: "PointFive Team"
excerpt: "An advisory report on the October 20, 2025 AWS service event in US-EAST-1, covering cost impact analysis, SLA credit claim processes, and recommended next steps for affected customers."
category: "FinOps"
readingTime: "6 min read"
tags: ["AWS", "outage", "SLA credits", "FinOps advisory", "incident response", "US-EAST-1"]
---

## Overview

This advisory addresses the October 20, 2025 AWS service event in US-EAST-1, helping customers understand cost implications, identify usage anomalies, and navigate the SLA credit process.

## What Happened

On October 20, 2025, from 3:00 AM to 6:00 PM ET, AWS experienced intermittent service degradation in the US-EAST-1 region. A DNS resolution failure impacted EC2, Lambda, load balancers, and API Gateway. AWS restored stability later that day after identifying and remediating the underlying issue.

## How This Affects Cloud Costs

### 1. Charges for Limited-Use Services

Resources continued running without serving traffic during the disruption. Idle databases and disconnected EC2 instances still generated charges with minimal business value returned.

### 2. Retry Storm Cost Spikes

Automatic retry mechanisms created artificial cost increases through Lambda timeouts and re-executions, API Gateway request multiplication, data transfer overages, and CloudWatch log surges.

### 3. Failover and Recovery Costs

Cross-region disaster recovery triggered unexpected charges for data transfer, resource scaling, and backup restoration.

## What to Look For

When analyzing your cost data, distinguish between:

- **Event-driven spikes:** Lambda invocations and API calls from retry loops
- **Idle resource charges:** Metering on unavailable services during the outage window
- **Legitimate business activity:** Normal workload costs outside the event window

Affected customers typically report 5-20x baseline usage levels during the incident period.

## Next Steps

### Step 1: Document Your Impact (This Week)

- Identify US-EAST-1 resources via AWS Cost Explorer
- Export hourly costs for October 20 (3:00 AM - 6:00 PM ET)
- Capture CloudWatch error metrics and timeout data
- Calculate event costs versus normal operations

### Step 2: File Your SLA Credit Claim

**Critical deadline: December 31, 2025** (within two billing cycles).

Open an AWS Support Center case referencing the October 20 incident. Include dates, affected resources, and error logs demonstrating unavailability. Expected credits align with approximately 98% uptime, potentially qualifying for a 10% service credit on impacted workloads.

### Step 3: Recover Beyond-SLA Costs

Lambda retry overages, data transfer spikes, API Gateway cost explosions, and cross-region failover expenses require separate AWS Support tickets referencing the October 20 incident with cost comparisons.

### Step 4: Verify Credits Applied

Monitor your next billing cycle for credit reflection. Reopen support cases if credits do not appear.

## Key Takeaways

- File SLA claims by December 31, 2025 -- this is a non-negotiable deadline
- Standard SLA provides 10% credit on affected compute resources
- Retry storms require separate escalated claims
- Document impact immediately for better log accessibility
- Multi-region architectures qualify for superior SLA commitments (99.99% versus 99.5%)

## Contact

For further assistance analyzing outage-related cost anomalies, reach out to PointFive at hello@pointfive.co or visit pointfive.co/contact.
