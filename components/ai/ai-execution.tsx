const ITEMS = [
  {
    title: "AI Co-Workers",
    description:
      "Autonomous agents that triage opportunities and manage routine optimizations without manual effort.",
  },
  {
    title: "AI-Prompt Remediation",
    description:
      "One-click remediation that generates precise, IaC-aligned fixes directly within agentic IDEs like Cursor or Windsurf.",
  },
  {
    title: "PointFive MCP",
    description:
      "Real-time cost intelligence for discovering and validating savings through natural language dialogue in your IDE.",
  },
  {
    title: "Closed-Loop Verification",
    description:
      "Every action is tracked from alert to verified savings, not just estimates.",
  },
]

export function AIExecution() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <h2
          className="text-foreground"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          Move from Insight to Verified Outcome
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-500">
          Engineering-native execution powered by AI co-workers and seamless
          integrations.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center font-mono text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
          Trusted by Global Enterprises
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-60">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-8 w-24 rounded bg-neutral-200"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  )
}
