import {
  Cloud,
  Container,
  BrainCircuit,
  Database,
  Network,
  Activity,
  type LucideIcon,
} from "lucide-react"

const categories: {
  icon: LucideIcon
  title: string
  tags: string[]
  highlight: string[]
}[] = [
  {
    icon: Cloud,
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
    icon: Container,
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
    icon: BrainCircuit,
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
    icon: Database,
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
    icon: Network,
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
    icon: Activity,
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
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Platform Coverage
          </p>
          <h2
            className="mx-auto mt-3 max-w-3xl text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Everywhere your infrastructure lives
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-neutral-500">
            7 cloud platforms, 40+ services, 400+ optimization types. If
            you&apos;re spending on it, we&apos;re watching it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-3 border-b border-border pb-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#0000EE]/20 bg-[#0000EE]/5">
                  <cat.icon className="h-[18px] w-[18px] text-[#0000EE]" />
                </div>
                <h3 className="text-[16px] font-bold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-md px-2.5 py-1 text-[13px] font-medium ${
                      cat.highlight.includes(tag)
                        ? "border border-[#0000EE]/30 bg-[#0000EE]/10 text-[#0000EE]"
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
