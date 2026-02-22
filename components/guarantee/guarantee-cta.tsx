import { ArrowRight, UtensilsCrossed } from "lucide-react"

const DEMO_URL = "https://www.pointfive.co/request-demo"

export function GuaranteeCta() {
  return (
    <section className="relative overflow-hidden bg-[#0000EE] px-6 py-20 text-center md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[720px]">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/50">
          Ready to Take the Challenge?
        </p>
        <h2
          className="text-white"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          Find savings in 48 hours.
          <br />
          Or pick the restaurant.
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-white/70">
          Connect your cloud accounts in under an hour. Get a full savings
          report within 48 hours. If we come up empty, your team eats on us —
          up to $1,000.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-[15px] font-semibold text-[#0000EE] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
          >
            Take the 48-Hour Challenge
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/35 bg-transparent px-9 py-4 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Talk to Sales
          </a>
        </div>
        <p className="mt-10 flex items-center justify-center gap-2 text-[14px] text-white/55">
          <UtensilsCrossed className="h-4 w-4" />
          <span>
            <strong className="text-white/85">Dinner Guarantee</strong> · Up to
            $1,000 · No strings attached · $500K+ cloud spend required
          </span>
        </p>
      </div>
    </section>
  )
}
