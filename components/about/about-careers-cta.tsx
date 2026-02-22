import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutCareersCta() {
  return (
    <section className="bg-[#0A0A1A] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Join Us
          </p>
          <h2
            className="mt-3 font-bold leading-[1.15] tracking-tight text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
          >
            Crazy for the cloud?
            <br />
            Come work with us.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-[#B4B4D0]">
            We&apos;re building the future of cloud cost optimization. If
            you&apos;re passionate about solving hard problems at scale, we want
            to hear from you.
          </p>
          <Link
            href="/careers"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0000EE] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
          >
            See Open Positions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
