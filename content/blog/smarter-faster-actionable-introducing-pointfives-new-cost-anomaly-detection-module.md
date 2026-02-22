---
title: "Smarter, Faster, Actionable: Introducing PointFive's New Cost Anomaly Detection Module"
date: "2025-07-10"
author: "Noa Avishur"
excerpt: "PointFive launches a new Cost Anomaly Detection module that embeds contextual anomaly information directly into engineering workflows, enabling rapid investigation and action."
category: "Product Update"
readingTime: "5 min read"
tags: ["anomaly detection", "product update", "cost management", "AI", "FinOps", "engineering workflows"]
---

## The Challenge

Cloud cost anomalies emerge unexpectedly, and when they do, speed and context matter. A single misconfiguration or deployment mistake can rapidly deplete budgets. Engineers need quick visibility into what changed, why it changed, and what the precise next steps should be.

PointFive's new Cost Anomaly Detection module addresses this challenge by embedding complete contextual anomaly information directly into engineering workflows, enabling rapid investigation and action.

## Flexibility Starts with Scoping

Every organization has distinct cloud usage patterns. A bank's cloud footprint looks completely different from an airline's. Rigid detection rules generate false positives and miss genuine issues.

The module uses **Prophet**, an AI model that analyzes complete historical datasets for each anomaly scope and detects seasonality patterns -- daily, weekly, monthly, or yearly. For example, recurring monthly billing spikes are learned and not flagged as anomalies.

## Customizable Detection Rules

The detection engine provides flexibility to define anomaly rules across various dimensions:

- **Account-level scoping** -- broad rules across entire accounts
- **Service-level scoping** -- narrow rules for specific services and usage types
- **Region-based rules** -- geography-specific thresholds
- **Tag-based rules** -- custom rules tied to team or project tags

Thresholds can be customized per team, per service, or per any combination of these dimensions.

## Actionable Insights, Not Just Alerts

The module goes beyond basic alerting with multiple root cause identification methods.

### Usage and Rate Breakdowns

Each anomaly is broken down to determine whether it stems from a **usage volume change** or an **effective cost per unit change**. Rate changes may indicate expired discounts or modified pricing terms. Usage changes suggest operational shifts. This distinction is critical because the root cause determines the right response.

### Anomaly Contributors

Each anomaly includes recommended contributing attributes most likely involved in the cost spike. The system helps engineers narrow down root causes by highlighting specific resources, services, tags, or accounts responsible. The detection algorithm runs independently for each contributor to identify anomalous behavior.

### Analysis Tab

The Analysis tab provides flexible exploration methods, breaking down cost trends over time by dimensions such as charge type and purchase option. This helps identify expired discounts and commitment coverage changes.

## Integrated Remediation

Upon identifying root causes, engineers can immediately take action:

- **Open a Jira ticket** pre-filled with relevant anomaly details
- **Assign team members** for follow-up investigation

The full loop -- alerting, investigation, and remediation -- happens in one place, eliminating the context-switching that slows down response times.

## What Comes Next

The Cost Anomaly Detection module enables organizations to move from detection to resolution efficiently. Additional platform expansions are planned to cover further use cases as the product evolves.
