import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PartnerHero() {
  return (
    <section className="bg-[#0A0A1A] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
          Partner Program
        </p>
        <h1
          className="mx-auto mt-4 max-w-[800px] font-bold leading-[1.1] tracking-tight text-white"
          style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
        >
          Grow Your Cloud Practice With PointFive
        </h1>
        <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-relaxed text-[#B4B4D0]">
          Join a growing ecosystem of consulting, technology, and services
          partners delivering measurable cloud efficiency outcomes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/request-demo"
            className="inline-flex items-center gap-2 rounded-full bg-[#0000EE] px-6 py-3 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
          >
            Become a Partner
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
          >
            Talk to the Team
          </Link>
        </div>
      </div>
    </section>
  )
}
