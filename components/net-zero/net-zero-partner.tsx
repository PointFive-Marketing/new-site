import { MessageCircle, Target, ClipboardCheck, ShieldCheck } from "lucide-react"

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Direct Slack Access",
    text: "Your engineer is in your Slack workspace, responding in hours — not opening support tickets.",
  },
  {
    icon: Target,
    title: "Guided Remediation",
    text: "We don't just hand you a list. Your partner prioritizes findings, validates impact, and walks your team through implementation.",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly Value Reviews",
    text: "Recurring check-ins to track realized savings, surface new opportunities, and keep momentum going.",
  },
  {
    icon: ShieldCheck,
    title: "ROI Accountability",
    text: "Your engineer is accountable for delivering your guaranteed net positive outcome. Their success depends on yours.",
  },
]

export function NetZeroPartner() {
  return (
    <section id="partner" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              Dedicated Support
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
              Your own engineer.
              <br />
              Not a ticket queue.
            </h2>
            <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed text-neutral-500">
              Every Net Zero customer gets a dedicated PointFive engineer as
              their direct partner — on Slack, from day one.
            </p>

            <div className="mt-10 space-y-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-neutral-50">
                    <f.icon className="h-5 w-5 text-[#0000EE]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-foreground">
                      {f.title}
                    </h4>
                    <p className="mt-1 text-[15px] leading-relaxed text-neutral-500">
                      {f.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-neutral-50">
            <div className="flex h-[340px] items-center justify-center bg-gradient-to-br from-[#0A0A1A] via-[#0000EE] to-[#1a1aff]">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                  <span className="text-3xl font-bold text-white">P5</span>
                </div>
                <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                  Your Dedicated Partner
                </p>
              </div>
            </div>
            <div className="p-7">
              <strong className="block text-[18px] font-bold text-foreground">
                Your PointFive Engineering Partner
              </strong>
              <span className="mt-1 block text-[14px] text-neutral-500">
                Dedicated Infrastructure Efficiency Engineer
              </span>
              <p className="mt-4 border-t border-border pt-4 text-[14px] leading-relaxed text-neutral-500">
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
