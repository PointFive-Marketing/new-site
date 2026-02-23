import { WASTE_CATEGORIES } from "@/lib/deepwaste-data"

const ICONS: Record<string, React.ReactNode> = {
  unused: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
      <circle cx={12} cy={12} r={10} />
      <line x1={15} y1={9} x2={9} y2={15} />
      <line x1={9} y1={9} x2={15} y2={15} />
    </svg>
  ),
  underutil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
      <line x1={1} y1={18} x2={23} y2={18} strokeDasharray="2 3" opacity={0.4} />
    </svg>
  ),
  arch: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x={3} y={3} width={7} height={7} />
      <rect x={14} y={3} width={7} height={7} />
      <rect x={3} y={14} width={7} height={7} />
      <rect x={14} y={14} width={7} height={7} />
    </svg>
  ),
  config: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={12} cy={12} r={3} />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  modern: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10" />
      <polyline points="23 20 23 14 17 14" />
      <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
    </svg>
  ),
  commit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
      <line x1={1} y1={10} x2={23} y2={10} />
    </svg>
  ),
}

export function DeepWasteWasteCategories() {
  return (
    <section className="waste-types">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Detection Categories</div>
          <div className="section-title">
            Six types of waste.
            <br />
            One continuous scan.
          </div>
          <p className="section-desc">
            DeepWaste™ categorizes every finding so teams can prioritize by
            effort, risk, and impact.
          </p>
        </div>
        <div className="waste-grid reveal">
          {WASTE_CATEGORIES.map((cat, i) => (
            <div key={i} className="waste-card">
              <div className="waste-card-icon">
                {ICONS[cat.icon] ?? ICONS.unused}
              </div>
              <h4>{cat.title}</h4>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
