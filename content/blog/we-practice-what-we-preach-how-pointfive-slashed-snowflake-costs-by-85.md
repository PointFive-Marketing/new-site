---
title: "We Practice What We Preach: How PointFive Slashed Snowflake Costs by 85%"
date: "2024-06-23"
author: "Or Chen"
authorTitle: ""
excerpt: "PointFive applied its own cost optimization principles to its Snowflake data warehouse, achieving an 85% reduction in daily credits and a 20x improvement in data refresh speed through warehouse splitting, query optimization, ingestion tuning, and auto-suspend configuration."
category: "Engineering"
readingTime: "8 min read"
tags: ["Snowflake", "Cost Optimization", "Data Engineering", "FinOps", "Performance"]
---

PointFive's core business is finding cloud cost-saving opportunities through deep data analysis, and Snowflake serves as the primary data warehouse powering that work. As the platform scaled -- more customers, more features, more data -- the team noticed both costs climbing and query performance declining. It was time to apply internally the same optimization discipline the company delivers to customers.

## Starting Point: A Single Warehouse

The initial architecture was straightforward: one Snowflake warehouse handling every operation -- data ingestion, complex analytical queries, and customer-facing workloads. Snowflake warehouses can process a maximum of 8 concurrent queries, and costs double with each size increment starting at 1 credit per hour for the smallest size.

As workloads grew, this single-warehouse approach hit its limits.

## Finding the Bottlenecks

The Snowflake cost management dashboard revealed that complex analysis queries were consuming the lion's share of resources. During peak periods, queries stacked up in the queue waiting for execution capacity. The team needed to separate workloads and right-size resources for each type of operation.

## Splitting Warehouses -- and an Unexpected Side Effect

The first optimization step was splitting the single warehouse into multiple purpose-built warehouses:

- **Separating ingestion from analysis** so that data loading would not compete with analytical queries for execution capacity
- **Matching warehouse sizes to query types** rather than sizing for the most demanding workload
- **Enabling parallel execution** across multiple warehouses simultaneously

The result was surprising -- costs actually doubled. The reason: queries that had previously been timing out due to resource contention now ran successfully. The total volume of completed query-seconds increased dramatically once the resource bottleneck was removed.

This was actually a positive signal. The team was now running queries that previously failed, but it meant the next optimization phase needed to address query efficiency directly.

## Query Optimization Through Better Data Filtering

Snowflake's query profiling tools revealed the root cause of excessive resource consumption: full table scans. The architecture used views with inner CTEs (Common Table Expressions) that lacked customer-specific filters at the early stages of query execution. Every query was scanning the entire dataset before narrowing results.

The solution was to convert these views into User-Defined Functions (UDFs) that accept customer parameters as inputs. This allowed Snowflake's query planner to filter data at the earliest possible stage, dramatically reducing the volume of data scanned per query.

**Impact:** 35% cost reduction and 2x faster query execution times.

## Optimizing the Ingestion Pipeline

Data ingestion offered another significant opportunity. The team implemented dynamic warehouse sizing based on concurrent file load volume, following Snowflake's guidance on optimal file sizes in the 100-250MB range.

Large files were split before ingestion to enable parallel processing. The math was compelling: a single 6GB file on an extra-small warehouse required roughly 3 hours of processing time. The same data split into 60 files of ~100MB each could be loaded on a Large warehouse in approximately 3 minutes -- and at a fraction of the cost (0.8 credits versus 6 credits) because the larger warehouse completed the work so much faster.

**Impact:** 30% overall cost reduction, with ingestion-specific costs dropping 85%.

## Auto-Suspend: Every Idle Second Counts

Snowflake's default auto-suspend timeout is 600 seconds (10 minutes). During that idle window, the warehouse continues billing. The team reduced the auto-suspend timer to just 1 second -- the minimum possible -- and restructured query execution to batch related queries together, ensuring each warehouse activation ran for at least the minimum 60-second billing period.

This change came with tradeoffs the team carefully evaluated:

- **Warehouse startup latency** (200-600ms cold start) proved negligible for their workload patterns
- **Loss of warehouse-level query caching** had minimal practical impact since most queries operated on different data slices
- **Query batching discipline** was required to avoid inefficient single-query activations

**Impact:** An additional 50% cost reduction from eliminating idle warehouse billing.

## Combined Results

Across all four optimization phases, the team achieved:

- **85% reduction** in daily Snowflake credit consumption from peak usage levels
- **20x improvement** in average customer data refresh speed

## What Comes Next

The team identified several additional optimization opportunities for future work:

- **Materialized views and dynamic tables** to eliminate redundant calculations across queries
- **Deeper query batching** to maximize the value of each warehouse activation
- **Manual warehouse suspension** using Snowflake's quiescing state for even tighter control over billing
