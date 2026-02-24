---
title: "Building PointFive: The Human Side of Being On-Call"
date: "2025-04-22"
author: "Ilai Fallach"
category: "Engineering"
tags: ["Engineering", "On-Call", "DevOps", "Culture", "Observability"]
excerpt: "How PointFive approaches on-call duty — from the tools we use (incident.io, Grafana, Sentry) to how we support engineer well-being and turn incidents into growth opportunities."
readingTime: "6 min read"
---

## Why On-Call Matters

On-call gets a bad reputation in our industry, and often for good reason. Poorly managed on-call rotations burn out engineers, create resentment, and erode team morale. But done well, on-call duty is one of the most powerful levers an engineering organization has.

At PointFive, we see on-call as essential because it:

- **Builds resilience** -- Engineers who operate what they build develop an instinct for reliability that no amount of code review can replicate.
- **Drives ownership** -- When your name is on the rotation, you care more about the quality of alerts, runbooks, and system health.
- **Encourages learning** -- Nothing teaches you a system's internals like debugging it under pressure.
- **Strengthens trust** -- Customers and stakeholders trust a team that demonstrably stands behind its product around the clock.

## Our Toolchain

Good on-call starts with good tooling. We rely on three core systems:

- **incident.io** -- Manages our scheduling, paging, and incident coordination. It provides clear escalation paths and integrates with Slack so the on-call engineer is never guessing who to contact or what to do next.
- **Grafana Cloud** -- Our observability platform for metrics, logs, and traces. Engineers use Grafana dashboards for real-time monitoring and rely on Captain's Log to document observations and actions during incidents.
- **Sentry** -- Handles error monitoring and alerting. Sentry surfaces application-level issues that might not show up in infrastructure metrics, giving us full-stack visibility.

Together, these tools ensure that when something goes wrong, the on-call engineer has the context and communication channels to respond effectively.

## Supporting Our Engineers

Tooling is only half the equation. The other half is how we treat the people on the rotation.

### Clear Expectations

On-call duty replaces regular sprint work -- it is not added on top. Engineers on rotation focus on operational health, not feature delivery. Rotations are weekly, giving each person a manageable and predictable schedule.

### Reducing Noise

Alert fatigue is real and dangerous. We invest continuously in filtering alerts to eliminate noise. Every alert should be actionable. If it is not, we fix the alert, not the engineer's tolerance for interruptions. Runbooks accompany alerts so that response steps are documented and repeatable.

### Fostering Autonomy

On-call engineers are empowered to make decisions. They do not need permission to roll back a deployment, scale a service, or page a colleague. Trust and clear guidelines replace bureaucratic approval chains.

### Prioritizing Well-Being

Our on-call rotation covers working hours only. We do not expect engineers to sacrifice sleep or personal time. When incidents are stressful, peer support is always available. We debrief incidents without blame, focusing on systemic improvements rather than individual mistakes.

## On-Call as a Growth Opportunity

Beyond keeping the lights on, on-call duty develops engineers in ways that project work alone cannot:

- **Deep system knowledge** -- Debugging production issues builds intuition about how components interact under real-world conditions.
- **Decision-making under pressure** -- Incidents teach engineers to prioritize, communicate clearly, and act decisively when the stakes are high.
- **Continuous improvement** -- Every incident is a learning opportunity. Post-incident reviews feed directly into engineering priorities, making the system more robust over time.

## A Day in the Life

A typical on-call day at PointFive follows a steady rhythm:

- **Morning** -- Review overnight alerts and system health dashboards. Check for any degraded services or emerging trends.
- **Daytime** -- Respond to alerts as they arise, following runbooks for known issues and escalating when necessary. Investigate root causes and file follow-up tickets for non-urgent improvements.
- **End of day** -- Update the Captain's Log in Grafana with a summary of the day's observations, actions taken, and any open items for the next rotation.

This structure keeps on-call manageable and ensures continuity between shifts. It turns what could be a chaotic experience into a disciplined practice that makes both the engineer and the system stronger.
