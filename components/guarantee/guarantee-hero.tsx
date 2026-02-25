import { ArrowRight, Check, UtensilsCrossed } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

const DEMO_URL = "/request-demo"

const WHATS_INCLUDED = [
  {
    title: "Full platform access",
    text: "400+ optimization types across AWS, Azure, GCP, Kubernetes, Snowflake & Databricks",
  },
  {
    title: "Dedicated engineering partner",
    text: "your own PointFive engineer on Slack from day one",
  },
  {
    title: "Savings report in 48 hours",
    text: "quantified, prioritized findings before you commit to anything",
  },
  {
    title: "Zero risk",
    text: "no agents, no write access, read-only connection — live in under an hour",
  },
]

export function GuaranteeHero() {
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
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#00E639]/30 bg-[#00E639]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E639]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#00E639]">
                The 48-Hour Challenge
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
              Guaranteed savings
              <br />
              in 48 hours.
            </h1>
            <p
              className="mt-4 text-[#00E639]"
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                fontWeight: 600,
              }}
            >
              Or we buy your team dinner.
            </p>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-[#B4B4D0]">
              Connect your cloud accounts. Get a full savings report in 48
              hours. Our baseline identifies 15–30% waste reduction, and
              customers usually find significantly more. If we can&apos;t find
              meaningful savings, dinner&apos;s on us — up to $1,000.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0000EE] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
              >
                Take the Challenge
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-[15px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Offer card */}
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              The Guarantee
            </p>
            <h2
              className="font-bold text-white"
              style={{
                fontSize: "clamp(28px, 3vw, 38px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Savings found,
              <br />
              or dinner served.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/55">
              We&apos;ll connect to your cloud accounts (read-only) and deliver
              a prioritized savings report within 48 hours. If we don&apos;t
              find actionable savings, we&apos;ll send your team a dinner on us
              — up to $1,000.
            </p>
            <ul className="mt-8 space-y-4">
              {WHATS_INCLUDED.map((item) => (
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
            <div className="mt-8 flex items-start gap-3 rounded-lg border border-[#ff9500]/20 bg-[#ff9500]/10 p-4">
              <UtensilsCrossed className="mt-0.5 h-5 w-5 shrink-0 text-[#ff9500]" />
              <p className="text-[14px] leading-relaxed text-white/70">
                <strong className="text-[#ff9500]">
                  Dinner Guarantee:
                </strong>{" "}
                If our 48-hour savings report doesn&apos;t surface actionable
                optimizations, your team picks the restaurant. Up to $1,000 on
                us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
