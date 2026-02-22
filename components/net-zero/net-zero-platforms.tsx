const categories = [
  {
    icon: "☁️",
    title: "Cloud Providers",
    tags: [
      "AWS",
      "Azure",
      "GCP",
      "EC2",
      "S3",
      "RDS",
      "Lambda",
      "VMs",
      "Cloud SQL",
      "+35 more",
    ],
    highlight: ["AWS", "Azure", "GCP"],
  },
  {
    icon: "☸️",
    title: "Kubernetes",
    tags: [
      "EKS (Agentless)",
      "AKS (Agentless)",
      "GKE (Agentless)",
      "Self-hosted K8s",
      "Deployments",
      "StatefulSets",
      "DaemonSets",
      "CronJobs",
    ],
    highlight: ["EKS (Agentless)", "AKS (Agentless)", "GKE (Agentless)"],
  },
  {
    icon: "📊",
    title: "Data & AI Platforms",
    tags: [
      "Snowflake",
      "Databricks",
      "BigQuery",
      "Redshift",
      "Azure Synapse",
      "SageMaker",
      "GPU Instances",
      "Datadog (EA)",
    ],
    highlight: ["Snowflake", "Databricks", "BigQuery"],
  },
  {
    icon: "🗄️",
    title: "Databases & Storage",
    tags: [
      "RDS",
      "Aurora",
      "DynamoDB",
      "ElastiCache",
      "EBS",
      "S3",
      "Cosmos DB",
      "Cloud SQL",
    ],
    highlight: [],
  },
  {
    icon: "🌐",
    title: "Networking",
    tags: [
      "VPC",
      "NAT Gateway",
      "CloudFront",
      "ELB / ALB",
      "Route 53",
      "VPC Flow Logs",
      "Cross-AZ Traffic",
    ],
    highlight: [],
  },
  {
    icon: "📈",
    title: "Monitoring & Logs",
    tags: [
      "CloudWatch",
      "CloudTrail",
      "VPC Flow Logs",
      "Azure Monitor",
      "GCP Logging",
      "Log Retention",
    ],
    highlight: [],
  },
]

export function NetZeroPlatforms() {
  return (
    <section className="bg-neutral-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">
          Platform Coverage
        </div>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          Everywhere your
          <br />
          infrastructure lives
        </h2>
        <p className="mt-4 max-w-[600px] text-lg text-neutral-600">
          7 cloud platforms, 40+ services, 400+ optimization types. If
          you&apos;re spending on it, we&apos;re watching it.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-2.5 border-b border-border pb-4">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-[15px] font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                      cat.highlight.includes(tag)
                        ? "border border-primary/30 bg-primary/10 text-primary"
                        : "border border-border bg-neutral-50 text-neutral-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
