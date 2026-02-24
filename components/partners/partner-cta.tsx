import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PartnerCta() {
  return (
    <section className="bg-[#0A0A1A] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h2
          className="mx-auto max-w-[600px] font-bold leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
        >
          Ready to Build the Future of Cloud Efficiency?
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[16px] leading-relaxed text-[#B4B4D0]">
          Join a partner ecosystem that turns cloud waste into competitive
          advantage for your clients.
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
