export function DeepWastePillars() {
  return (
    <section className="pillars">
      <div className="container">
        <div className="reveal">
          <div className="section-label">What DeepWaste™ Finds</div>
          <div className="section-title">
            Three kinds of waste.
            <br />
            One engine finds them all.
          </div>
          <p className="section-desc">
            Our Cloud Cost Research Team ships ~10 new detections every week,
            organized into three strategic categories that together cover your
            entire optimization surface.
          </p>
        </div>
        <div className="pillars-grid reveal">
          <div className="pillar">
            <div className="pillar-icon green">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00E639"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={12} y1={1} x2={12} y2={23} />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <h3>
              Quick Wins,
              <br />
              Massive Returns
            </h3>
            <p>
              High-impact savings with minimal engineering effort. Schedule idle
              instances, deploy VPC endpoints, enable lifecycle policies — and
              start saving on day one. Example customer saved $600K by deploying
              a single S3 Gateway Endpoint.
            </p>
            <span className="pillar-tag green">Fastest ROI</span>
          </div>
          <div className="pillar">
            <div className="pillar-icon blue">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0000EE"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2={16.65} y2={16.65} />
                <line x1={11} y1={8} x2={11} y2={14} />
                <line x1={8} y1={11} x2={14} y2={11} />
              </svg>
            </div>
            <h3>
              Deep Waste
              <br />
              Nobody Else Detects
            </h3>
            <p>
              Architectural inefficiencies invisible to other tools. We use VPC
              Flow Logs, Route53 queries, snapshot side-scanning, and virtual
              cost allocation to expose waste your cloud provider doesn&apos;t
              surface.
            </p>
            <span className="pillar-tag blue">Only PointFive</span>
          </div>
          <div className="pillar">
            <div className="pillar-icon dark">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0A1A"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={18} y1={20} x2={18} y2={10} />
                <line x1={12} y1={20} x2={12} y2={4} />
                <line x1={6} y1={20} x2={6} y2={14} />
              </svg>
            </div>
            <h3>
              Most Common
              <br />
              Across Every Stack
            </h3>
            <p>
              The patterns we see in every environment — idle resources,
              outdated instance generations, non-production overprovisioning,
              and missing storage lifecycle policies. Consistent 20–40% savings
              potential.
            </p>
            <span className="pillar-tag dark">Universal</span>
          </div>
        </div>
      </div>
    </section>
  )
}
