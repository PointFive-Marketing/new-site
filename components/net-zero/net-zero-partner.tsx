export function NetZeroPartner() {
  return (
    <section id="partner" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              Dedicated Support
            </div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Your own engineer.
              <br />
              Not a ticket queue.
            </h2>
            <p className="mt-4 max-w-[600px] text-lg text-neutral-600">
              Every Net Zero customer gets a dedicated PointFive engineer as
              their direct partner — on Slack, from day one.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: "💬",
                  title: "Direct Slack Access",
                  text: "Your engineer is in your Slack workspace, responding in hours — not opening support tickets.",
                },
                {
                  icon: "🎯",
                  title: "Guided Remediation",
                  text: "We don't just hand you a list. Your partner prioritizes findings, validates impact, and walks your team through implementation.",
                },
                {
                  icon: "📋",
                  title: "Weekly Value Reviews",
                  text: "Recurring check-ins to track realized savings, surface new opportunities, and keep momentum going.",
                },
                {
                  icon: "🔒",
                  title: "ROI Accountability",
                  text: "Your engineer is accountable for delivering the Net Zero guarantee. Their success depends on yours.",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-neutral-50 text-lg">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="mt-1 text-sm text-neutral-600">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-neutral-50">
            <div className="flex h-[320px] items-center justify-center bg-gradient-to-br from-[#0a0a3e] via-primary to-[#1a1aff]">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 text-4xl font-semibold text-white">
                P5
              </div>
            </div>
            <div className="p-6">
              <strong className="block text-lg font-semibold text-foreground">
                Your PointFive Engineering Partner
              </strong>
              <span className="mt-1 block text-sm text-neutral-500">
                Dedicated Infrastructure Efficiency Engineer
              </span>
              <p className="mt-4 border-t border-border pt-4 text-[13px] leading-relaxed text-neutral-600">
                A senior cloud infrastructure specialist assigned exclusively to
                your account. Deep expertise across AWS, Azure, GCP, Kubernetes,
                and data platforms — with a mandate to hit your savings targets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
