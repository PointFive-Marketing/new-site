import { ArrowRight } from "lucide-react"

const DEMO_URL = "https://www.pointfive.co/request-demo"

export function AICoworkersCta() {
  return (
    <section className="bg-background">
      <div className="relative mx-auto max-w-[1200px] px-4 py-16 text-center sm:px-6 md:py-28">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
          Get Started
        </p>
        <h2
          className="mx-auto mt-3 max-w-3xl text-balance text-foreground"
          style={{
            fontSize: "clamp(32px, 4.5vw, 52px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            fontWeight: 700,
          }}
        >
          Ready to Transform Your Cloud Efficiency?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-500">
          See AI Co-workers in action and discover how intelligent automation
          delivers continuous, verified savings.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0000EE] px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25 sm:w-auto sm:px-8"
          >
            Schedule a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-[13px] leading-relaxed text-neutral-400">
          AI Co-workers are part of PointFive&apos;s CEPM platform — delivering
          DeepWaste detection, context intelligence, engineering workflows, and
          AI-powered operations.
        </p>
      </div>
    </section>
  )
}
