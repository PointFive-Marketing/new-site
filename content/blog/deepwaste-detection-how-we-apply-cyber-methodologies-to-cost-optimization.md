---
title: "DeepWaste Detection: How We Apply Cyber Methodologies to Cost Optimization"
date: "2024-12-04"
author: "Sharon Gross and Dor Azouri"
authorTitle: ""
excerpt: "PointFive's DeepWaste Detection borrows from cybersecurity threat detection methodologies to build a continuous detection engine for cloud cost inefficiencies, bridging the gap between FinOps and engineering teams."
category: "Engineering"
readingTime: "7 min read"
tags: ["DeepWaste", "Cybersecurity", "Cost Optimization", "Detection Engine", "AWS", "FinOps"]
---

Presented at AWS re:Invent in Las Vegas, PointFive's DeepWaste Detection approach draws directly from cybersecurity tools and methodologies to uncover cloud cost inefficiencies that traditional FinOps tools miss.

## The Scale of the Cloud Waste Problem

Cloud spending continues to expand rapidly, with projections placing the market above $675 billion by the end of 2024. Despite this growth, studies consistently indicate that more than 30% of cloud spend goes to waste, and the vast majority of organizations report that managing cloud spending remains a significant challenge.

Three primary obstacles stand in the way of effective cost control:

**The Access Gap:** Engineers build and maintain applications, but FinOps teams often lack visibility into how those applications are constructed and how they evolve over time. This information asymmetry makes it difficult to identify the root causes of cost inefficiencies.

**Accountability Without Control:** FinOps teams bear responsibility for cost optimization but typically cannot modify code or configurations themselves. They depend on engineering collaboration to implement changes, creating a handoff that frequently breaks down.

**Data Complexity:** Effective optimization requires expertise spanning cost usage metrics, resource context, and enormous data volumes. The sheer breadth of information makes manual analysis impractical at scale.

## The Cybersecurity Parallel

The cybersecurity industry faced remarkably similar challenges in its earlier evolution. The concept of "shifting left" -- integrating security practices earlier in the development lifecycle -- empowered engineers to address vulnerabilities proactively rather than relying on separate security teams to catch issues after deployment.

This approach brought the right teams together to solve problems at the source. PointFive applies the same philosophy to cloud cost management: rather than treating cost optimization as an afterthought owned by a separate team, integrate it into engineering workflows where the people with the knowledge and access to act can do so directly.

## How DeepWaste Detection Works

PointFive developed DeepWaste Detection as a continuous detection engine specifically designed for cloud cost inefficiencies. Positioned as a FinOps Detection and Response (FDR) solution, the system operates through a multi-stage architecture:

### Data Ingestion and Orchestration

An ELT (Extract, Load, Transform) pipeline consolidates the diverse data points needed for accurate detection -- billing data, resource metadata, usage metrics, configuration details, and event histories.

### LLM Enrichment

Large language models enhance the ingested data, adding contextual understanding that improves detection accuracy and helps generate actionable recommendations.

### Detection Library

A library of field-tested detection patterns analyzes environment data against known inefficiency signatures. These detections are continuously refined based on real-world results.

### Context Provision

Each detected opportunity is enriched with resource metadata, event history, discount information, usage metrics, user attribution, and context graphs. This comprehensive context eliminates investigation friction and drives higher remediation conversion rates.

## From Detection to Remediation

DeepWaste Detection does not stop at identifying waste. The system integrates into engineering workflows by embedding cost optimization tasks directly into Jira and other task management platforms. Each task includes the context engineers need to understand the issue, assess its impact, and implement a fix.

This workflow integration is critical because it meets engineers where they already work rather than requiring them to adopt a separate cost management tool.

## Continuous Optimization as a Discipline

Just as cybersecurity threats require ongoing monitoring and response, cloud waste is not a one-time problem to solve. New inefficiencies emerge continuously as applications evolve, infrastructure scales, and usage patterns shift. DeepWaste Detection treats cloud cost optimization as a continuous discipline, leveraging advanced detection technology, cross-team collaboration, and deep cloud expertise to maintain an always-on optimization posture.
