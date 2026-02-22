import { SiteHeader } from "@/components/site-header"

const DEMO_URL = "https://www.pointfive.co/request-demo"

export function NetZeroHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute -top-[200px] -right-[200px] h-[700px] w-[700px] rounded-full opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,238,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[100px] left-[200px] h-[500px] w-[500px] rounded-full opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(0,230,57,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <SiteHeader dark />

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              <span className="text-xs font-medium uppercase tracking-wider text-[#7eb8ff]">
                Limited Availability · 2025
              </span>
            </div>
            <h1
              className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[58px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Your first month
              <br />
              costs you <em className="font-semibold italic text-[#7eb8ff]">nothing.</em>
            </h1>
            <p className="mt-6 max-w-[480px] text-lg leading-relaxed text-white/60">
              PointFive&apos;s Net Zero offer guarantees your first month is
              completely offset by the savings we find — or you don&apos;t pay.
              Real ROI, not promises.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
              >
                Start Net Zero →
              </a>
              <a
                href="#roi"
                className="inline-flex items-center rounded-lg border border-white/20 bg-transparent px-8 py-4 text-base font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                See the ROI
              </a>
            </div>
          </div>

          {/* Offer card */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-accent">
              The Net Zero Offer
            </div>
            <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
              Guaranteed
              <br />
              Savings
            </h2>
            <p className="mt-2 text-sm text-white/50">
              If we don&apos;t find savings that exceed your first month&apos;s
              fee, you pay nothing. We&apos;ve never had to honor that guarantee.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                {
                  title: "Full platform access",
                  text: "all 400+ optimization types across your entire stack",
                },
                {
                  title: "Dedicated engineering partner",
                  text: "your own PointFive engineer on Slack",
                },
                {
                  title: "Value report in 48 hours",
                  text: "quantified savings before you commit to anything",
                },
                {
                  title: "Agentless deployment",
                  text: "no agents, no write access, live in hours",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                    <svg
                      className="h-2.5 w-2.5 text-accent"
                      viewBox="0 0 12 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="1,5 4,8 11,1" />
                    </svg>
                  </span>
                  <span className="text-sm text-white/75">
                    <strong className="text-white">{item.title}</strong> — {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-start gap-3 rounded-lg border border-accent/20 bg-accent/10 p-4">
              <span className="text-2xl">🛡️</span>
              <p className="text-[13px] leading-relaxed text-white/70">
                <strong className="text-accent">Net Zero Guarantee:</strong>{" "}
                Savings identified in month one exceed your subscription cost —
                or the month is on us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
