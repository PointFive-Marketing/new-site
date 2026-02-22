import { MessageSquare, Sparkles, CheckCircle2, Play, Settings } from "lucide-react"

const STEPS = [
  {
    number: 1,
    icon: Settings,
    title: "Go to Automations",
    description:
      "Navigate to Automations → Co-workers → Add Task. No dashboards to build, no code to write.",
  },
  {
    number: 2,
    icon: MessageSquare,
    title: "Describe in Plain Language",
    description:
      "Tell Pointer what you need in a conversational chat — like talking to a teammate who understands cloud cost data.",
  },
  {
    number: 3,
    icon: Sparkles,
    title: "AI Validates & Generates",
    description:
      "The AI builds a query plan, validates it against your real data, and generates a task suggestion you can review.",
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: "Review & Approve",
    description:
      "See exactly what the Co-worker will do before it runs. Every workflow is transparent and auditable.",
  },
  {
    number: 5,
    icon: Play,
    title: "Save → Live!",
    description:
      "Your Co-worker runs on schedule or on-demand — delivering results via email or Slack to the right people.",
  },
]

export function AICoworkersHowItWorks() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mb-14 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            How It Works
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
            From Plain Language to Automated Workflows
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-500">
            No code, no dashboards to build. Just describe what you need and
            your AI Co-worker handles the rest — validated against your real
            data before it ever runs.
          </p>
        </div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Connector line (hidden on mobile) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#0000EE]/20 via-[#0000EE]/40 to-[#00E639]/20 md:block" />

          <div className="flex flex-col gap-8 md:gap-0">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={i}
                  className="relative flex flex-col items-center md:flex-row"
                >
                  {/* Left side content (or empty) */}
                  <div
                    className={`hidden w-1/2 md:block ${isEven ? "pr-12 text-right" : ""}`}
                  >
                    {isEven && (
                      <div className="ml-auto max-w-sm">
                        <h3 className="text-[18px] font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center number badge */}
                  <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 border-[#0000EE] bg-background text-[18px] font-bold text-[#0000EE] shadow-md shadow-[#0000EE]/10">
                    {step.number}
                  </div>

                  {/* Right side content (or empty) */}
                  <div
                    className={`mt-3 text-center md:mt-0 md:w-1/2 md:text-left ${!isEven ? "md:pl-12" : ""}`}
                  >
                    {!isEven ? (
                      <div className="max-w-sm">
                        <h3 className="text-[18px] font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      /* Mobile fallback — show content below badge */
                      <div className="max-w-sm md:hidden">
                        <h3 className="text-[18px] font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
