import { Play, ArrowRight } from "lucide-react"

const HIGHLIGHTS_URL =
  "https://hs.pointfive.co/how-nubank-scales-financial-services-with-dynamodb-without-waste"
const FULL_SESSION_URL = "https://qpn3v.share.hsforms.com/2J_nWBjERQFysWnxGGB175A"

export function VideoCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,0,238,0.15) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: video thumbnail / visual — subtle chart-style background */}
          <a
            href={HIGHLIGHTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-sm border border-white/10 bg-[#0d0d1a] aspect-video"
          >
            {/* Soft purple/blue gradient (presentation-style) */}
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(60,40,100,0.25) 0%, rgba(30,20,80,0.15) 40%, rgba(10,10,26,0.95) 100%)",
              }}
            />
            {/* Very subtle vertical lines (chart/grid suggestion) */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, rgba(140,120,220,0.5) 0px, rgba(140,120,220,0.5) 1px, transparent 1px, transparent 32px)",
              }}
            />
            {/* Soft blue accent */}
            <div
              className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 30% 30%, rgba(0,0,238,0.12) 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/20 transition-all group-hover:scale-110 group-hover:bg-[#00E639] group-hover:ring-[#00E639]/30">
                <Play className="h-10 w-10 text-white fill-white ml-1" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00E639]">
                On demand · 5 min highlights
              </span>
            </div>
          </a>

          {/* Right: copy + CTA */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              Featured session
            </p>
            <h2
              className="mt-3 text-white"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              How Nubank Scales Financial Services with DynamoDB — Without Waste
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#B4B4D0]">
              Watch highlights from a live session with <strong className="text-white">AWS</strong>,{" "}
              <strong className="text-white">Nubank</strong>, and{" "}
              <strong className="text-white">PointFive</strong> on how modern financial services
              teams use Amazon DynamoDB to scale securely—while staying ruthlessly cost-efficient.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={HIGHLIGHTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#00E639] px-6 py-3.5 text-[15px] font-semibold text-[#0A0A1A] transition-all hover:bg-[#00C030] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00E639]/20"
              >
                Watch the 5-min highlights
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={FULL_SESSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                Watch full session
              </a>
            </div>
            <ul className="mt-8 flex flex-col gap-2 text-sm text-[#B4B4D0]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E639]" />
                Scale without practical limits
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E639]" />
                Cost efficiency as a strategic advantage
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E639]" />
                Nubank + PointFive: continuous optimization at scale
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
