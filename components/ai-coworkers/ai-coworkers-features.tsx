import { Brain, FileText, ShieldCheck, MessageCircle, Mail, Workflow } from "lucide-react"

const PILLARS = [
  {
    icon: MessageCircle,
    label: "Conversational Setup,",
    labelAccent: "No Code Required",
    description:
      "Describe what you need in plain language. The AI translates your intent into structured queries, validates against your real data, and builds the workflow — no dashboards to configure.",
  },
  {
    icon: Brain,
    label: "Intelligent Judgment,",
    labelAccent: "Not Static Rules",
    description:
      "Evaluates value, ownership, behavior patterns, and system state — applying LLM-based reasoning to determine priority, timing, and messaging.",
  },
  {
    icon: FileText,
    label: "Execution + Explanation",
    labelAccent: "in One Flow",
    description:
      "Actions, summaries, and reports are generated automatically. Every nudge, escalation, or recommendation comes with clear, human-readable context.",
  },
  {
    icon: ShieldCheck,
    label: "Supervised Autonomy",
    labelAccent: "You Can Trust",
    description:
      "All actions operate within user-defined guardrails. Human approval is required before any Co-worker goes live — AI assists, humans decide.",
  },
  {
    icon: Mail,
    label: "Delivers Where",
    labelAccent: "Your Team Works",
    description:
      "Results arrive via email or Slack — channels or DMs. No new tool to adopt. Co-workers meet your team in the tools they already use.",
  },
  {
    icon: Workflow,
    label: "Full Opportunity",
    labelAccent: "Lifecycle Coverage",
    description:
      "From discovery to assignment to status tracking to reporting — Co-workers cover the entire optimization lifecycle end to end.",
  },
]

export function AICoworkersFeatures() {
  return (
    <section id="features" className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            The Power of AI-Driven Cloud Efficiency
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
            Your Cloud Cost Data Works for You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-500">
            FinOps teams are drowning in data but starved for action. AI
            Co-workers deploy autonomous agents that run on your schedule,
            querying your cloud cost data, analyzing what matters, and
            delivering results to the people who need to act.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="rounded-sm border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <p.icon className="h-6 w-6 text-[#0000EE]" />
              <h3
                className="mt-4 font-bold text-foreground"
                style={{
                  fontSize: "clamp(18px, 2vw, 22px)",
                  letterSpacing: "-0.02em",
                }}
              >
                {p.label}
                <br />
                <span className="text-[#0000EE]">{p.labelAccent}</span>
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
