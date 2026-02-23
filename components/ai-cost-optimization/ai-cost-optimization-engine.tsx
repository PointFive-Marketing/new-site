import { AlertTriangle, ArrowRight, Lightbulb, Settings } from "lucide-react"

const OPTIMIZATIONS = [
  {
    title: "PTU vs. PAYG Rightsizing",
    description:
      "Detect over-provisioned Provisioned Throughput Units running at low utilization. Automatically recommend switching to pay-as-you-go for dev environments and rightsizing reserved capacity for production.",
    saving: "Up to 99% savings on underutilized PTUs",
  },
  {
    title: "Model Migration Intelligence",
    description:
      "Identify deployments running older or inefficient models. Newer models often deliver better performance with dramatically lower token costs through improved caching and compression.",
    saving: "Up to 86% savings through model upgrades",
  },
  {
    title: "Idle Capacity Detection",
    description:
      "Flag reserved AI capacity that sits idle — provisioned endpoints with no traffic, GPU instances waiting for jobs that never come. Reclaim or reallocate before the next billing cycle.",
    saving: "Eliminate spend on unused AI resources",
  },
  {
    title: "Token Economics Analysis",
    description:
      "Break down cost-per-request across input tokens, output tokens, and cached tokens. Identify prompt optimization opportunities and cache efficiency gains.",
    saving: "Reduce cost-per-inference by 40-60%",
  },
]

/* ── Simulated data for the 3 visual panels ──────────────────────────── */

const insights = [
  {
    icon: "●",
    color: "text-[#ff9900]",
    provider: "SageMaker (59% of AI spend)",
    bullets: [
      "Voyage multilingual embedding endpoint accounts for most of your AI spend at $2,534/month",
      "This is a deployed inference endpoint running continuously",
    ],
  },
  {
    icon: "●",
    color: "text-primary",
    provider: "Bedrock (41% of AI spend)",
    bullets: [
      "Primarily using Anthropic Claude models (Opus, Sonnet, Haiku)",
      "Claude Opus models are the highest cost Bedrock resources (~$1,200/month combined)",
    ],
  },
]

const recommendations = [
  {
    title: "SageMaker Endpoint Review",
    subtitle: "voyage-multilingual-2-embedding-model-endpoint",
    cost: "$2,534.40",
    costSub: "~$30,413/year",
    details: [
      { label: "Instance Type", value: "ml.g5.xlarge" },
      { label: "Region", value: "us-east-1" },
      { label: "Auto-Scaling", value: "Not configured", alert: true },
    ],
  },
]

const optimizationOpps = [
  {
    title: "Enable Auto-Scaling",
    severity: "Moderate Savings",
    rows: [
      {
        pattern: "Business hours only",
        recommendation: "Scale to 0 off hours",
        savings: "Up to 66% (~$1,700/mo)",
      },
      {
        pattern: "Variable load",
        recommendation: "Target tracking scaling",
        savings: "20-50% depending on pattern",
      },
    ],
  },
  {
    title: "Consider Serverless Inference",
    severity: "High Savings",
    rows: [
      {
        pattern: "< 100 requests/day",
        recommendation: "Pay only for compute time used",
        savings: "",
      },
      {
        pattern: "Bursty with long idle",
        recommendation: "No cost during idle time",
        savings: "",
      },
    ],
  },
]

