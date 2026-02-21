const FEATURES = [
  {
    title: "Dynamic Capacity Rightsizing",
    description:
      "Automatically identify over-provisioned PTUs vs PAYG usage and right-size reserved AI capacity.",
  },
  {
    title: "Idle Guaranteed Capacity",
    description:
      "Flag reserved AI capacity that isn't being utilized so you can reclaim or reallocate it.",
  },
  {
    title: "Model Optimization",
    description:
      "Detect outdated or inefficient model choices that drive up inference costs.",
  },
]

export function AIFeatures() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3
                className="font-bold text-foreground"
                style={{
                  fontSize: "clamp(18px, 2vw, 22px)",
                  letterSpacing: "-0.02em",
                }}
              >
                {f.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
