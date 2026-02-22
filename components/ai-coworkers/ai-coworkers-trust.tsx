import {
  UserCheck,
  Lightbulb,
  ClipboardList,
  SlidersHorizontal,
  HeartHandshake,
  Building2,
} from "lucide-react"

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "Human-in-the-Loop",
    description:
      "Define what Co-workers can do and when they escalate. They assist and accelerate — never replace.",
  },
  {
    icon: Lightbulb,
    title: "Explainable AI",
    description:
      "Full transparency into why Co-workers acted. Every decision comes with clear reasoning.",
  },
  {
    icon: ClipboardList,
    title: "Complete Audit Trail",
    description:
      "Track every action, decision, and outcome. Built-in logging ensures governance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Configurable Guardrails",
    description:
      "User-defined rules ensure controlled automation aligned with your policies.",
  },
  {
    icon: HeartHandshake,
    title: "Adaptive to Culture",
    description:
      "Customize communication styles, escalation paths, and timing to match your org.",
  },
  {
    icon: Building2,
    title: "Enterprise-Ready",
    description:
      "No agents required. Read-only integration. SOC2 compliant. ROI guaranteed.",
  },
]

export function AICoworkersTrust() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,0,238,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Built for Enterprise
          </p>
          <h2
            className="mx-auto mt-3 max-w-3xl text-balance text-white"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Supervised Autonomy You Can Trust
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_CARDS.map((c, i) => (
            <div
              key={i}
              className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <c.icon className="h-5 w-5 text-[#00E639]" />
              <h3 className="mt-3 text-[16px] font-bold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#B4B4D0]">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
