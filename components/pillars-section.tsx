import {
  Telescope,
  Layers2,
  Bot,
  ShieldCheck,
  GitBranch,
  Cloud,
  BarChart3,
  Eye,
  Sparkles,
  Code2,
  RotateCcw,
  CheckCircle2,
  Zap,
  TrendingUp,
  Gauge,
  type LucideIcon,
} from "lucide-react"

const pillars: Array<{
  icon: LucideIcon
  badge: string
  title: string
  items: Array<{ icon: LucideIcon; label: string }>
}> = [
  {
    icon: Telescope,
    badge: "Capture",
    title: "Infra-Fabric",
    items: [
      { icon: ShieldCheck, label: "Agentless read-only install" },
      { icon: GitBranch, label: "Continuous dependency mapping" },
      { icon: Cloud, label: "Every Cloud, Infra, Services mapped" },
    ],
  },
  {
    icon: Layers2,
    badge: "Detect",
    title: "DeepWaste™",
    items: [
      { icon: BarChart3, label: "400+ Safe detection types" },
      { icon: Eye, label: "Finds what others miss" },
      { icon: Sparkles, label: "Risk assurance" },
    ],
  },
  {
    icon: Bot,
    badge: "Remediate",
    title: "Agentic",
    items: [
      { icon: Code2, label: "Engineering-grade execution" },
      { icon: RotateCcw, label: "Approval gates & rollback" },
      { icon: CheckCircle2, label: "Audited, reversible, safe for production" },
      { icon: Zap, label: "Performance & cost in one flow" },
    ],
  },
  {
    icon: TrendingUp,
    badge: "ROI",
    title: "Impact Assessment",
    items: [
      { icon: TrendingUp, label: "Quantified Savings Calculated" },
      { icon: Gauge, label: "Performance Improvements Assessed" },
      { icon: Eye, label: "Queryable Insights" },
    ],
  },
]

function IconRow({
  icon: Icon,
  label,
  dark,
}: {
  icon: LucideIcon
  label: string
  dark?: boolean
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={
          dark
            ? "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-white"
            : "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary-tint text-primary"
        }
      >
        <Icon className="h-3 w-3" />
      </span>
      <span
        className={
          dark
            ? "text-sm leading-snug text-[#B4B4D0]"
            : "text-sm leading-snug text-neutral-600"
        }
      >
        {label}
      </span>
    </div>
  )
}

export function PillarsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,0,238,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-14 md:py-16">
        {/* Section header — dark */}
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            The platform
          </p>
          <h2
            className="mx-auto mt-3 max-w-2xl text-balance text-white"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Deep detection. Broad coverage. Safe remediation.
          </h2>
        </div>

        {/* Pillar cards — dark */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative flex flex-col rounded-sm border border-white/[0.08] bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-white/[0.06] hover:shadow-lg hover:shadow-[#00E639]/10 md:p-6"
            >
              {/* Dark band with green font (compact) */}
              <div className="mb-3 flex items-center gap-2 rounded-md border border-[#00E639]/30 bg-white/5 px-2.5 py-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00E639]/20 font-mono text-[10px] font-bold text-[#00E639]">
                  {i + 1}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#00E639]">
                  {pillar.badge}
                </span>
              </div>

              {/* Main icon + title on one line */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white/10">
                  <pillar.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold leading-tight text-white">
                  {pillar.title}
                </h3>
              </div>

              {/* Icon + label rows (dark) */}
              <div className="mt-3 flex flex-col gap-2">
                {pillar.items.map((item, j) => (
                  <IconRow
                    key={j}
                    icon={item.icon}
                    label={item.label}
                    dark
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
