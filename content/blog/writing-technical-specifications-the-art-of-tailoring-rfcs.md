---
title: "Writing Technical Specifications: The Art of Tailoring RFCs"
date: "2025-03-18"
author: "Ilai Fallach"
category: "Engineering"
tags: ["Engineering", "RFCs", "Technical Specifications", "Documentation"]
excerpt: "PointFive's approach to RFCs — from full Tech-Spec RFCs for major projects to lightweight Mini RFCs for smaller changes, and when to use each."
readingTime: "4 min read"
---

## Why We Write RFCs

At PointFive, we write RFCs (Requests for Comments) before building anything significant. Not because we love documentation for its own sake, but because thinking through a problem on paper consistently leads to better outcomes than jumping straight into code.

RFCs serve several critical purposes:

- **Better planning** -- Writing forces clarity. Vague ideas become concrete proposals with defined scope and tradeoffs.
- **Alignment** -- An RFC gives the entire team a shared understanding of what is being built, why, and how. Misalignment caught in a document review is far cheaper than misalignment caught in production.
- **Documentation** -- RFCs become a living record of architectural decisions. Six months later, anyone can understand why a particular approach was chosen.
- **Risk mitigation** -- Peer review surfaces edge cases, security concerns, and scalability issues before a single line of code is written.
- **Scalability** -- As the team grows, RFCs ensure that institutional knowledge is captured and accessible, not locked in someone's head.

## Two Templates for Two Scales

Not every change needs a ten-page document. We use two RFC templates calibrated to the scope of the work.

### Tech-Spec RFC

The Tech-Spec RFC is our full specification format, used for Big Rock projects and significant architectural changes. It includes:

- **Background and motivation** -- Why this work matters and what problem it solves
- **Architecture overview** -- System design, component interactions, and data flows
- **User flows** -- How customers will experience the feature
- **API and database changes** -- Schema updates, new endpoints, and contract changes
- **Testing strategy** -- How we will validate correctness and performance
- **Implementation plan** -- Phased rollout, milestones, and dependencies

A Tech-Spec RFC typically takes a few days to write and goes through at least one round of peer review before implementation begins.

### Mini RFC

For smaller changes -- a new API endpoint, a refactor of an existing module, a minor feature addition -- the Mini RFC provides a lightweight alternative. It covers:

- **Problem statement** -- What needs to change and why
- **Proposed solution** -- The recommended approach in concise terms
- **Implementation details** -- Key technical decisions and any notable tradeoffs
- **Success metrics** -- How we will know the change achieved its goal
- **Open questions** -- Unresolved items that need input from reviewers

A Mini RFC can be written in under an hour and reviewed asynchronously. It keeps the team informed without creating unnecessary overhead.

## Best Practices

Across both formats, a few principles make our RFCs more effective:

- **Use simple language** -- Write for a broad audience. Avoid jargon when plain language works.
- **Include diagrams** -- A good architecture diagram communicates more than paragraphs of text. We use them liberally.
- **Treat RFCs as living documents** -- Plans change as you learn. We update RFCs during implementation to reflect reality.
- **Share early** -- A draft RFC shared early invites better feedback than a polished document shared late. We encourage authors to circulate work-in-progress versions.

## The Right Tool for the Job

The goal is not bureaucracy. It is better engineering. By matching the weight of the specification to the weight of the change, we keep our planning process efficient and our execution informed. Every RFC we write makes the next one easier -- and makes the resulting code better.
