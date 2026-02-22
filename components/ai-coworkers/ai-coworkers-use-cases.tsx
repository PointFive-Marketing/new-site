import Image from "next/image"
import {
  FileBarChart,
  AlertTriangle,
  Timer,
  TrendingUp,
  Tags,
  Server,
} from "lucide-react"

const USE_CASES = [
  {
    icon: FileBarChart,
    title: "Provider-Specific Weekly Report",
    description:
      "Every Monday, get all open opportunities grouped by cloud provider. Route GCP opportunities via email and AWS opportunities to Slack — sorted by savings.",
    color: "border-emerald-500/30 bg-emerald-500/5",
    iconColor: "text-emerald-500",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Alert with Owner Routing",
    description:
      "Check daily for new active anomalies. If found, alert the FinOps channel with the anomaly name, cost impact, and affected service — then notify the allocated team.",
    color: "border-orange-500/30 bg-orange-500/5",
    iconColor: "text-orange-500",
  },
  {
    icon: Timer,
    title: "Opportunity Escalation with Wait",
    description:
      "Find high-value unassigned opportunities, assign them to the team lead, wait 3 days, then escalate to Slack if status hasn't changed.",
    color: "border-yellow-500/30 bg-yellow-500/5",
    iconColor: "text-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "Weekly Savings Digest",
    description:
      "Every Monday morning, send a Slack message with the top 10 open opportunities sorted by savings amount, grouped by service and team.",
    color: "border-blue-500/30 bg-blue-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: Tags,
    title: "Untagged Resource Weekly Audit",
    description:
      "Automatically identify untagged resources every week and route notifications to the responsible teams for remediation.",
    color: "border-red-500/30 bg-red-500/5",
    iconColor: "text-red-500",
  },
  {
    icon: Server,
    title: "Unallocated Resource Alert",
    description:
      "Monitor for resources with no team allocation and flag them immediately — ensuring nothing falls through the cracks.",
    color: "border-amber-500/30 bg-amber-500/5",
    iconColor: "text-amber-500",
  },
]

export function AICoworkersUseCases() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,0,238,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Use Cases
          </p>
          <h2
            className="mx-auto mt-3 max-w-3xl text-balance text-white"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            What Co-workers Can Do for You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#B4B4D0]">
            Describe any cloud cost workflow in plain language. Here are just a
            few examples of what teams are building today.
          </p>
        </div>

        {/* Product screenshot - weekly report setup */}
        <div className="mb-12 overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-[#0000EE]/10">
          <Image
            src="/ai-coworkers/coworker-report.jpg"
            alt="PointFive AI Co-workers setting up a weekly cost optimization summary report with Slack channel and schedule selection"
            width={1400}
            height={880}
            className="w-full"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((uc, i) => (
            <div
              key={i}
              className={`rounded-sm border p-6 backdrop-blur-sm transition-colors hover:border-white/20 ${uc.color}`}
            >
              <uc.icon className={`h-5 w-5 ${uc.iconColor}`} />
              <h3 className="mt-3 text-[16px] font-bold text-white">
                {uc.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#B4B4D0]">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
