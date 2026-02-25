import {
  Layers,
  Zap,
  Users,
  BarChart3,
  Handshake,
  type LucideIcon,
} from "lucide-react"

interface Point {
  icon: LucideIcon
  title: string
  description: string
}

const points: Point[] = [
  {
    icon: Layers,
    title: "We Go Deeper",
    description:
      "Our technology dives deeper than any other, uncovering entrenched inefficiencies and savings opportunities within cloud environments.",
  },
  {
    icon: Zap,
    title: "Our Analysis Drives Action",
    description:
      "We streamline the journey from insight to implementation, providing actionable recommendations and customizable dashboards that enable smarter, swifter decision-making.",
  },
  {
    icon: Users,
    title: "Nurture Engineer Efficiency",
    description:
      "Seamless attribution and delegation technology integrates with existing team workflows to instill engineers with a sense of proactive ownership and eager accountability.",
  },
  {
    icon: BarChart3,
    title: "Small Details, Big Picture",
    description:
      "We provide a comprehensive context graph to ensure every detail is seen within the broader environment, highlighting interconnected impacts and aligning with strategic goals.",
  },
  {
    icon: Handshake,
    title: "Collaboration is Key",
    description:
      "We bridge FinOps teams and engineers, blending expertise to ensure informed decisions are aligned with collective goals to enhance cloud management efficacy.",
  },
]

export function AboutFivePoints() {
  return (
    <section className="bg-[#0A0A1A] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Our Principles
          </p>
          <h2
            className="mx-auto mt-3 max-w-[600px] font-bold leading-[1.15] tracking-tight text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
          >
            PointFive&apos;s Five Points
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <div
              key={point.title}
              className={`group rounded-lg border border-white/[0.06] bg-white/[0.02] p-7 transition-colors hover:border-[#00E639]/30 hover:bg-white/[0.04] ${
                i >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00E639]/20 bg-[#00E639]/10">
                <point.icon className="h-5 w-5 text-[#00E639]" />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#B4B4D0]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
