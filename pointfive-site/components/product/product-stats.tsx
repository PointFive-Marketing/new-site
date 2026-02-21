const stats = [
  { value: "360°", label: "Coverage across cloud & AI services" },
  { value: "400+", label: "Optimization types traditional tools miss" },
  { value: "< 5 min", label: "For fully agentless setup" },
  { value: "10 days", label: "Verified ROI" },
]

export function ProductStats() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 py-20 md:grid-cols-4 md:gap-12 md:py-28">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className="font-bold text-primary"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              {stat.value}
            </p>
            <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
