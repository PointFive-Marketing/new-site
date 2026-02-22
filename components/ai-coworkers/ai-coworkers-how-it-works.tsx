import Image from "next/image"

const STEPS = [
  {
    number: 1,
    title: "Go to Automations",
    description:
      "Navigate to Automations → Co-workers → Add Task. No dashboards to build, no code to write.",
  },
  {
    number: 2,
    title: "Describe in Plain Language",
    description:
      "Tell Pointer what you need in a conversational chat — like talking to a teammate who understands cloud cost data.",
  },
  {
    number: 3,
    title: "AI Validates & Generates",
    description:
      "The AI builds a query plan, validates it against your real data, and generates a task suggestion you can review.",
  },
  {
    number: 4,
    title: "Review & Approve",
    description:
      "See exactly what the Co-worker will do before it runs. Every workflow is transparent and auditable.",
  },
  {
    number: 5,
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

        {/* Two-column: steps + screenshot */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Steps */}
          <div className="space-y-6">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-[#0000EE] text-[15px] font-bold text-[#0000EE]">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-neutral-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Product screenshot */}
          <div className="overflow-hidden rounded-lg border border-border shadow-xl">
            <Image
              src="/ai-coworkers/coworker-chat.jpg"
              alt="PointFive AI Co-workers conversational interface — describing a weekly opportunity report in plain language"
              width={1400}
              height={880}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
