import { COVERAGE_CATEGORIES } from "@/lib/deepwaste-coverage-data"

/* ── Category-level icons ── */

const ComputeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
    <line x1={8} y1={21} x2={16} y2={21} />
    <line x1={12} y1={17} x2={12} y2={21} />
  </svg>
)

const K8sIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={12} cy={12} r={3} />
    <circle cx={12} cy={12} r={9} />
    <line x1={12} y1={3} x2={12} y2={9} />
    <line x1={12} y1={15} x2={12} y2={21} />
    <line x1={3.5} y1={7.5} x2={9} y2={10.5} />
    <line x1={15} y1={13.5} x2={20.5} y2={16.5} />
  </svg>
)

const DbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx={12} cy={5} rx={9} ry={3} />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
)

const StorageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
  </svg>
)

const LambdaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 21l7-18 7 18" />
    <line x1={8} y1={14} x2={16} y2={14} />
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={12} cy={12} r={10} />
    <line x1={2} y1={12} x2={22} y2={12} />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
)

const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx={12} cy={12} r={3} />
  </svg>
)

const WaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 014 4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2a4 4 0 014-4z" />
    <path d="M8 8v2a4 4 0 004 4 4 4 0 004-4V8" />
    <line x1={12} y1={14} x2={12} y2={22} />
    <line x1={8} y1={18} x2={16} y2={18} />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

/* ── Per-provider item icons (small, for individual service tiles) ── */

const AwsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 12 3 20 17" />
    <line x1={8} y1={11} x2={16} y2={11} />
  </svg>
)

const AzureIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4l-4 16h6l7-12H7z" />
    <path d="M16 8l5 12H10" />
  </svg>
)

const GcpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 19 2 19 12 2" />
    <circle cx={12} cy={14} r={3} />
  </svg>
)

const DataIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
    <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
    <line x1={6} y1={6} x2={6.01} y2={6} />
    <line x1={6} y1={18} x2={6.01} y2={18} />
  </svg>
)

const K8sItemIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
)

const PROVIDER_ICONS: Record<string, React.ReactNode> = {
  aws: <AwsIcon />,
  azure: <AzureIcon />,
  gcp: <GcpIcon />,
  data: <DataIcon />,
  k8s: <K8sItemIcon />,
}

const CAT_ICONS: Record<string, React.ReactNode> = {
  "Compute": <ComputeIcon />,
  "Kubernetes & Containers": <K8sIcon />,
  "Databases": <DbIcon />,
  "Data Warehouses & Analytics": <ChartIcon />,
  "Storage": <StorageIcon />,
  "Serverless & Functions": <LambdaIcon />,
  "Networking & CDN": <GlobeIcon />,
  "Monitoring & Observability": <MonitorIcon />,
  "Streaming & Messaging": <WaveIcon />,
  "AI & Machine Learning": <BrainIcon />,
  "Security & Configuration": <ShieldIcon />,
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
                {CAT_ICONS[cat.name] ?? <ComputeIcon />}
              </div>
              <div className="coverage-cat-name">{cat.name}</div>
            </div>
            <div className="coverage-grid">
              {cat.items.map((item, j) => (
                <div key={j} className="coverage-item">
                  <div className={`coverage-icon ${item.provider}`}>
                    {PROVIDER_ICONS[item.provider] ?? <DataIcon />}
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
