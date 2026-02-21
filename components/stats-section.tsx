const stats = [
  { value: "400+", label: "Optimization types" },
  { value: "$50M+", label: "Customer savings" },
  { value: "10 days", label: "To first ROI" },
  { value: "1200%+", label: "Average ROI" },
]

export function StatsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 py-20 md:grid-cols-4 md:gap-12 md:py-24">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className="font-bold text-primary"
              style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
            >
              {stat.value}
            </p>
            <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
