---
title: "Missing or Inefficient Use of Materialized Views"
date: "2025-01-15"
author: "Simar Arora"
excerpt: "Materialized views that are underutilized or improperly implemented can either waste compute on refreshes or miss opportunities to save on costly repeated queries."
category: "Compute"
tags: ["Snowflake", "Materialized Views", "Inefficient Resource Usage"]
readingTime: "4 min read"
cloudProvider: "Snowflake"
serviceName: "Materialized Views"
inefficiencyType: "Inefficient Resource Usage"
---

## Explanation

The inefficiency occurs when materialized views (MVs) are either underutilized or improperly implemented. When costly, frequently-run queries lack MV support, they drain unnecessary compute resources. Conversely, rarely-queried MVs accumulate background refresh and storage expenses without delivering corresponding savings. Strategic evaluation of access patterns and deliberate MV deployment is essential for net cost advantage.

## Relevant Billing Model

Compute charges apply for refreshing MVs based on changes to base tables. Storage charges apply for persisting MV data. Active warehouse compute savings occur when queries are served by MVs instead of re-executing against base tables.

## Detection

- Examine query history to spot expensive, frequently-executed queries that could gain from materialization
- Review existing MVs for read activity to identify underutilized or inactive materialized views
- Weigh MV refresh costs and storage footprint against active query savings for net cost effectiveness assessment
- Confirm whether candidate workloads use relatively stable datasets suitable for materialization

## Remediation

- Establish materialized views for high-cost, repetitive queries where refresh expenses are minimal relative to compute gains
- Remove materialized views incurring maintenance and storage costs without sufficient query demand
- Schedule regular MV usage and refresh reviews as data volumes and patterns shift
- Coordinate with data engineering to refine MV designs for optimal cost-benefit outcomes through selective columns and filtered subsets
