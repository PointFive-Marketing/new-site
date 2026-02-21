import { Star } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left — Nubank quote */}
          <div>
            <div className="mb-6 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[#FFB800] text-[#FFB800]"
                />
              ))}
            </div>
            <blockquote
              className="text-balance text-foreground"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                fontWeight: 600,
              }}
            >
              {
                '"We saw ROI in 10 days. PointFive found waste we didn\'t know existed—and made it safe to act on. 2,000+ engineers, 50%+ engagement."'
              }
            </blockquote>
            <div className="mt-8">
              <p className="text-base font-semibold text-foreground">
                Head of Cloud Infrastructure
              </p>
              <p className="mt-1 text-sm text-neutral-500">Nubank</p>
            </div>
          </div>

          {/* Right — G2 Reviews */}
          <a
            href="https://www.g2.com/sellers/pointfive"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl border border-foreground/[0.06] bg-neutral-50 p-10 text-center transition-colors hover:border-primary/20 hover:shadow-md"
          >
            {/* G2 Logo */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF492C]">
              <span className="text-2xl font-bold text-white">G2</span>
            </div>

            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-500">
              Rated on G2
            </p>

            {/* Stars */}
            <div className="mt-4 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-[#FFB800] text-[#FFB800]"
                />
              ))}
            </div>

            <p
              className="mt-3 font-mono font-bold text-foreground"
              style={{ fontSize: "clamp(40px, 4vw, 56px)" }}
            >
              4.9
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              out of 5 stars
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              32 reviews
            </p>

            {/* Review highlights */}
            <div className="mt-8 flex flex-col gap-4">
              <ReviewHighlight
                label="Ease of Setup"
                rating={4.9}
              />
              <ReviewHighlight
                label="Quality of Support"
                rating={4.8}
              />
              <ReviewHighlight
                label="Results & ROI"
                rating={4.9}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

function ReviewHighlight({
  label,
  rating,
}: {
  label: string
  rating: number
}) {
  const percentage = (rating / 5) * 100

  return (
    <div className="flex items-center gap-4">
      <span className="w-36 text-left text-sm font-medium text-neutral-700">
        {label}
      </span>
      <div className="h-2 w-32 overflow-hidden rounded-full bg-neutral-300/30">
        <div
          className="h-full rounded-full bg-[#FFB800]"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="font-mono text-sm font-bold text-foreground">
        {rating}
      </span>
    </div>
  )
}
