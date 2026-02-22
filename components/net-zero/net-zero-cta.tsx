import { ArrowRight } from "lucide-react"

const DEMO_URL = "https://www.pointfive.co/request-demo"

export function NetZeroCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[#0000EE] px-6 py-20 text-center md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[720px]">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/50">
          Limited Spots Available
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
          Start your Net Zero
          <br />
          engagement today
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-white/70">
          Connect your cloud accounts in under an hour. Get a full savings
          report within 48 hours. Guaranteed net positive at end of term — we
          waive the difference if savings don&apos;t exceed what you&apos;ve
          spent.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-[15px] font-semibold text-[#0000EE] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
          >
            Claim Net Zero Offer
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
        <p className="mt-10 text-[14px] text-white/55">
          🛡️{" "}
          <strong className="text-white/85">Guaranteed net positive</strong> · We
          waive the difference at end of term · No agents · Live in hours
        </p>
      </div>
    </section>
  )
}
