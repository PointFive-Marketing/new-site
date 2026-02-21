import { ArrowRight } from "lucide-react"

const DEMO_URL = "https://www.pointfive.co/request-demo"
const WEBINAR_URL = "https://hs.pointfive.co/how-nubank-scales-financial-services-with-dynamodb-without-waste"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,0,238,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 py-16 text-center sm:px-6 md:py-28">
        <h2
          className="mx-auto max-w-3xl text-balance text-white"
          style={{
            fontSize: "clamp(32px, 4.5vw, 52px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            fontWeight: 700,
          }}
        >
          See your waste—and your savings—in action.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-pretty text-lg leading-relaxed text-[#B4B4D0]">
          Book a demo. We&apos;ll show you every opportunity we find and how to fix it safely—performance and cost in one flow.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0000EE] px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25 sm:w-auto sm:px-8"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={WEBINAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5 sm:w-auto sm:px-8"
          >
            See it in action
          </a>
        </div>
      </div>
    </section>
  )
}
