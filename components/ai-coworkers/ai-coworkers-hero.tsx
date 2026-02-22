import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

const DEMO_URL = "https://www.pointfive.co/request-demo"

export function AICoworkersHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,238,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/4 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,230,57,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <SiteHeader dark />

        <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-20 md:pb-24 md:pt-28">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              Agentic Remediation
            </span>

            <h1
              className="mt-6 max-w-4xl text-balance text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              AI Co-Workers That
              <br />
              Fix Cloud Waste
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[#B4B4D0]">
              Go beyond recommendations. PointFive&apos;s autonomous agents
              detect inefficiencies and implement fixes across your
              infrastructure — right-sizing, scheduling, re-architecting — so
              your engineering team can focus on building.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#0000EE] px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25 sm:px-8"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5 sm:px-8"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
