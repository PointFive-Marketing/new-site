const ITEMS = [
  {
    title: "Per-Token Precision",
    description:
      "Real-time cost tracking per token, per inference, and per user cost. Unlike cloud bills that summarize your spending, PointFive accounts at the individual token level.",
  },
  {
    title: "Strategic Simulation",
    description:
      'Run "What-If" scenarios for PTU vs. PPM economics and model migrations before you commit.',
  },
  {
    title: "Contextual Attribution",
    description:
      "Automatically map AI spend to specific deployments and engineering owners without manual tagging.",
  },
]

export function AIUnitEconomics() {
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
        <h2
          className="max-w-3xl text-balance text-white"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          From AI Cost Fog to
          <br />
          Clear Unit Economics.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[#B4B4D0]">
          Traditional tools only show the bill. PointFive provides the precision
          needed to scale AI features profitably by breaking down costs into
          clear, actionable units.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#B4B4D0]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
