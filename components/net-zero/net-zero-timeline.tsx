const steps = [
  {
    day: "Day 1",
    title: "Connect & Capture",
    description:
      "Read-only, agentless connection. Covers AWS, Azure, GCP, Kubernetes, Snowflake, and Databricks in a single flow.",
  },
  {
    day: "Day 2",
    title: "Value Report",
    description:
      "Full savings assessment delivered. Quantified opportunities ranked by impact, with context your engineers will actually trust.",
    active: true,
  },
  {
    day: "Week 1",
    title: "First Remediations",
    description:
      "1-click and IaC-ready fixes deployed. Your dedicated engineering partner guides the highest-value items first.",
  },
  {
    day: "Often Month 1",
    title: "Annual Fee Covered",
    description:
      "Most companies find enough savings in the first month to pay for their yearly subscription. Nubank did it in 10 days. Our guarantee backs you through the full term.",
  },
]

export function NetZeroTimeline() {
  return (
    <section className="bg-[#0A0A1A] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Time to Value
          </p>
          <h2
            className="mx-auto mt-3 max-w-3xl text-white"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Up and running in hours.
            <br />
            ROI in days.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-[#B4B4D0]">
            No agents to deploy. No write permissions required. Just connect
            your cloud accounts and watch the findings roll in.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.day}
              className={`relative rounded-lg p-7 text-center ${
                step.active
                  ? "border border-[#0000EE]/50 bg-[#0000EE]/10"
                  : "border border-white/10 bg-white/[0.03]"
              }`}
            >
              <div
                className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-[20px] font-bold ${
                  step.active
                    ? "bg-[#0000EE] text-white shadow-lg shadow-[#0000EE]/50"
                    : "border border-[#0000EE]/40 bg-[#0000EE]/10 text-[#7eb8ff]"
                }`}
              >
                {i + 1}
              </div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
                {step.day}
              </p>
              <h3 className="mt-2 text-[18px] font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#B4B4D0]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
