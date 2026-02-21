import { ArrowRight } from "lucide-react"

function PointFiveLogo({ className }: { className?: string }) {
  return (
    <img
      src="https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/6661db9d841412af863235a4_Logo.svg"
      alt="PointFive"
      className={className}
      width={140}
      height={32}
    />
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,238,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-y-1/4 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,230,57,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        {/* Nav */}
        <header className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
          <PointFiveLogo className="h-7 w-auto brightness-0 invert" />
          <nav className="hidden items-center gap-8 md:flex">
            {["Product", "Solutions", "Pricing", "Docs"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[15px] font-medium text-[#B4B4D0] transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden text-[15px] font-medium text-[#B4B4D0] transition-colors hover:text-white sm:block"
            >
              Log in
            </a>
            <a
              href="#"
              className="rounded-full bg-[#0000EE] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
            >
              Book a Demo
            </a>
          </div>
        </header>

        {/* Hero content */}
        <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="flex flex-col items-center text-center">
            {/* Pill badge */}
            <div className="mb-8 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E639]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
                400+ detection types · 7 clouds · CEPM
              </span>
            </div>

            {/* Headline */}
            <h1
              className="max-w-4xl text-balance text-white"
              style={{
                fontSize: "clamp(40px, 5.5vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              Nobody finds waste like PointFive.{" "}
              <span className="text-[#B4B4D0]">Identify it safely. Save millions.</span>
            </h1>

            {/* Sub */}
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[#B4B4D0]">
              DeepWaste™ detects hidden inefficiencies others miss—across AWS, Azure, GCP,
              Kubernetes, and data platforms. Engineering-grade detection, safe to act on:
              performance improvements and cost savings without the guesswork.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#"
                className="flex items-center gap-2 rounded-full bg-[#0000EE] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
              >
                See it in action
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
