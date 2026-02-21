const STATS = [
  { value: "+54%", label: "Realized Savings" },
  { value: "-67%", label: "Investigation Time" },
  { value: "+47%", label: "Time to Resolution" },
  { value: "Zero", label: "Intrusion" },
]

export function AIRoiStats() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
          Verified ROI & Trust
        </p>
        <p className="mt-2 text-center text-lg text-neutral-500">
          Real impact, proven results, trusted by global enterprises.
        </p>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-bold text-primary"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                {s.value}
              </p>
              <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
