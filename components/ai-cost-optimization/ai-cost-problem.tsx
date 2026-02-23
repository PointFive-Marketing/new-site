import { AlertTriangle, Eye, TrendingUp, ShieldOff } from "lucide-react"

const PROBLEMS = [
  {
    icon: Eye,
    title: "Invisible AI Spend",
    description:
      "Cloud providers bury AI costs inside aggregated line items. You see a total bill, but not which models, deployments, or teams are driving it.",
  },
  {
    icon: TrendingUp,
    title: "Costs Accelerating Unchecked",
    description:
      "AI budgets grow 30%+ year over year. Every new feature, every model upgrade, every inference endpoint compounds spend without natural guardrails.",
  },
  {
    icon: ShieldOff,
    title: "No Traditional Guardrails",
    description:
      "Reserved instances and savings plans don't map to token-based billing. The FinOps playbook that works for compute and storage breaks down for AI.",
  },
  {
    icon: AlertTriangle,
    title: "Deploy Now, Govern Later",
    description:
      "Engineering teams move fast. Models ship to production before anyone understands the cost implications. By the time the bill arrives, the architecture is locked in.",
  },
]

export function AiCostProblem() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
            The Challenge
          </p>
          <h2
            className="mt-3 text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Most Teams Can&apos;t See Their AI Costs. That&apos;s by Design.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">
            Cloud providers optimize for adoption, not transparency. The result:
            AI spend is the fastest-growing line item on your cloud bill, and
            the least understood.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-red-50">
                <p.icon className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
