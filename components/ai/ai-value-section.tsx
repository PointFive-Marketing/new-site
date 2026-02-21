export function AIValueSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Turns AI from a cost risk into a scalable efficiency advantage
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            PointFive understands AI pricing mechanics and infrastructure drift
            that generic cost tools ignore.
          </p>
        </div>
      </div>
    </section>
  )
}
