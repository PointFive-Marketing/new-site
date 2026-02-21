export type CoverageProvider = "aws" | "azure" | "gcp" | "data" | "k8s"

export interface CoverageItem {
  name: string
  sub: string
  provider: CoverageProvider
}

export interface CoverageCategory {
  name: string
  items: CoverageItem[]
}

export const COVERAGE_CATEGORIES: CoverageCategory[] = [
  {
    name: "Compute",
    items: [
      { name: "Amazon EC2", sub: "AWS", provider: "aws" },
      { name: "Azure VMs", sub: "Azure", provider: "azure" },
      { name: "Compute Engine", sub: "GCP", provider: "gcp" },
      { name: "OCI Compute", sub: "Oracle", provider: "data" },
      { name: "WorkSpaces", sub: "AWS", provider: "aws" },
    ],
  },
  {
    name: "Kubernetes & Containers",
    items: [
      { name: "Amazon EKS", sub: "Managed K8s", provider: "k8s" },
      { name: "Azure AKS", sub: "Managed K8s", provider: "k8s" },
      { name: "Google GKE", sub: "Managed K8s", provider: "k8s" },
      { name: "OpenShift", sub: "Enterprise K8s", provider: "k8s" },
      { name: "Amazon ECS", sub: "Containers", provider: "aws" },
      { name: "AWS Fargate", sub: "Serverless Containers", provider: "aws" },
      { name: "Azure Container Instances", sub: "Containers", provider: "azure" },
      { name: "Azure Container Apps", sub: "Serverless Containers", provider: "azure" },
      { name: "Cloud Run", sub: "Containers", provider: "gcp" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "Amazon RDS", sub: "Relational DB", provider: "aws" },
      { name: "DynamoDB", sub: "NoSQL", provider: "aws" },
      { name: "ElastiCache", sub: "Caching", provider: "aws" },
      { name: "OpenSearch", sub: "Search", provider: "aws" },
      { name: "Azure SQL", sub: "Relational DB", provider: "azure" },
      { name: "Azure PostgreSQL", sub: "Relational DB", provider: "azure" },
      { name: "Azure Cosmos DB", sub: "NoSQL", provider: "azure" },
      { name: "Azure Cache for Redis", sub: "Caching", provider: "azure" },
      { name: "Cloud SQL", sub: "Relational DB", provider: "gcp" },
      { name: "Memorystore", sub: "Caching", provider: "gcp" },
      { name: "Bigtable", sub: "NoSQL", provider: "gcp" },
      { name: "OCI Autonomous DB", sub: "Databases", provider: "data" },
      { name: "MongoDB Atlas", sub: "NoSQL Database", provider: "data" },
    ],
  },
  {
    name: "Data Warehouses & Analytics",
    items: [
      { name: "Snowflake", sub: "Data Warehouse", provider: "data" },
      { name: "Databricks", sub: "Unified Analytics", provider: "data" },
      { name: "Amazon Redshift", sub: "Data Warehouse", provider: "aws" },
      { name: "BigQuery", sub: "Data Warehouse", provider: "gcp" },
      { name: "Azure Synapse", sub: "Analytics", provider: "azure" },
      { name: "Azure Fabric", sub: "Data Platform", provider: "azure" },
    ],
  },
  {
    name: "Storage",
    items: [
      { name: "Amazon EBS", sub: "Block Storage", provider: "aws" },
      { name: "Amazon S3", sub: "Object Storage", provider: "aws" },
      { name: "FSx / EFS", sub: "File Storage", provider: "aws" },
      { name: "Azure Disks", sub: "Block Storage", provider: "azure" },
      { name: "Azure Blob Storage", sub: "Object Storage", provider: "azure" },
      { name: "Azure NetApp Files", sub: "File Storage", provider: "azure" },
      { name: "Persistent Disk", sub: "Block Storage", provider: "gcp" },
      { name: "Cloud Storage", sub: "Object Storage", provider: "gcp" },
      { name: "Filestore", sub: "File Storage", provider: "gcp" },
      { name: "OCI Block Volume", sub: "Block Storage", provider: "data" },
      { name: "OCI Object Storage", sub: "Object Storage", provider: "data" },
    ],
  },
  {
    name: "Serverless & Functions",
    items: [
      { name: "AWS Lambda", sub: "Serverless", provider: "aws" },
      { name: "Azure Functions", sub: "Serverless", provider: "azure" },
      { name: "Cloud Functions", sub: "Serverless", provider: "gcp" },
      { name: "OCI Functions", sub: "Serverless", provider: "data" },
    ],
  },
  {
    name: "Networking & CDN",
    items: [
      { name: "VPC / NAT", sub: "Networking", provider: "aws" },
      { name: "Elastic Load Balancing", sub: "Load Balancers", provider: "aws" },
      { name: "CloudFront", sub: "CDN", provider: "aws" },
      { name: "Route 53", sub: "DNS", provider: "aws" },
      { name: "API Gateway", sub: "API Management", provider: "aws" },
      { name: "Azure Networking", sub: "Networking", provider: "azure" },
      { name: "Azure Front Door", sub: "CDN", provider: "azure" },
      { name: "Cloud CDN", sub: "CDN", provider: "gcp" },
      { name: "OCI Networking", sub: "Networking", provider: "data" },
    ],
  },
  {
    name: "Monitoring & Observability",
    items: [
      { name: "CloudWatch", sub: "Monitoring", provider: "aws" },
      { name: "CloudTrail", sub: "Audit Logging", provider: "aws" },
      { name: "VPC Flow Logs", sub: "Logging", provider: "aws" },
      { name: "Azure Monitor", sub: "Monitoring", provider: "azure" },
      { name: "Log Analytics", sub: "Observability", provider: "azure" },
      { name: "Cloud Logging", sub: "Observability", provider: "gcp" },
      { name: "Datadog", sub: "Observability", provider: "data" },
    ],
  },
  {
    name: "Streaming & Messaging",
    items: [
      { name: "Amazon MSK", sub: "Kafka Streaming", provider: "aws" },
      { name: "Kinesis", sub: "Streaming", provider: "aws" },
      { name: "SQS / SNS", sub: "Messaging", provider: "aws" },
      { name: "Amazon MQ", sub: "Message Broker", provider: "aws" },
      { name: "Azure Event Hubs", sub: "Streaming", provider: "azure" },
      { name: "Azure Service Bus", sub: "Message Queues", provider: "azure" },
      { name: "Pub/Sub", sub: "Messaging", provider: "gcp" },
    ],
  },
  {
    name: "AI & Machine Learning",
    items: [
      { name: "Amazon Bedrock", sub: "AI Platform", provider: "aws" },
      { name: "SageMaker", sub: "Machine Learning", provider: "aws" },
      { name: "EC2 GPU Instances", sub: "AI Compute", provider: "aws" },
      { name: "Azure OpenAI", sub: "AI Services", provider: "azure" },
      { name: "Azure Machine Learning", sub: "Machine Learning", provider: "azure" },
      { name: "Azure GPU VMs", sub: "AI Compute", provider: "azure" },
      { name: "Vertex AI", sub: "Machine Learning", provider: "gcp" },
      { name: "GCP GPU Instances", sub: "AI Compute", provider: "gcp" },
      { name: "Anthropic Claude", sub: "LLM Provider", provider: "data" },
      { name: "OpenAI API", sub: "LLM Provider", provider: "data" },
    ],
  },
  {
    name: "Security & Configuration",
    items: [
      { name: "Secrets Manager", sub: "Security", provider: "aws" },
      { name: "Azure App Config", sub: "Configuration", provider: "azure" },
      { name: "App Service", sub: "Web Apps", provider: "azure" },
      { name: "Elastic Cloud", sub: "Search & Analytics", provider: "data" },
    ],
  },
]
