import { COVERAGE_CATEGORIES } from "@/lib/deepwaste-coverage-data"

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x={4} y={4} width={16} height={16} rx={2} />
    <line x1={9} y1={9} x2={15} y2={15} />
    <line x1={15} y1={9} x2={9} y2={15} />
  </svg>
)

const DbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx={12} cy={5} rx={9} ry={3} />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

const ServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
    <path d="M16 3h-8l-2 4h12z" />
  </svg>
)

const StorageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
  </svg>
)

const LambdaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 21l7-18 7 18" />
    <line x1={8} y1={14} x2={16} y2={14} />
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={12} cy={12} r={10} />
    <line x1={2} y1={12} x2={22} y2={12} />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
)

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
)

const WaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

const CogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={12} cy={12} r={3} />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
)

const CAT_ICONS: Record<string, React.ReactNode> = {
  "Compute": <BoxIcon />,
  "Kubernetes & Containers": <ServerIcon />,
  "Databases": <DbIcon />,
  "Data Warehouses & Analytics": <ChartIcon />,
  "Storage": <StorageIcon />,
  "Serverless & Functions": <LambdaIcon />,
  "Networking & CDN": <GlobeIcon />,
  "Monitoring & Observability": <ChartIcon />,
  "Streaming & Messaging": <WaveIcon />,
  "AI & Machine Learning": <CogIcon />,
  "Security & Configuration": <CogIcon />,
}

export function DeepWasteCoverage() {
  return (
    <section className="coverage">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Platform Coverage</div>
          <div className="section-title">
            85+ services.
            <br />
            Deep analysis on every one.
          </div>
          <p className="section-desc">
            Not just visibility — DeepWaste™ analyzes usage patterns, access
            frequencies, and workload characteristics across 90+ services
            organized by infrastructure domain.
          </p>
        </div>
        {COVERAGE_CATEGORIES.map((cat, i) => (
          <div key={i} className="coverage-cat">
            <div className="coverage-cat-header">
              <div className="coverage-cat-icon blue">
                {CAT_ICONS[cat.name] ?? <BoxIcon />}
              </div>
              <div className="coverage-cat-name">{cat.name}</div>
            </div>
            <div className="coverage-grid">
              {cat.items.map((item, j) => (
                <div key={j} className="coverage-item">
                  <div className={`coverage-icon ${item.provider}`}>
                    <BoxIcon />
                  </div>
                  <div>
                    <div className="coverage-name">{item.name}</div>
                    <div className="coverage-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
