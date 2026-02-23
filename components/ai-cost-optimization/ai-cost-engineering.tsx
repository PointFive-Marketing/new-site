import { Terminal, GitBranch, Users, BarChart3 } from "lucide-react"

const FEATURES = [
  {
    icon: Users,
    title: "Team-Level Cost Allocation",
    description:
      "Automatically attribute AI spend to engineering teams, services, and cost centers. No manual tagging required — PointFive maps cloud resources to ownership using your existing infrastructure topology.",
  },
  {
    icon: BarChart3,
    title: "Engineering Dashboards",
    description:
      "Give every team lead a real-time view of their AI cost footprint. Track spend trends, set budgets, and compare cost-per-feature across services — all without waiting for a monthly finance report.",
  },
  {
    icon: Terminal,
    title: "IDE-Native Remediation",
    description:
      "PointFive MCP brings cost intelligence directly into agentic IDEs like Cursor and Windsurf. Engineers discover savings, validate impact, and generate IaC-aligned fixes without leaving their workflow.",
  },
  {
    icon: GitBranch,
    title: "Workflow Integration",
    description:
      "Push optimization tasks to Jira, ServiceNow, or Slack. Every recommendation comes with full context — resource dependencies, blast radius, and projected savings — so engineers can act confidently.",
  },
]

export function AiCostEngineering() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Built for Engineering Teams
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
            AI Cost Optimization That Lives in the Engineering Workflow
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">
            Cost mandates from finance don&apos;t work. PointFive embeds AI cost
            optimization into the tools and workflows engineers already use — so
            efficiency becomes a natural part of shipping, not an afterthought.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
