const STEPS = [
  {
    step: "01",
    title: "Connect in Minutes",
    description:
      "Agentless, read-only integration with your cloud accounts. No agents to install, no write access required. PointFive starts building a complete picture of your AI infrastructure immediately.",
  },
  {
    step: "02",
    title: "Map Your AI Cost Surface",
    description:
      "PointFive automatically discovers every AI service, model deployment, and supporting resource. Costs are attributed to teams and services using your existing infrastructure topology.",
  },
  {
    step: "03",
    title: "Surface Optimization Opportunities",
    description:
      "DeepWaste detection analyzes token patterns, utilization metrics, and billing mechanics to identify PTU rightsizing, model migrations, idle capacity, and prompt optimization opportunities.",
  },
  {
    step: "04",
    title: "Remediate with Confidence",
    description:
      "Every recommendation comes with full engineering context — dependencies, blast radius, and projected savings. Remediate through your IDE, ticketing system, or PointFive's AI Co-Workers.",
  },
]

export function AiCostHowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,238,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
          How It Works
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
          From Zero Visibility to Optimized AI Spend in Days
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.step} className="relative">
              <p
                className="font-mono font-bold text-[#00E639]/30"
                style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
              >
                {s.step}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#B4B4D0]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
