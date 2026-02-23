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

        {/* Product screenshots row */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-white/10 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ai-cost/ai-key-insights.png"
              alt="PointFive Key Insights — AI-generated analysis of SageMaker and Bedrock cost patterns"
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ai-cost/ai-recommendations.png"
              alt="PointFive Recommendations — SageMaker Endpoint Review and Bedrock Model Selection optimization"
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ai-cost/ai-rightsizing.png"
              alt="PointFive Right-Sizing Review — instance optimization with auto-scaling recommendations"
              className="w-full"
            />
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
