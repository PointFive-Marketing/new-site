---
title: "Embarking on PointFive's FOCUS Journey"
date: "2024-11-27"
author: "Akiva Kates"
excerpt: "PointFive implements the FOCUS 1.0 specification to deliver standardized multi-cloud cost visibility, unifying billing data across providers into a consistent analytics experience."
category: "FinOps"
readingTime: "4 min read"
tags: ["FOCUS", "FinOps Foundation", "Multi-Cloud", "Analytics", "Standardization"]
---

## The Fragmentation Problem

The early days of electronic payments offer a useful parallel for understanding cloud cost management today. Before ISO 8583 standardized transaction messaging, credit card networks each operated on proprietary protocols, creating inefficiency and friction across the ecosystem.

FinOps practitioners face a remarkably similar challenge. Cloud providers use different terminologies, data formats, and reporting structures, creating significant barriers to efficiency -- particularly in multi-cloud environments where teams must mentally translate between providers before they can even begin analysis.

## What Is FOCUS?

FOCUS (FinOps Open Cost and Usage Specification) is an initiative backed by the FinOps Foundation that aims to standardize the language and data structures used in cloud cost management. The specification requires cloud vendors to produce consistent cost and usage datasets, enabling practitioners to work with unified data regardless of the underlying provider.

The key benefits of FOCUS adoption include:

- **Unified Cost Visibility:** Consolidating data from multiple cloud providers and data centers into a single location, enabling granular cost analysis and clear resource allocation insights.

- **Standardized Terminology:** Creating a consistent vocabulary across cloud platforms that reduces the learning curve for teams working across providers and lets practitioners focus on delivering business value rather than translating jargon.

- **Simplified Data Pipelines:** Facilitating the integration and transformation of billing data from multiple providers into a unified format, reducing the engineering effort required to build and maintain analytics infrastructure.

## FOCUS in PointFive's Analytics

PointFive implemented FOCUS 1.0 across two core Analytics dashboards:

**Analytics Overview Dashboard** -- Provides day-to-day cost visibility including Total Billed Cost, Total Effective Cost, Total Contracted Cost, and Total List Cost, with breakdowns by Service Category, Service Name, and Project ID.

**Analytics Cost Analysis Dashboard** -- Enables users to attribute cost and usage data to various drivers through advanced grouping, cross-filtering, and resource-level analysis, making it possible to drill into spending patterns with precision.

## Building for the Future

This FOCUS implementation represents foundational work for PointFive's multi-cloud analytics capabilities. As the specification matures and more providers adopt it, the standardization will improve the daily experience for FinOps practitioners collaborating with engineering and finance teams -- reducing friction and enabling faster, more informed decision-making.
