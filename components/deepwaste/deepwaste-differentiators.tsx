import { DIFFERENTIATORS } from "@/lib/deepwaste-data"

export function DeepWasteDifferentiators() {
  return (
    <section className="differentiators">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Why PointFive</div>
          <div className="section-title">
            Built different.
            <br />
            Detects different.
          </div>
        </div>
        <div className="diff-grid reveal">
          {DIFFERENTIATORS.map((d, i) => (
            <div key={i} className="diff-item">
              <div className="diff-num">{d.num}</div>
              <h4>{d.title}</h4>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
