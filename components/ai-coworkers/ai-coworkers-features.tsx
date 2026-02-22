import {
  Scaling,
  Clock,
  BadgeDollarSign,
  Network,
  RotateCcw,
  ShieldCheck,
} from "lucide-react"

const FEATURES = [
  {
    icon: Scaling,
    title: "Autonomous Right-Sizing",
    description:
      "Agents continuously analyze utilization and resize compute, storage, and database instances to match actual demand — no tickets, no waiting.",
  },
  {
    icon: Clock,
    title: "Scheduled Shutdowns",
    description:
      "Automatically stop idle dev, staging, and test resources outside business hours. Agents learn usage patterns and adapt schedules over time.",
  },
  {
    icon: BadgeDollarSign,
    title: "Commitment Optimization",
    description:
      "Agents manage Reserved Instance and Savings Plan purchases, swaps, and renewals to keep your commitment coverage at the optimal level.",
  },
  {
    icon: Network,
    title: "Architecture Fixes",
    description:
      "Reroute traffic away from expensive NAT gateways, consolidate underused load balancers, and fix cross-AZ data transfer waste automatically.",
  },
  {
    icon: RotateCcw,
    title: "Safe Rollbacks",
    description:
      "Every action taken by an agent is versioned and reversible. One click to roll back any change — full audit trail included.",
  },
  {
    icon: ShieldCheck,
    title: "Human-in-the-Loop",
    description:
      "Choose your comfort level: approve every action before it runs, set guardrails and let agents operate within bounds, or go fully autonomous.",
  },
]

export function AICoworkersFeatures() {
  return (
    <section id="features" className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            What They Do
          </p>
          <h2
            className="mx-auto mt-3 max-w-3xl text-balance text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            From Detection to Remediation, Autonomously
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="rounded-sm border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <f.icon className="h-6 w-6 text-[#0000EE]" />
              <h3
                className="mt-4 font-bold text-foreground"
                style={{
                  fontSize: "clamp(18px, 2vw, 22px)",
                  letterSpacing: "-0.02em",
                }}
              >
                {f.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
