const STATS = [
  { value: "30%+", label: "AI Budget Growth YoY" },
  { value: "84%", label: "Orgs Struggle With Cloud Costs" },
  { value: "99%", label: "Savings on Underutilized PTUs" },
  { value: "86%", label: "Savings via Model Migration" },
]

export function AiCostStats() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,0,238,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
          The AI Spending Reality
        </p>
        <p className="mt-2 text-center text-lg text-[#B4B4D0]">
          Numbers that define the AI cost optimization opportunity.
        </p>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-bold text-[#00E639]"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                {s.value}
              </p>
              <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#B4B4D0]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
