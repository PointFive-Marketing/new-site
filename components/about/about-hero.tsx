import { ArrowRight } from "lucide-react"

const DEMO_URL = "https://www.pointfive.co/request-demo"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A] py-20 md:py-28">
      {/* Subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
          About PointFive
        </p>

        <h1
          className="mt-4 max-w-[700px] font-bold leading-[1.1] tracking-tight text-white"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Stay ahead of the cloud.
        </h1>

        <p className="mt-6 max-w-[600px] text-lg leading-relaxed text-[#B4B4D0]">
          The typical cloud operates at just 66% efficiency.
          We&apos;re here to change that.
        </p>

        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0000EE] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
        >
          Book a Demo
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
