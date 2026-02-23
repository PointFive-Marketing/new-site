export type OppProvider = "aws" | "azure" | "gcp" | "k8s" | "snowflake" | "multi"

export interface OppCard {
  title: string
  provider: OppProvider
  description: string
  tags: { label: string; highlight?: boolean }[]
  savings?: string
  cats: ("quick" | "deep" | "common" | "aws" | "azure" | "gcp" | "k8s" | "ai")[]
}

export const OPPORTUNITY_CARDS: OppCard[] = [
  {
    title: "Expensive VPC NAT Gateway Deployment",
    provider: "aws",
    description:
      "Detects workloads routing massive data through NAT Gateways when free alternatives like Gateway Endpoints exist. A single endpoint deployment can eliminate hundreds of thousands in annual data processing fees.",
    tags: [{ label: "Easy Fix", highlight: true }, { label: "Networking" }, { label: "Zero Downtime" }],
    savings: "$800K+ saved",
    cats: ["quick", "aws"],
  },
  {
    title: "Schedulable EC2 Instances",
    provider: "aws",
    description:
      "Identifies instances with low off-hours activity that can be automatically started and stopped on a schedule. Eliminates waste from resources running 24/7 when only needed during business hours.",
    tags: [{ label: "Automated", highlight: true }, { label: "Compute" }],
    savings: "$820K+ saved",
    cats: ["quick", "aws"],
  },
  {
    title: "Serverless-Ready OpenSearch Domains",
    provider: "aws",
    description:
      "Identifies low-usage provisioned OpenSearch domains that are candidates for serverless migration — eliminating fixed instance costs for intermittent workloads.",
    tags: [{ label: "Quick Migration", highlight: true }, { label: "Search" }],
    savings: "$390K+ saved",
    cats: ["quick", "aws"],
  },
  {
    title: "Suboptimal Azure Disk Types",
    provider: "azure",
    description:
      "Universal detection across all Azure managed disk types — Premium SSD, Standard SSD, and Standard HDD — identifying disks that can be downtierred based on actual IOPS and throughput patterns.",
    tags: [{ label: "High Impact", highlight: true }, { label: "Storage" }],
    savings: "$630K+ saved",
    cats: ["quick", "azure"],
  },
  {
    title: "S3 Traffic Traversing NAT Gateway (17-Detection Suite)",
    provider: "aws",
    description:
      "Uses VPC Flow Logs and Route53 Query Logging to identify exactly which services route traffic through expensive NAT Gateways. Covers S3, DynamoDB, SQS, SNS, Lambda, ECR, CloudWatch, and 10 more services. Example customer saved $600K from a single gateway.",
    tags: [{ label: "Only PointFive", highlight: true }, { label: "Networking" }],
    savings: "$600K+ example",
    cats: ["deep", "aws"],
  },
  {
    title: "Duplicate CloudTrail Management Events",
    provider: "aws",
    description:
      "Detects when multiple CloudTrail trails log the same management events beyond the free tier. Uses virtual cost allocation to individual trails — a breakdown AWS doesn't expose natively.",
    tags: [{ label: "Hidden Cost", highlight: true }, { label: "Observability" }],
    savings: "$147K+ saved",
    cats: ["deep", "aws"],
  },
  {
    title: "Overprovisioned EBS via Snapshot Side-Scanning",
    provider: "aws",
    description:
      "Analyzes EBS snapshots to detect actual disk utilization without requiring agents or write access. Identifies volumes provisioned far beyond what the filesystem actually uses — waste invisible to standard monitoring.",
    tags: [{ label: "Side-Scanning", highlight: true }, { label: "Storage" }],
    savings: "$1.5M+ estimated",
    cats: ["deep", "aws"],
  },
  {
    title: "Suboptimal Cloud Logging Bucket Architecture",
    provider: "gcp",
    description:
      "First architectural detection in GCP. Identifies when logs are stored in expensive native Cloud Logging storage instead of being exported to cost-effective Google Cloud Storage buckets — a common but hidden design flaw.",
    tags: [{ label: "Architecture", highlight: true }, { label: "Logging" }],
    cats: ["deep", "gcp"],
  },
  {
    title: "RDS Snapshot Lifecycle Suite (6 Detections)",
    provider: "aws",
    description:
      "DeepWaste™ breaks down RDS snapshot costs to individual ARNs — something AWS doesn't expose. Covers orphaned snapshots, excessive retention, and non-production over-protection. RDS snapshots are 2–5% of total AWS costs.",
    tags: [{ label: "Cost Attribution", highlight: true }, { label: "Database" }],
    savings: "$240K+ saved",
    cats: ["deep", "aws"],
  },
  {
    title: "Abandoned Incomplete Multipart S3 Uploads",
    provider: "aws",
    description:
      "Uncovers hidden storage costs from incomplete multipart uploads that don't appear in standard S3 listings or the AWS console — phantom objects silently accumulating charges.",
    tags: [{ label: "Invisible Waste", highlight: true }, { label: "Storage" }],
    cats: ["deep", "aws"],
  },
  {
    title: "Underutilized Compute Instances",
    provider: "multi",
    description:
      "Over-provisioned EC2 instances, Azure VMs, and GCE machines operating consistently below capacity. Rightsizing recommendations across all instance families with performance-safe guardrails.",
    tags: [{ label: "Compute" }, { label: "AWS" }, { label: "Azure" }, { label: "GCP" }],
    savings: "20–40% savings",
    cats: ["common", "aws", "azure", "gcp"],
  },
  {
    title: "Inactive & Orphaned Resources",
    provider: "multi",
    description:
      'Complete "inactivity track" across ElastiCache, Kinesis, OpenSearch, RDS, Azure SQL, and more — resources incurring charges with zero or near-zero traffic. The simplest wins in any environment.',
    tags: [{ label: "All Services" }, { label: "Easy Win", highlight: true }],
    cats: ["common", "aws", "azure", "gcp"],
  },
  {
    title: "Non-Production Overprovisioning",
    provider: "multi",
    description:
      "Multi-AZ deployments in dev/staging, premium storage tiers for test data, production-grade security features on non-production workloads. Savings without touching production.",
    tags: [{ label: "Non-Prod" }, { label: "Zero Risk", highlight: true }],
    cats: ["common", "aws", "azure", "gcp"],
  },
  {
    title: "Outdated Instance Generations",
    provider: "multi",
    description:
      "Previous-generation compute, database, and storage instances where newer generations offer better performance at lower cost. A migration that pays for itself immediately.",
    tags: [{ label: "Modernization" }, { label: "All Providers" }],
    savings: "20–40% savings",
    cats: ["common", "aws", "azure", "gcp"],
  },
  {
    title: "S3 Object Versions Without Lifecycle Policy",
    provider: "aws",
    description:
      "Detects versioned S3 buckets where old object versions accumulate indefinitely without expiration rules — a hidden storage cost that grows silently over time.",
    tags: [{ label: "Storage" }, { label: "Lifecycle" }],
    savings: "$145K+ saved",
    cats: ["common", "aws"],
  },
  {
    title: "Inactive & Underutilized K8s Workloads",
    provider: "k8s",
    description:
      "Agentless detection across Deployments, StatefulSets, DaemonSets, ReplicaSets, and CronJobs — identifying workloads requesting resources far beyond actual utilization. Covers EKS, AKS, and GKE.",
    tags: [{ label: "Agentless", highlight: true }, { label: "Provider-Agnostic" }],
    savings: "15–70% of K8s spend",
    cats: ["common", "k8s"],
  },
  {
    title: "Excessive DaemonSet Overhead",
    provider: "k8s",
    description:
      "Detects when node sizes are too small relative to the fixed overhead of DaemonSets running on every node — meaning a disproportionate share of each node's capacity goes to system workloads rather than application pods.",
    tags: [{ label: "Architecture", highlight: true }, { label: "Node Sizing" }],
    cats: ["deep", "k8s"],
  },
  {
    title: "MSK Cluster Optimization Suite (9 Detections)",
    provider: "aws",
    description:
      "Comprehensive Kafka coverage: inactive clusters, underutilization, Express broker migration, compression optimization, client placement, storage configuration, and monitoring levels. From $18K to $300K in detected savings in a single month.",
    tags: [{ label: "Full Coverage", highlight: true }, { label: "Streaming" }],
    savings: "$300K+ saved",
    cats: ["deep", "aws"],
  },
  {
    title: "Azure OpenAI Model Optimization",
    provider: "azure",
    description:
      "First AI-native service coverage: detects when provisioned throughput units are underutilized or when workloads can be served by more cost-effective model versions without quality degradation.",
    tags: [{ label: "AI Costs", highlight: true }, { label: "Cognitive Services" }],
    cats: ["deep", "azure", "ai"],
  },
  {
    title: "GPU Instance Rightsizing",
    provider: "aws",
    description:
      "Identifies GPU instances (P4d, P5, G5, Inf2) running ML training and inference workloads at low GPU utilization — recommending smaller instance types or spot-based alternatives without impacting throughput.",
    tags: [{ label: "AI Compute", highlight: true }, { label: "GPU" }],
    savings: "$420K+ saved",
    cats: ["quick", "aws", "ai"],
  },
  {
    title: "SageMaker Endpoint Idle Detection",
    provider: "aws",
    description:
      "Detects SageMaker real-time inference endpoints with minimal invocation traffic — candidates for serverless inference, auto-scaling adjustments, or scheduled availability windows.",
    tags: [{ label: "ML Platform", highlight: true }, { label: "Serverless" }],
    savings: "$185K+ saved",
    cats: ["deep", "aws", "ai"],
  },
  {
    title: "Bedrock Provisioned Throughput Waste",
    provider: "aws",
    description:
      "Identifies Amazon Bedrock provisioned throughput commitments where actual token usage falls far below reserved capacity — recommending on-demand pricing or right-sized commitments.",
    tags: [{ label: "LLM Costs", highlight: true }, { label: "Foundation Models" }],
    savings: "$95K+ saved",
    cats: ["deep", "aws", "ai"],
  },
  {
    title: "Vertex AI Training Job Optimization",
    provider: "gcp",
    description:
      "Detects Vertex AI custom training jobs using oversized machine types or running without preemptible/spot instances — common in ML experimentation workflows where cost discipline is often overlooked.",
    tags: [{ label: "ML Training", highlight: true }, { label: "Spot-Ready" }],
    cats: ["quick", "gcp", "ai"],
  },
  {
    title: "Azure GPU VM Scheduling",
    provider: "azure",
    description:
      "Identifies Azure NC, ND, and NV-series GPU VMs with low off-hours utilization patterns — candidates for automated start/stop schedules, saving up to 65% on AI/ML development workloads.",
    tags: [{ label: "Scheduling", highlight: true }, { label: "AI Compute" }],
    savings: "65% savings",
    cats: ["quick", "azure", "ai"],
  },
  {
    title: "Snowflake Warehouse Auto-Suspend",
    provider: "snowflake",
    description:
      "Identifies virtual warehouses that remain active well beyond query completion — burning credits during idle periods. First PaaS optimization with more warehouse, storage, and query detections coming.",
    tags: [{ label: "New", highlight: true }, { label: "Data Warehouse" }],
    cats: ["quick", "snowflake"],
  },
  {
    title: "ECS Fargate CPU & Memory Overprovisioning",
    provider: "aws",
    description:
      "Unified detection for Fargate tasks with CPU and memory allocations far exceeding actual peak usage — with consolidated rightsizing recommendations that respect Fargate's allowed configurations.",
    tags: [{ label: "Containers" }, { label: "Serverless" }],
    savings: "$380K+ saved",
    cats: ["quick", "aws"],
  },
  {
    title: "CloudWatch Logs Infrequent Access",
    provider: "aws",
    description:
      "Identifies log groups with low query frequency that can be moved to Infrequent Access class — same retention, 50% lower ingestion cost, with no operational impact.",
    tags: [{ label: "50% Savings", highlight: true }, { label: "Observability" }],
    savings: "$184K+ saved",
    cats: ["quick", "aws"],
  },
  {
    title: "GCP Persistent Disk Optimization",
    provider: "gcp",
    description:
      "Detects pd-ssd disks that can be migrated to pd-balanced based on actual IOPS patterns, plus identification of unused persistent disks across all GCE instances.",
    tags: [{ label: "Storage" }, { label: "Compute" }],
    savings: "42% disk savings",
    cats: ["common", "gcp"],
  },
  {
    title: "DynamoDB Capacity Mode Mismatch",
    provider: "aws",
    description:
      "Bi-directional detection: identifies tables that should switch from provisioned to on-demand AND tables mistakenly on on-demand that should move back. Example customer found a single table costing $105K/year after an accidental migration.",
    tags: [{ label: "Bi-Directional", highlight: true }, { label: "NoSQL" }],
    savings: "$105K+ example",
    cats: ["deep", "aws"],
  },
]

