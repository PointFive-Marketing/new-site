import {
  Gauge,
  TrendingUp,
  Heart,
  Handshake,
  Shield,
  PartyPopper,
  type LucideIcon,
} from "lucide-react"

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: Gauge,
    title: "Prioritize Efficiency",
    description:
      "We champion efficiency in all we do, optimizing processes to swiftly deliver high-quality results and effectively adapt to industry demands.",
  },
  {
    icon: TrendingUp,
    title: "Raise The Bar",
    description:
      "We commit to continuous improvement, pushing our limits to exceed expectations and foster a culture of innovation and growth.",
  },
  {
    icon: Heart,
    title: "Stay Humble",
    description:
      "We remain grounded and open-minded, valuing diverse perspectives and fostering mutual respect and continuous learning.",
  },
  {
    icon: Shield,
    title: "Love Our Customers",
    description:
      "Our customers are at the heart of everything we do, and we strive to exceed their expectations through empathy and dedicated service.",
  },
  {
    icon: Handshake,
    title: "Trust Each Other",
    description:
      "We build and maintain trust within our team, fostering collaboration, transparency, and a supportive environment for innovation.",
  },
  {
    icon: PartyPopper,
    title: "Enjoy The Ride",
    description:
      "We embrace a positive work atmosphere, celebrating achievements, learning from setbacks, and finding joy in our journey together.",
  },
]

export function CareersValues() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Our Values
          </p>
          <h2
            className="mx-auto mt-3 max-w-[500px] font-bold leading-[1.15] tracking-tight text-foreground"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
          >
            What drives us every day
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-border bg-neutral-50/50 p-7 transition-colors hover:border-[#0000EE]/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#0000EE]/20 bg-[#0000EE]/5">
                <value.icon className="h-5 w-5 text-[#0000EE]" />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
