function ContinuousEfficiencyIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8v24M12 16l8-8 8 8M8 28h24" stroke="#00E639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="16" stroke="#00E639" strokeWidth="1.5" strokeOpacity="0.3" />
    </svg>
  )
}

function ModernWorkloadsIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="24" height="16" rx="2" stroke="#00E639" strokeWidth="1.5" />
      <path d="M14 20h4M22 20h4M14 24h12" stroke="#00E639" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="8" r="2" stroke="#00E639" strokeWidth="1.5" />
      <path d="M20 10v2" stroke="#00E639" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function OperationalDesignIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8l10 6v12l-10 6-10-6V14l10-6z" stroke="#00E639" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 20l10-6M20 20v12M20 20L10 14" stroke="#00E639" strokeWidth="1.5" strokeLinejoin="round" strokeOpacity="0.5" />
    </svg>
  )
}

const CARDS = [
  {
    icon: ContinuousEfficiencyIcon,
    title: "Continuous Efficiency",
    description:
      "Deliver always-on optimization that evolves with your clients\u2019 environments. PointFive\u2019s DeepWaste Detection Engine uncovers savings other tools miss, giving partners a unique edge in every engagement.",
  },
  {
    icon: ModernWorkloadsIcon,
    title: "Modern Workloads",
    description:
      "Cover every cloud service your clients run \u2014 from Kubernetes and serverless to AI/ML infrastructure. PointFive spans 7 clouds and 400+ detection types, so partners never hit coverage gaps.",
  },
  {
    icon: OperationalDesignIcon,
    title: "Operational Design",
    description:
      "Move beyond one-time assessments. PointFive integrates directly into engineering workflows through Jira, Slack, and CI/CD pipelines, enabling partners to build lasting optimization practices.",
  },
]

export function WhyPartner() {
  return (
    <section className="bg-[#0A0A1A] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Why PointFive
          </p>
          <h2
            className="mt-3 font-bold leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
          >
            Why PointFive for Partners
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#B4B4D0]">
            A platform built for partnership \u2014 technology that makes your
            team more effective, not more dependent.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20"
              >
                <div className="mb-4">
                  <Icon />
                </div>
                <h3 className="text-[18px] font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#B4B4D0]">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
