import { ArrowDown } from "lucide-react"

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A] py-20 md:py-28">
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
          We&apos;re Hiring
        </p>

        <h1
          className="mt-4 max-w-[700px] font-bold leading-[1.1] tracking-tight text-white"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Shape the future of cloud efficiency.
        </h1>

        <p className="mt-6 max-w-[540px] text-lg leading-relaxed text-[#B4B4D0]">
          Join our growing team of talented, passionate professionals who are
          ready to build the next generation of cloud cost optimization.
        </p>

        <a
          href="#positions"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
        >
          See Open Positions
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
