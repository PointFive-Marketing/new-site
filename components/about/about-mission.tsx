import { Gauge, Cpu, Wrench } from "lucide-react"

export function AboutMission() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Two-column layout */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — What We Do */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              What We Do
            </p>
            <h2
              className="mt-3 font-bold leading-[1.15] tracking-tight text-foreground"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
            >
              Continuous cloud cost efficiency
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-neutral-600">
              PointFive enables continuous cloud cost efficiency through deeper
              detection and collaborative remediation tools that integrate
              seamlessly with teams&apos; natural workflows.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-neutral-600">
              Our unique DeepWaste™ detection &amp; monitoring technology dives
              deep to expose typically overlooked cloud inefficiencies.
              PointFive&apos;s powerful remediation suite adds rich context to
              system insights, enabling rapid, seamless action — transforming
              every engineer into a champion of cloud efficiency.
            </p>
          </div>

          {/* Right — Mission */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              Our Mission
            </p>
            <h2
              className="mt-3 font-bold leading-[1.15] tracking-tight text-foreground"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
            >
              A new culture of efficiency
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-neutral-600">
              PointFive cultivates organizational healthiness and sustainability
              by making cloud cost efficiency a core principle. We build
              best-in-class detection and remediation technologies that empower
              teams to derive maximum value from their cloud environments,
              building a new culture of efficiency that fosters innovation.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "66%", label: "Average cloud efficiency", icon: Gauge },
            { value: "$50M+", label: "Savings identified", icon: Cpu },
            { value: "400+", label: "Optimization types", icon: Wrench },
            { value: "48hrs", label: "Time to first savings", icon: Gauge },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-neutral-50/50 p-5"
            >
              <p
                className="font-bold tracking-tight text-[#0000EE]"
                style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-[13px] text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
