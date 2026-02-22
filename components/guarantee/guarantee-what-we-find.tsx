import {
  Server,
  Snowflake,
  Zap,
  Database,
  RefreshCw,
  Container,
} from "lucide-react"

const findings = [
  {
    icon: Server,
    savings: "Up to 60%",
    title: "Idle Compute Running 24/7",
    description:
      "EC2 instances, VMs, and compute resources with <3% utilization over 30 days — still provisioned at full cost. Forgotten dev/test environments that nobody terminated.",
    tag: "AWS · Azure · GCP",
  },
  {
    icon: Snowflake,
    savings: "Up to 85%",
    title: "Oversized Data Warehouses",
    description:
      "Snowflake multi-cluster warehouses and BigQuery slots running at 5–10% query load, provisioned for peak capacity that never materializes.",
    tag: "Snowflake · BigQuery",
  },
  {
    icon: Zap,
    savings: "30–50%",
    title: "Serverless Misconfigurations",
    description:
      "Lambda functions allocated 2–4x more memory than needed. Step Functions with unnecessary retries. CloudWatch log groups retaining data forever.",
    tag: "AWS · Serverless",
  },
  {
    icon: Database,
    savings: "40–70%",
    title: "Non-Production Over-Engineering",
    description:
      "Dev and staging databases running Multi-AZ, provisioned IOPS, and high-availability configs that double cost without meaningful resilience benefit.",
    tag: "AWS · Azure · Database",
  },
  {
    icon: RefreshCw,
    savings: "$2K–$15K/mo",
    title: "Network Traffic Waste",
    description:
      "Services routing through NAT Gateways unnecessarily. Cross-AZ data transfer that could be eliminated with simple architectural alignment.",
    tag: "AWS · Networking",
  },
  {
    icon: Container,
    savings: "25–45%",
    title: "Kubernetes Overprovisioning",
    description:
      "Pods with CPU/memory requests 3–5x actual usage, blocking node capacity and forcing unnecessary cluster scale-out. All detected agentlessly.",
    tag: "EKS · AKS · GKE",
  },
]

export function GuaranteeWhatWeFind() {
  return (
    <section className="bg-neutral-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
          What We Typically Find
        </p>
        <h2
          className="mt-3 text-foreground"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          The waste hiding in
          <br />
          every cloud account
        </h2>
        <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed text-neutral-500">
          These aren&apos;t theoretical savings. They&apos;re real
          inefficiencies we find within 48 hours — the kind traditional FinOps
          tools miss entirely.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {findings.map((f) => (
            <div
              key={f.title}
              className="group rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-[#0000EE]/30 hover:shadow-lg hover:shadow-[#0000EE]/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-neutral-50">
                  <f.icon className="h-5 w-5 text-[#0000EE]" />
                </div>
                <span className="rounded-md bg-[#00E639]/10 px-3 py-1 text-[13px] font-bold text-[#00993d]">
                  {f.savings}
                </span>
              </div>
              <h3 className="mt-4 text-[17px] font-bold leading-snug text-foreground">
                {f.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-500">
                {f.description}
              </p>
              <span className="mt-4 inline-block rounded-md bg-neutral-100 px-2.5 py-1 text-[12px] font-medium text-neutral-500">
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
