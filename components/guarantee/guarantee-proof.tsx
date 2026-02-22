export function GuaranteeProof() {
  return (
    <section className="bg-[#0A0A1A] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              Why We&apos;re This Confident
            </p>
            <h2
              className="mt-3 text-white"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              We&apos;ve never missed.
              <br />
              <span className="text-[#7eb8ff]">But we&apos;re ready to.</span>
            </h2>
            <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed text-[#B4B4D0]">
              After hundreds of cloud assessments, we find actionable savings
              over 97% of the time. The dinner guarantee exists because we
              genuinely believe every cloud account over $500K has waste hiding
              in it — and we have the technology to find it.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[#0000EE] bg-[#0000EE] p-6 text-white">
                <div
                  className="font-bold leading-none"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
                >
                  1200%+
                </div>
                <div className="mt-3 text-[15px] font-medium text-white/80">
                  Average customer ROI
                </div>
                <div className="mt-1 text-[13px] text-white/50">
                  Savings identified vs. platform cost
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <div
                  className="font-bold leading-none text-[#7eb8ff]"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
                >
                  10 days
                </div>
                <div className="mt-3 text-[15px] font-medium text-white/80">
                  Fastest full ROI achieved
                </div>
                <div className="mt-1 text-[13px] text-white/50">
                  Nubank covered their annual fee
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:col-span-2">
                <div
                  className="font-bold leading-none text-[#00E639]"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
                >
                  $50M+
                </div>
                <div className="mt-3 text-[15px] font-medium text-white/80">
                  Total savings delivered across 20 key accounts
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-10">
            <div className="relative">
              <span className="absolute -left-2 -top-2 text-6xl text-[#0000EE]/40">
                &ldquo;
              </span>
              <p
                className="pt-8 font-bold leading-snug text-white"
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  letterSpacing: "-0.01em",
                }}
              >
                It took us{" "}
                <em className="italic text-[#7eb8ff]">10 days</em> to get full
                ROI on our partnership with PointFive
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1a1a4e] to-[#3333cc] text-[16px] font-bold text-white">
                  M
                </div>
                <div>
                  <div className="text-[15px] font-bold text-white">
                    Mike Rosenberg
                  </div>
                  <div className="text-[14px] text-[#B4B4D0]">
                    Sr. Director of Engineering, Nubank
                  </div>
                </div>
                <div className="ml-auto rounded-md bg-white px-3 py-1.5 text-xs font-bold text-[#0A0A1A]">
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
