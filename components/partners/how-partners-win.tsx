function GrowIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 28l6-8 6 4 8-12" stroke="#00E639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 12h4v4" stroke="#00E639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 32h24" stroke="#00E639" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
    </svg>
  )
}

function ExpandIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8h8M8 8v8M32 32h-8M32 32v-8" stroke="#00E639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="14" width="12" height="12" rx="2" stroke="#00E639" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  )
}

function DifferentiateIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#00E639" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function AccelerateIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="12" stroke="#00E639" strokeWidth="1.5" strokeOpacity="0.3" />
      <path d="M20 12v8l6 4" stroke="#00E639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 10l2-2M12 10l-2-2" stroke="#00E639" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const CARDS = [
  {
    icon: GrowIcon,
    title: "Grow",
    description:
      "Generate recurring revenue streams through optimization engagements. PointFive\u2019s continuous detection model creates ongoing value that keeps clients engaged quarter after quarter.",
  },
  {
    icon: ExpandIcon,
    title: "Expand",
    description:
      "Broaden your cloud practice across AWS, Azure, GCP, Snowflake, Databricks, Kubernetes, and more. One platform covers the full multi-cloud landscape your clients operate in.",
  },
  {
    icon: DifferentiateIcon,
    title: "Differentiate",
    description:
      "Stand out with proprietary DeepWaste Detection that finds savings competitors miss. Position your practice as the premium choice for cloud efficiency.",
  },
  {
    icon: AccelerateIcon,
    title: "Accelerate",
    description:
      "Cut engagement ramp-up from weeks to days. PointFive\u2019s automated discovery and prioritized recommendations mean your team delivers value from the first meeting.",
  },
]

export function HowPartnersWin() {
  return (
    <section className="border-t border-white/[0.06] bg-[#060612] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Partner Benefits
          </p>
          <h2
            className="mt-3 font-bold leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
          >
            How Partners Win With PointFive
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#B4B4D0]">
            Four ways PointFive accelerates your cloud practice and
            strengthens client relationships.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
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
