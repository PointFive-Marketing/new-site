const opportunities = [
  {
    icon: "☁️",
    savings: "Up to 60% savings",
    title: "Idle EC2 Instances Running 24/7",
    description:
      "Compute instances with <3% CPU utilization over 30 days, still provisioned at full cost. Often forgotten dev/test environments never terminated.",
    tag: "AWS · Compute",
  },
  {
    icon: "❄️",
    savings: "Up to 85% savings",
    title: "Snowflake Warehouse Oversizing",
    description:
      "Multi-cluster warehouses running at 5–10% query load, auto-suspending but provisioned for peak capacity that never materializes.",
    tag: "Snowflake · Data",
  },
  {
    icon: "⚡",
    savings: "30–50% savings",
    title: "Lambda Memory Misconfiguration",
    description:
      "Functions allocated 2–4x more memory than execution requires, based on worst-case estimates rather than actual p99 usage patterns.",
    tag: "AWS · Serverless",
  },
  {
    icon: "🗄️",
    savings: "40–70% savings",
    title: "RDS Multi-AZ for Non-Critical Workloads",
    description:
      "Dev and staging databases running Multi-AZ configurations that double cost without providing meaningful resilience for non-production traffic.",
    tag: "AWS · Database",
  },
  {
    icon: "🔄",
    savings: "$2K–$15K/mo",
    title: "NAT Gateway Cross-AZ Traffic",
    description:
      "Services routing traffic through NAT Gateways unnecessarily, or cross-AZ calls that could be avoided through architectural alignment.",
    tag: "AWS · Networking",
  },
  {
    icon: "☸️",
    savings: "25–45% savings",
    title: "Kubernetes Overprovisioned Workloads",
    description:
      "Pods with CPU/memory requests 3–5x actual usage, blocking node capacity and forcing unnecessary cluster scale-out. Detected agentlessly.",
    tag: "Kubernetes · Agentless",
  },
]

export function NetZeroOpportunities() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">
          DeepWaste™ Detection
        </div>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          Waste hiding in plain sight
        </h2>
        <p className="mt-4 max-w-[600px] text-lg text-neutral-600">
          These aren&apos;t theoretical savings. They&apos;re real inefficiencies
          we find in the first week — the kind traditional FinOps tools never
          detect.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opp) => (
            <div
              key={opp.title}
              className="group rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-neutral-100 text-xl">
                  {opp.icon}
                </div>
                <span className="rounded-sm bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent-muted">
                  {opp.savings}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
                {opp.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                {opp.description}
              </p>
              <span className="mt-4 inline-block rounded bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-500">
                {opp.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