export function AiCostOptimizationEngine() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,0,238,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
          AI Cost Optimization
        </p>
        <h2
          className="mt-3 max-w-3xl text-balance text-white"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          Beyond Visibility: Continuous AI Cost Optimization
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[#B4B4D0]">
          PointFive doesn&apos;t just show you the bill. Our DeepWaste detection
          engine analyzes your AI workloads to surface optimization opportunities
          that generic cost tools miss entirely.
        </p>

        {/* Three custom visual panels */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Panel 1: AI Key Insights */}
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white shadow-lg">
            <div className="flex items-center gap-2 border-b border-[#e2e6ed] bg-[#f9fafc] px-4 py-3">
              <Lightbulb className="h-3.5 w-3.5 text-primary" />
              <span className="text-[12px] font-semibold text-[#1a1d2e]">
                AI Key Insights
              </span>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {insights.map((ins) => (
                  <div key={ins.provider}>
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold text-[#1a1d2e]">
                      <span className={ins.color}>●</span> {ins.provider}
                    </p>
                    <ul className="mt-1.5 space-y-1">
                      {ins.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-[10.5px] leading-snug text-[#6a7385]"
                        >
                          <span className="mt-1 shrink-0 text-[8px] text-neutral-300">
                            •
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded border border-[#00E639]/20 bg-[#00E639]/5 px-3 py-2">
                <p className="flex items-center gap-1 text-[10px] font-semibold text-[#00a82d]">
                  ✓ No idle or underutilized AI resources detected
                </p>
              </div>
            </div>
          </div>

          {/* Panel 2: Endpoint Deep Dive */}
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white shadow-lg">
            <div className="flex items-center gap-2 border-b border-[#e2e6ed] bg-[#f9fafc] px-4 py-3">
              <Settings className="h-3.5 w-3.5 text-primary" />
              <span className="text-[12px] font-semibold text-[#1a1d2e]">
                Endpoint Deep Dive
              </span>
            </div>
            <div className="p-4">
              <p className="text-[11px] font-semibold text-[#1a1d2e]">
                {recommendations[0].title}
              </p>
              <p className="mt-0.5 truncate font-mono text-[9px] text-primary">
                {recommendations[0].subtitle}
              </p>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-mono text-lg font-bold text-[#1a1d2e]">
                  {recommendations[0].cost}
                </span>
                <span className="font-mono text-[10px] text-neutral-400">
                  {recommendations[0].costSub}
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {recommendations[0].details.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center justify-between border-b border-[#f2f4f8] pb-2 last:border-0"
                  >
                    <span className="text-[10px] text-neutral-400">
                      {d.label}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        d.alert ? "text-[#dc3c3c]" : "text-[#1a1d2e]"
                      }`}
                    >
                      {d.alert && (
                        <span className="mr-1 text-[10px]">✕</span>
                      )}
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 3: Optimization Opportunities */}
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white shadow-lg">
            <div className="flex items-center gap-2 border-b border-[#e2e6ed] bg-[#f9fafc] px-4 py-3">
              <AlertTriangle className="h-3.5 w-3.5 text-[#f59e0b]" />
              <span className="text-[12px] font-semibold text-[#1a1d2e]">
                Optimization Opportunities
              </span>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {optimizationOpps.map((opp, idx) => (
                  <div key={opp.title}>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-neutral-400">
                        {idx + 1}.
                      </span>
                      <span className="text-[11px] font-semibold text-[#1a1d2e]">
                        {opp.title}
                      </span>
                      <span
                        className={`ml-auto rounded-full px-1.5 py-0.5 text-[9px] font-medium ${
                          opp.severity === "High Savings"
                            ? "bg-[#00E639]/10 text-[#00a82d]"
                            : "bg-[#f59e0b]/10 text-[#d97706]"
                        }`}
                      >
                        {opp.severity}
                      </span>
                    </div>
                    <div className="mt-2 space-y-1.5">
                      {opp.rows.map((row, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-[10px] text-[#6a7385]"
                        >
                          <ArrowRight className="mt-0.5 h-2.5 w-2.5 shrink-0 text-primary" />
                          <span>
                            <strong className="text-[#1a1d2e]">
                              {row.pattern}
                            </strong>{" "}
                            — {row.recommendation}
                            {row.savings && (
                              <span className="ml-1 font-mono font-medium text-[#00a82d]">
                                {row.savings}
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {OPTIMIZATIONS.map((opt) => (
            <div
              key={opt.title}
              className="rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="text-lg font-bold text-white">{opt.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#B4B4D0]">
                {opt.description}
              </p>
              <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#00E639]">
                {opt.saving}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
