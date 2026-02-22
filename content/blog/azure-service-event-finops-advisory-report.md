---
title: "FinOps Advisory: Azure Service Event"
date: "2025-10-30"
author: "Yael Cinamon"
excerpt: "An advisory report on the October 29, 2025 Azure outage caused by an Azure Front Door configuration change, covering cost impact analysis, SLA credit processes, and recovery steps for affected organizations."
category: "FinOps"
readingTime: "8 min read"
tags: ["Azure", "outage", "SLA credits", "FinOps advisory", "incident response", "cloud costs"]
---

## Overview

On October 29, 2025, Microsoft Azure experienced a significant service disruption stemming from an Azure Front Door configuration change. The incident degraded Azure portal access and caused widespread outages across multiple services, with potential financial implications for customers globally.

This advisory helps organizations understand the cost implications, identify usage anomalies, and navigate Azure SLA and service credit processes.

## What Happened

Starting at approximately 12:00 PM ET (16:00 UTC) on October 29, 2025, Azure experienced global service degradation. Affected services included App Service, Azure Databricks, Azure SQL Database, Container Registry, Microsoft Defender, Microsoft Entra ID, and several others. Downstream effects also impacted Microsoft 365, Virtual Desktop, Xbox Live, and Minecraft.

The incident was fully mitigated by approximately 12:05 AM UTC on October 30, 2025 (around 7:40 PM ET).

## How This Affects Cloud Costs

The advisory identifies three primary cost patterns that organizations should examine.

### 1. Charges for Limited-Use Services

During the disruption, resources continued running without connectivity. Virtual machines, idle databases, storage accounts, application gateways, and app services that were unable to handle requests still accumulated charges despite delivering minimal business value.

### 2. Retry Storm Cost Spikes

Automatic request retries created significant cost spikes across multiple services:

- Azure Functions timeouts and re-executions
- API Management request multiplications
- Data transfer overages from repeated failed attempts
- Application Insights logging surges
- Message retries across Event Hub and Service Bus

### 3. Failover and Recovery Costs

Organizations that triggered disaster recovery procedures faced unexpected charges for cross-region data transfer, temporary resource scaling, backup restoration, and traffic routing changes.

## What to Look For

It is important to distinguish outage-driven costs from legitimate activity:

- **Outage-driven spikes:** Function invocations, API Management errors, and storage transaction surges matching retry patterns
- **Idle resource charges:** Normal metering on unreachable resources during the outage window (12:00 PM - 7:40 PM ET)
- **Real usage:** Legitimate business activity outside the outage window

Short-term deviations typically showed 5-20x baseline levels during the outage period.

## Next Steps

### Step 1: Document Your Impact (This Week)

- Export Service Health events per subscription and region
- Export hourly costs for October 29, 2025 (12:00 PM - 7:40 PM ET)
- Capture metrics showing service unavailability
- Calculate costs during the outage versus normal operations
- Document the business impact

### Step 2: File Your SLA Credit Claim

**Critical deadline:** Claims must be submitted within two months from the end of the billing month. For an October incident, the deadline is approximately December 31, 2025.

**Filing process:**

1. Open a support request in Azure Portal
2. Navigate to Help + Support, then Create a support request
3. Select Issue type: Billing
4. Use subject line referencing the October 29 outage
5. Include dates, times, affected resources, incident ID, logs, and cost comparison data

**Expected credits based on Azure SLA tiers:**

- Less than 99.9% uptime: 10% credit
- Less than 99% uptime: 25% credit
- Less than 95% uptime: 100% credit

Azure SLAs typically range from 95% to 99.99% uptime. A 99.9% SLA allows roughly 43 minutes of downtime per month; 99.95% allows about 22 minutes; and 99.99% allows approximately 4 minutes.

### Step 3: Recover Beyond-SLA Costs

Retry storms and failover costs require separate support tickets. These should reference Azure Functions retry overages, data transfer spikes, API Management cost explosions, Traffic Manager expenses, Application Gateway costs, and storage transaction surges.

### Step 4: Verify Credits Applied

Monitor billing cycles for credit reflection. Microsoft typically processes claims within 45 days of submission. Note that Microsoft does not automatically issue SLA credits -- organizations must submit a claim with proper documentation.

## Key Takeaways

- File SLA claims by December 29, 2025
- Standard SLAs provide 10-100% credit depending on uptime percentage
- Retry storms and failover costs need separate claims
- Document evidence immediately, as logs become harder to retrieve over time
- Multi-region architectures with Availability Zones qualify for better commitments
- Each Azure service has individual SLAs

## Resources

- **Azure SLAs:** azure.microsoft.com/en-us/support/legal/sla/
- **Azure Status:** status.azure.com
- **Azure Support:** Azure Portal, Help + Support
- **Service Health Dashboard:** Azure Portal, Service Health
- **PointFive Contact:** hello@pointfive.co
