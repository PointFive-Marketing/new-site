import { Check } from "lucide-react"

const CAPABILITIES = [
  {
    title: "Unified AI Spend View",
    description:
      "Observe AI services, infrastructure, and supporting resources across AWS Bedrock, Azure OpenAI, and GCP Vertex AI in one place.",
  },
  {
    title: "Token-Level Cost Tracking",
    description:
      "Go beyond aggregated billing. Track cost per token, per inference, and per deployment to understand exactly what drives your AI spend.",
  },
  {
    title: "Team & Service Attribution",
    description:
      "Automatically allocate AI costs to engineering teams, services, and environments without manual tagging or spreadsheet gymnastics.",
  },
  {
    title: "Cost Driver Analysis",
    description:
      "Identify which models, token patterns, inference endpoints, and supporting infrastructure are responsible for cost growth.",
  },
]

/* ── Simulated data for the UI panels ────────────────────────────────── */

const costSummary = {
  totalMonthly: "$4,260.62",
  totalResources: "11,257",
  openOpportunities: "8",
}

const serviceBreakdown = [
  { service: "SageMaker", resources: 3, cost: "$2,534.40", pct: 60 },
  { service: "Bedrock", resources: 8, cost: "$1,726.22", pct: 40 },
]

const topResources = [
  {
    name: "voyage-multilingual-2",
    type: "SageMaker Endpoint",
    account: "pointfive-prod",
    cost: "$2,534.40",
  },
  {
    name: "us-west-2-claude-3-opus",
    type: "Bedrock Inference",
    account: "pointfive-prod",
    cost: "$651.94",
  },
  {
    name: "us-west-2-claude-3-sonnet",
    type: "Bedrock Inference",
    account: "pointfive-prod",
    cost: "$411.49",
  },
]

export function AiCostVisibility() {
  return (
    <section className="bg-background" id="how-it-works">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
              Full Visibility
            </p>
            <h2
              className="mt-3 text-foreground"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              See Every Dollar of AI Spend. Allocate It to Every Team.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-500">
              PointFive maps your entire AI cost surface — from managed LLM
              APIs to GPU infrastructure — into a single view with engineering-level
              granularity.
            </p>
            <ul className="mt-8 space-y-4">
              {CAPABILITIES.map((cap) => (
                <li key={cap.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#00E639]/40 bg-[#00E639]/10">
                    <Check className="h-3 w-3 text-[#00E639]" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-neutral-600">
                    <strong className="text-foreground">{cap.title}</strong> —{" "}
                    {cap.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Custom designed product panels */}
          <div className="flex flex-col gap-5">
            {/* AI Cloud Costs Summary Panel */}
            <div className="overflow-hidden rounded-lg border border-border bg-white shadow-md">
              <div className="flex items-center justify-between border-b border-border bg-[#f9fafc] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-[10px] font-bold text-primary">
                    AI
                  </span>
                  <span className="text-[13px] font-semibold text-foreground">
                    AI Cloud Costs Summary
                  </span>
                </div>
                <span className="rounded-full bg-[#00E639]/10 px-2 py-0.5 font-mono text-[10px] font-medium text-[#00a82d]">
                  Live
                </span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-neutral-400">
                      Monthly AI Spend
                    </p>
                    <p className="mt-1 font-mono text-xl font-bold text-foreground">
                      {costSummary.totalMonthly}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-neutral-400">
                      Total AI Resources
                    </p>
                    <p className="mt-1 font-mono text-xl font-bold text-foreground">
                      {costSummary.totalResources}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-neutral-400">
                      Open Opportunities
                    </p>
                    <p className="mt-1 font-mono text-xl font-bold text-[#00a82d]">
                      {costSummary.openOpportunities}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                    Cost Breakdown by Service
                  </p>
                  <div className="space-y-2.5">
                    {serviceBreakdown.map((svc) => (
                      <div key={svc.service}>
                        <div className="flex items-center justify-between text-[12px]">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">
                              {svc.service}
                            </span>
                            <span className="text-neutral-400">
                              {svc.resources} resources
                            </span>
                          </div>
                          <span className="font-mono font-semibold text-foreground">
                            {svc.cost}
                          </span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                          <div
                            className="h-full rounded-full bg-primary/70"
                            style={{ width: `${svc.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Top AI Resources Panel */}
            <div className="overflow-hidden rounded-lg border border-border bg-white shadow-md">
              <div className="border-b border-border bg-[#f9fafc] px-5 py-3">
                <span className="text-[13px] font-semibold text-foreground">
                  Top AI Resources by Cost
                </span>
              </div>
              <div className="divide-y divide-border">
                {topResources.map((res) => (
                  <div
                    key={res.name}
                    className="flex items-center justify-between px-5 py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-medium text-foreground">
                        {res.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-neutral-400">
                        {res.type} · {res.account}
                      </p>
                    </div>
                    <span className="ml-4 shrink-0 font-mono text-[13px] font-semibold text-foreground">
                      {res.cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
