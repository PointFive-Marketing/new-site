import { ArrowRight, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

const DEMO_URL = "/request-demo"

const OFFER_ITEMS = [
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
]

export function NetZeroHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute -right-[200px] -top-[200px] h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,238,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[100px] left-[200px] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,230,57,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <SiteHeader dark />

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:gap-16 md:pb-28 md:pt-24 lg:gap-20">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0000EE]/30 bg-[#0000EE]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E639]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#7eb8ff]">
                Net Zero Guarantee
              </span>
            </div>
            <h1
              className="text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              Guaranteed{" "}
              <em className="font-bold italic text-[#7eb8ff]">net positive.</em>
              <br />
              Every term.
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-[#B4B4D0]">
              If we don&apos;t find more cost optimizations than you&apos;ve
              spent on our software, we waive the difference. Most companies
              find savings in a month that pay for their yearly fee — Nubank did
              it in 10 days.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-[#0000EE] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
              >
                Start Net Zero
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#roi"
                className="inline-flex items-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-[15px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                See the ROI
              </a>
            </div>
          </div>

          {/* Offer card */}
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              The Net Zero Offer
            </p>
            <h2
              className="font-bold text-white"
              style={{
                fontSize: "clamp(28px, 3vw, 38px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Guaranteed
              <br />
              Savings
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/55">
              At end of year or subscription term: if the cost optimizations we
              find don&apos;t exceed what you&apos;ve spent on PointFive, we
              waive the difference. You&apos;re guaranteed net positive. We&apos;ve never
              had to honor it.
            </p>
            <ul className="mt-8 space-y-4">
              {OFFER_ITEMS.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#00E639]/40 bg-[#00E639]/10">
                    <Check className="h-3 w-3 text-[#00E639]" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/75">
                    <strong className="text-white">{item.title}</strong> —{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-start gap-3 rounded-lg border border-[#00E639]/20 bg-[#00E639]/10 p-4">
              <span className="text-2xl">🛡️</span>
              <p className="text-[14px] leading-relaxed text-white/70">
                <strong className="text-[#00E639]">
                  Net Zero Guarantee:
                </strong>{" "}
                At end of term, if identified savings don&apos;t exceed what you
                paid, we waive the difference. Most customers cover their annual
                fee in a month — Nubank did it in 10 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