export const WASTE_CATEGORIES = [
  {
    title: "Unused Resources",
    description:
      "Orphaned, inactive, and abandoned resources still incurring charges — load balancers with no targets, unattached volumes, idle clusters.",
    icon: "unused",
  },
  {
    title: "Underutilization",
    description:
      "Over-provisioned resources consistently operating below capacity — instances, databases, and clusters sized for peak that never comes.",
    icon: "underutil",
  },
  {
    title: "Architecture Issues",
    description:
      "Suboptimal designs causing unnecessary cost — NAT Gateway routing, logging architectures, redundancy in non-production environments.",
    icon: "arch",
  },
  {
    title: "Configuration Gaps",
    description:
      "Misaligned settings versus real usage — storage tiers, disk types, capacity modes, and retention policies that don't match actual workload patterns.",
    icon: "config",
  },
  {
    title: "Modernization",
    description:
      "Migration to newer or more cost-effective alternatives — current-gen instances, serverless options, and managed service upgrades.",
    icon: "modern",
  },
  {
    title: "Commitment Optimization",
    description:
      "Pricing model and reservation optimization — Reserved Instances, Savings Plans, committed use discounts across all providers and services.",
    icon: "commit",
  },
] as const

export const DIFFERENTIATORS = [
  {
    num: "01",
    title: "Agentless architecture",
    description:
      "The only agentless Kubernetes optimization solution on the market. Read-only access, zero deployment overhead, minutes to first insight.",
  },
  {
    num: "02",
    title: "Research-driven detection",
    description:
      "A dedicated Cloud Cost Research Team ships ~10 new optimization types weekly — using methodologies inspired by cybersecurity threat intelligence.",
  },
  {
    num: "03",
    title: "Multi-source data correlation",
    description:
      "We don't just read your bill. We correlate billing data with CloudWatch metrics, VPC Flow Logs, Route53 queries, CloudTrail activity, and direct API state — finding waste that single-source tools miss.",
  },
  {
    num: "04",
    title: "Agentic Remediation",
    description:
      "AI coding agents deliver contextual recommendations with human-curated remediation playbooks. Every opportunity includes root cause analysis, impact assessment, and engineering-grade execution paths—with full human oversight at every step.",
  },
] as const
