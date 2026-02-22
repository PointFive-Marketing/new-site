---
title: "How We Built a Safe Public GraphQL API with Minimal Code Changes"
date: "2024-09-09"
author: "Raz Tal"
authorTitle: ""
excerpt: "PointFive needed to expose parts of their internal GraphQL API publicly without compromising security. Here is how custom directives and schema filtering solved the problem with minimal code changes."
category: "Engineering"
readingTime: "7 min read"
tags: ["GraphQL", "API Security", "Go", "Engineering", "Open Source"]
---

PointFive's platform is built on a Go-powered GraphQL API that serves internal operations across the product. When the time came to expose portions of this API to external users, the team faced a common but tricky engineering challenge: how to selectively publish parts of an existing API without duplicating code, creating maintenance headaches, or accidentally leaking internal functionality.

The goals were clear -- the solution needed to be cost-effective to maintain, seamless in developer experience, and secure by default. Engineers should be able to easily mark resolvers for public exposure while keeping internal ones locked down.

## Schema-First Design as the Foundation

The team had adopted a schema-first approach to GraphQL development, defining the complete schema upfront with types, queries, and mutations using declarative syntax. This design choice turned out to be critical, because it meant the schema itself could serve as the control surface for visibility decisions.

GraphQL's support for custom directives provided the mechanism. The team introduced two directives that govern what becomes publicly accessible:

**@expose** -- Applied to types, queries, and mutations that should be available in the public API. Everything is hidden by default, and subcomponents of exposed elements are automatically included.

**@hide** -- Applied to specific fields, enums, or inputs that must remain private even when their parent object is exposed. This enables fine-grained control -- for example, exposing a User type publicly while hiding sensitive fields like email addresses.

## Why Introspection Filtering Fell Short

The initial instinct was to use GraphQL introspection filtering -- it seemed like a natural fit for hiding internal schema elements. However, testing revealed a subtle but serious security issue.

GraphQL servers include a helpful suggestion feature: when a client sends a query with a misspelled field name, the server responds with "did you mean X?" suggestions. This feature draws from the full internal schema, meaning it could inadvertently reveal the names of non-public queries and types to anyone probing the API. This created an information leakage vector that undermined the entire purpose of schema restriction.

The team ultimately reserved introspection filtering for a single narrow purpose -- hiding the custom directive definitions themselves from public view.

## The Directive-Based Filtering Approach

Instead of relying on runtime introspection filtering, the team built a schema transformation pipeline that processes the annotated schema before it is served publicly. The process works as follows:

1. **Scan for @expose markers** -- Identify all types, queries, and mutations tagged for public access
2. **Strip internal directives** -- Remove @expose and @hide annotations from the published schema so implementation details are not visible
3. **Filter fields and arguments** -- Remove any fields marked with @hide, along with their associated arguments and types
4. **Clean up orphaned types** -- Remove any types, enums, or inputs that are no longer referenced after filtering

The filtering logic follows simple, predictable rules. For types, an element is included only if @expose is present and @hide is absent. For fields within an exposed type, they are included by default unless @hide is explicitly applied.

## Go Implementation and Open Source

The implementation in Go handles the schema transformation through a series of filtering functions -- one for queries and mutations, one for types, and field-level filtering within each type. The directive-based approach keeps the logic straightforward and auditable.

The team packaged this work into an open-source Go module called **graphql-schema-filter**, available on GitHub with working examples that demonstrate the full directive-based filtering workflow.

## Results

By transforming schemas before publication rather than filtering at runtime, the team achieved several wins simultaneously: strong security guarantees against information leakage, minimal code complexity, and a developer experience where marking something as public or private requires only adding a single directive annotation. The internal API continues to evolve freely while the public surface area remains tightly controlled.
