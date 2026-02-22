---
title: "FinOps Foundation's FOCUS Initiative"
date: "2024-09-18"
author: "Akiva Kates"
excerpt: "An overview of the FOCUS specification for standardizing cloud billing data, its benefits for FinOps practitioners, and how organizations like GitLab and Zoom are adopting it."
category: "FinOps"
readingTime: "7 min read"
tags: ["FOCUS", "FinOps Foundation", "Cloud Billing", "Standardization", "GitLab", "Zoom"]
---

## What Is FOCUS?

The FOCUS Project is an open-source initiative under the Linux Foundation, supported by the FinOps Foundation. It defines a technical specification for cloud billing data, establishing clear requirements for cloud vendors to produce consistent cost and usage datasets. The goal is straightforward: practitioners should spend more time on FinOps activities and less on data normalization.

The FinOps Foundation announced General Availability of FOCUS Version 1.0 at FinOps X 2024, marking the specification's readiness for widespread adoption. AWS, Microsoft Azure, Google Cloud, and Oracle have all announced support and now offer billing data exports in the FOCUS format.

Alongside the 1.0 release, the FinOps Foundation launched a new certification -- the FinOps Certified FOCUS Analyst -- designed to help practitioners generate, ingest, and analyze FOCUS datasets.

## Key Benefits of FOCUS

- **Time Saving:** The standard reduces the effort required to normalize and analyze cloud cost data, enabling faster and more informed spending decisions.

- **Interoperability:** Organizations can integrate cost data from multiple cloud providers and internal environments into a unified view, enabling comprehensive cost management across the full technology portfolio.

- **Enhanced Reporting:** Consistent, comparable reports across different cloud environments improve visibility and control over cloud expenditures.

## Impact Across FinOps Disciplines

FOCUS delivers value across the full range of FinOps activities:

- **Visibility and Observability** -- Standardized data simplifies cost aggregation and monitoring, producing faster insights and consistent reporting
- **Commitments Management** -- Consistent metrics enable better tracking and prediction of commitment-based discounts across platforms
- **Cloud Waste Detection** -- A unified view helps identify idle and underutilized resources more effectively
- **Analytics** -- Standardized datasets enable comprehensive and accurate cost analysis
- **Unit Economics** -- Detailed metrics allow precise calculation of unit costs and better ROI visibility
- **Anomaly Detection** -- Standardized data improves detection accuracy and root cause analysis
- **Forecasting and Budgeting** -- Consistent historical data enhances forecast accuracy and financial planning
- **Contextualization** -- Unified data context supports informed decision-making and cross-team alignment
- **Policy and Governance** -- Standardized data aids compliance tracking and enables automated governance

## Case Study: GitLab's Implementation

GitLab, the DevOps platform, has been an early FOCUS adopter. Their implementation, shared at FinOps X 2024, highlights three key outcomes:

**Custom Data Pipeline:** GitLab built a FinOps data pipeline to ingest and transform cloud billing data into the FOCUS format, integrating data from multiple providers and internal systems into a unified view.

**Improved Allocation and Reporting:** Using FOCUS, GitLab improved the accuracy of cost allocation to different products and services while enhancing reporting capabilities for detailed spending analysis.

**Enhanced Unit Economics:** FOCUS enabled GitLab to calculate unit economics for various cloud resources, providing insights into operational cost efficiency that drove optimization decisions.

## Case Study: Zoom's Adoption Journey

Zoom also embraced FOCUS to streamline cloud financial operations, highlighting three areas of impact at FinOps X 2024:

**Unified Cost View:** Zoom uses FOCUS to consolidate cost data from multiple cloud providers and data centers, enabling analysis at various levels of granularity for optimization and resource allocation decisions.

**Improved Cost Allocation:** The specification enables accurate cost attribution to different products, services, and teams -- enhancing transparency and empowering data-driven decisions across the organization.

**Streamlined Forecasting:** The standardized data format facilitates more accurate predictions of future cloud costs, enabling better financial planning and resource management.

## The Road Ahead

FOCUS is not a one-time implementation but an ongoing journey. As more organizations adopt the specification, the benefits of standardization and interoperability will compound. Continuous refinement of cost allocation models and processes will help organizations realize the full potential of standardized cloud financial data.

The collaboration between the FinOps Foundation and the broader cloud community is establishing the foundation for a more efficient and transparent cloud financial ecosystem.
