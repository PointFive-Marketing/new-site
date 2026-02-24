export function NetZeroRoi() {
  return (
    <section id="roi" className="bg-neutral-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              Return on Investment
            </p>
            <h2
              className="mt-3 text-foreground"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              Real numbers.
              <br />
              Real results.
            </h2>
            <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed text-neutral-500">
              Our customers don&apos;t wait months to see value. Most find
              enough savings in a month to cover their yearly fee — Nubank did
              it in 10 days.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[#0000EE] bg-[#0000EE] p-6 text-white">
                <div
                  className="font-bold leading-none"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
                >
                  500%+
                </div>
                <div className="mt-3 text-[15px] font-medium text-white/80">
                  Average customer ROI across deployments
                </div>
                <div className="mt-1 text-[13px] text-white/50">
                  Our real number is higher — you just wouldn&apos;t believe it
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div
                  className="font-bold leading-none text-[#0000EE]"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
                >
                  $50M
                </div>
                <div className="mt-3 text-[15px] font-medium text-neutral-600">
                  Total savings across 20 key accounts
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 sm:col-span-2">
                <div
                  className="font-bold leading-none text-[#0000EE]"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
                >
                  85%
                </div>
                <div className="mt-3 text-[15px] font-medium text-neutral-600">
                  Snowflake cost reduction on our own deployment
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8 shadow-sm md:p-10">
            <div className="relative">
              <span className="absolute -left-2 -top-2 text-6xl text-[#0000EE]/20">
                &ldquo;
              </span>
              <p
                className="pt-8 font-bold leading-snug text-foreground"
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  letterSpacing: "-0.01em",
                }}
              >
                It took us{" "}
                <em className="italic text-[#0000EE]">10 days</em> to get full
                ROI on our partnership with PointFive
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1a1a4e] to-[#3333cc] text-[16px] font-bold text-white">
                  M
                </div>
                <div>
                  <div className="text-[15px] font-bold text-foreground">
                    Mike Rosenberg
                  </div>
                  <div className="text-[14px] text-neutral-500">
                    Sr. Director of Engineering, Nubank
                  </div>
                </div>
                <div className="ml-auto rounded-md bg-foreground px-3 py-1.5 text-xs font-bold text-white">
                  Nubank
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
