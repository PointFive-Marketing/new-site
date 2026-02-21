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
    ],
  },
]

function IconRow({
  icon: Icon,
  label,
}: {
  icon: LucideIcon
  label: string
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-tint text-primary">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="text-sm leading-snug text-neutral-600">{label}</span>
    </div>
  )
}

export function PillarsSection() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
        {/* Section header */}
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
            The platform
          </p>
          <h2
            className="mx-auto mt-4 max-w-2xl text-balance text-foreground"
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

        {/* Pillar cards — 4 columns */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative flex flex-col rounded-2xl border border-foreground/[0.06] bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Green band: step number + headline */}
              <div className="mb-6 flex items-center gap-2 rounded-lg bg-[#00E639] px-3 py-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 font-mono text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-white">
                  {pillar.badge}
                </span>
              </div>

              {/* Main icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint">
                <pillar.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-bold text-foreground">
                {pillar.title}
              </h3>

              {/* Icon + label rows */}
              <div className="mt-4 flex flex-col gap-3">
                {pillar.items.map((item, j) => (
                  <IconRow
                    key={j}
                    icon={item.icon}
                    label={item.label}
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
