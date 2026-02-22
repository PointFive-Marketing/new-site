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
    title: "Annual fee covered",
    description:
      "Most companies find enough savings in the first month to pay for their yearly subscription. Nubank did it in 10 days. Our guarantee backs you through the full term.",
  },
]

export function NetZeroTimeline() {
  return (
    <section className="bg-[#0A0A1A] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">
          Time to Value
        </div>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
          Up and running in hours.
          <br />
          ROI in days.
        </h2>
        <p className="mt-4 max-w-[600px] text-lg text-white/55">
          No agents to deploy. No write permissions required. Just connect your
          cloud accounts and watch the findings roll in.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.day} className="relative text-center">
              <div
                className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold ${
                  step.active
                    ? "border-primary bg-primary text-white shadow-lg shadow-primary/50"
                    : "border border-primary/40 bg-primary/10 text-[#7eb8ff]"
                }`}
              >
                {i + 1}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                {step.day}
              </div>
              <h3 className="mt-2 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/45">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
