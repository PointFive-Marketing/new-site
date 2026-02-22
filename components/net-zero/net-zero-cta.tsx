const DEMO_URL = "https://www.pointfive.co/request-demo"

export function NetZeroCta() {
  return (
    <section id="cta" className="bg-primary px-6 py-20 text-center md:py-28">
      <div className="mx-auto max-w-[640px]">
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">
          Limited Spots Available
        </div>
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
          Start your Net Zero
          <br />
          engagement today
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Connect your cloud accounts in under an hour. Get a full savings
          report within 48 hours. Guaranteed net positive at end of term — we
          waive the difference if savings don&apos;t exceed what you&apos;ve spent.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-white px-9 py-4 text-base font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
          >
            Claim Net Zero Offer →
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm border border-white/35 bg-transparent px-9 py-4 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Talk to Sales
          </a>
        </div>
        <p className="mt-8 text-[13px] text-white/55">
          🛡️ <strong className="text-white/85">Guaranteed net positive</strong> · We waive the difference at end of term · No agents · Live in hours
        </p>
      </div>
    </section>
  )
}
