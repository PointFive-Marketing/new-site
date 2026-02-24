import { ArrowRight, Clock, Zap, Users, BellOff, Gauge, BadgeDollarSign } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

const DEMO_URL = "/request-demo"

const BENEFITS = [
  {
    icon: Clock,
    title: "Reclaim Time",
    description:
      "Eliminate hours of manual coordination. AI Co-workers handle monitoring, follow-ups, and escalations automatically.",
  },
  {
    icon: Zap,
    title: "Zero Stagnation",
    description:
      "High-value opportunities never fall through the cracks. Intelligent follow-up ensures continuous momentum.",
  },
  {
    icon: Users,
    title: "Scale Effortlessly",
    description:
      "One FinOps team manages hundreds of engineering teams. Efficiency that scales with your organization.",
  },
  {
    icon: BellOff,
    title: "Reduce Alert Fatigue",
    description:
      "Context-aware notifications mean teams only hear about what matters right now — no more noise.",
  },
  {
    icon: Gauge,
    title: "Accelerate Resolution",
    description:
      "Consistent, intelligent pressure keeps remediation moving from detection to verified savings.",
  },
  {
    icon: BadgeDollarSign,
    title: "Boost Verified Savings",
    description:
      "More opportunities acted upon = more dollars saved and verified through closed-loop tracking.",
  },
]

const STATS = [
  { value: "57%", label: "Time to Resolution", detail: "Intelligent pressure accelerates fixes without noise" },
  { value: "24%", label: "Realized Savings", detail: "More opportunities acted upon = more verified dollars saved" },
  { value: "78%", label: "First Engineer Response", detail: "Intelligent pressure accelerates fixes without noise" },
]

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

        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-20 md:pb-20 md:pt-28">
          {/* Headline */}
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              AI Co-workers
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
              Efficiency That
              <br />
              Doesn&apos;t Sleep
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[#B4B4D0]">
              Intelligent teammates that turn cloud optimization into a
              self-sustaining practice — monitoring, prioritizing, and acting on
              your behalf, 24/7.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#0000EE] px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25 sm:px-8"
              >
                Schedule a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product demo video */}
          <div className="mt-14">
            <div className="overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-[#0000EE]/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/videos/ai-coworkers-poster.jpg"
                className="w-full"
              >
                <source src="/videos/ai-coworkers-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <b.icon className="h-5 w-5 text-[#00E639]" />
                <h3 className="mt-3 text-[16px] font-bold text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#B4B4D0]">
                  {b.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16">
            <p className="mb-2 text-center font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              Real Results. Day One Impact.
            </p>
            <h2
              className="text-center text-balance text-white"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              Efficiency That Scales, Savings That Stick
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {STATS.map((s, i) => (
                <div key={i} className="text-center">
                  <p
                    className="font-bold text-[#0000EE]"
                    style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white">
                    {s.label}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#B4B4D0]">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
