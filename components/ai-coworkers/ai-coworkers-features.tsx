import { Brain, FileText, ShieldCheck } from "lucide-react"

const PILLARS = [
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
      "All actions operate within user-defined guardrails. Outputs are transparent, auditable, and designed for human review.",
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
            Beyond Automation: Intelligence with Context
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-500">
            AI Co-workers combine execution with intelligence — applying
            context-aware reasoning to keep cloud efficiency moving
            continuously. They don&apos;t just automate tasks; they understand
            what matters, when to act, and how to communicate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
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
