import { PlugZap, FileSearch, UtensilsCrossed } from "lucide-react"

const steps = [
  {
    icon: PlugZap,
    step: "Step 1",
    time: "Under 1 hour",
    title: "Connect Your Accounts",
    description:
      "Read-only, agentless connection across AWS, Azure, GCP, Kubernetes, Snowflake, and Databricks. No agents to install. No write permissions. Your dedicated PointFive engineer handles the entire setup on a call with you.",
  },
  {
    icon: FileSearch,
    step: "Step 2",
    time: "Within 48 hours",
    title: "Get Your Savings Report",
    description:
      "Our platform scans your entire infrastructure and delivers a prioritized savings report — quantified opportunities ranked by impact, with implementation context your engineers will actually trust. Not vague recommendations. Real numbers.",
    active: true,
  },
  {
    icon: UtensilsCrossed,
    step: "Step 3",
    time: "Your choice",
    title: "Save Money — or Eat Well",
    description:
      "If we find savings (we almost always do), your dedicated engineering partner helps you implement the highest-value fixes first. If we don't? Pick the restaurant. Dinner's on us, up to $1,000. No hard feelings.",
  },
]

export function GuaranteeHowItWorks() {
  return (
    <section id="how-it-works" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            How It Works
          </p>
          <h2
            className="mx-auto mt-3 max-w-3xl text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            From connected to savings
            <br />
            in 48 hours. That&apos;s it.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-neutral-500">
            No months-long rollout. No complex integrations. Just connect,
            analyze, and start saving — or start eating.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`relative rounded-lg p-8 ${
                step.active
                  ? "border-2 border-[#0000EE]/50 bg-[#0000EE]/5"
                  : "border border-border bg-card"
              }`}
            >
              {step.active && (
                <div className="absolute -top-3 left-6 rounded-full bg-[#0000EE] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  The Moment of Truth
                </div>
              )}
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${
                  step.active
                    ? "bg-[#0000EE] text-white"
                    : "border border-border bg-neutral-50 text-[#0000EE]"
                }`}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
                {step.step} · {step.time}
              </p>
              <h3 className="mt-2 text-[20px] font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
