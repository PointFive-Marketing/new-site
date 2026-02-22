export function NetZeroRoi() {
  return (
    <section id="roi" className="bg-neutral-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              Return on Investment
            </div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Real numbers.
              <br />
              Real results.
            </h2>
            <p className="mt-4 max-w-[600px] text-lg text-neutral-600">
              Our customers don&apos;t wait months to see value. Most find
              enough savings in a month to cover their yearly fee — Nubank
              did it in 10 days.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-sm border border-primary bg-primary p-6 text-white">
                <div className="text-4xl font-semibold leading-none md:text-5xl">
                  1200%+
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Average customer ROI across deployments
                </div>
                <div className="mt-1 text-xs text-white/50">
                  Based on savings identified vs. platform cost
                </div>
              </div>
              <div className="rounded-sm border border-border bg-card p-6">
                <div className="text-4xl font-semibold leading-none text-primary md:text-5xl">
                  $50M
                </div>
                <div className="mt-2 text-sm text-neutral-600">
                  Total savings across 20 key accounts
                </div>
              </div>
              <div className="rounded-sm border border-border bg-card p-6 sm:col-span-2">
                <div className="text-4xl font-semibold leading-none text-primary md:text-5xl">
                  85%
                </div>
                <div className="mt-2 text-sm text-neutral-600">
                  Snowflake cost reduction on our own deployment
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-border bg-card p-8 shadow-sm md:p-10">
            <div className="relative">
              <span className="absolute -left-2 -top-2 text-6xl text-primary/20">
                &ldquo;
              </span>
              <p className="pt-8 text-2xl font-semibold leading-snug text-foreground md:text-[26px]">
                It took us <em className="italic text-primary">10 days</em> to
                get full ROI on our partnership with PointFive
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1a1a4e] to-[#3333cc] font-semibold text-white">
                  M
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Mike Rosenberg
                  </div>
                  <div className="text-sm text-neutral-500">
                    Sr. Director of Engineering, Nubank
                  </div>
                </div>
                <div className="ml-auto rounded-sm bg-foreground px-3 py-1.5 text-xs font-semibold text-white">
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
