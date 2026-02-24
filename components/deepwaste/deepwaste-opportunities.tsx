"use client"

import { useState, useMemo } from "react"
import { OPPORTUNITY_CARDS, type OppProvider } from "@/lib/deepwaste-data"

const MAX_VISIBLE = 6

const PROVIDER_LABELS: Record<OppProvider, string> = {
  aws: "AWS",
  azure: "Azure",
  gcp: "GCP",
  k8s: "K8s",
  snowflake: "Snowflake",
  multi: "Multi-Cloud",
}

const TABS = [
  { id: "quick", label: "Quick Wins" },
  { id: "deep", label: "Deep Waste" },
  { id: "common", label: "Most Common" },
  { id: "ai", label: "AI" },
  { id: "aws", label: "AWS" },
  { id: "azure", label: "Azure" },
  { id: "gcp", label: "GCP" },
  { id: "k8s", label: "Kubernetes" },
] as const

export function DeepWasteOpportunities() {
  const [filter, setFilter] = useState<string>("quick")

  const { visible, total } = useMemo(() => {
    const matching = OPPORTUNITY_CARDS.filter((card) =>
      card.cats.includes(filter as (typeof card.cats)[number])
    )
    return {
      visible: matching.slice(0, MAX_VISIBLE),
      total: matching.length,
    }
  }, [filter])

  return (
    <section className="showcase" id="opportunities">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Opportunity Catalog</div>
          <div className="section-title">
            Real optimizations.
            <br />
            Real savings.
          </div>
          <p className="section-desc">
            A sample of the 400+ distinct optimizations our DeepWaste™ engine
            detects — each backed by usage patterns, configuration analysis, and
            validated remediation playbooks.
          </p>
        </div>
        <div className="tabs reveal" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab ${filter === tab.id ? "active" : ""}`}
              data-filter={tab.id}
              onClick={() => setFilter(tab.id)}
              role="tab"
              aria-selected={filter === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="opp-grid" id="opp-grid">
          {visible.map((card, i) => (
            <div
              key={i}
              className="opp-card visible"
              data-cats={card.cats.join(",")}
            >
              <div className="opp-card-header">
                <h4>{card.title}</h4>
                <span className={`opp-provider ${card.provider}`}>
                  {PROVIDER_LABELS[card.provider]}
                </span>
              </div>
              <p>{card.description}</p>
              <div className="opp-card-footer">
                <div className="opp-tags">
                  {card.tags.map((t, j) => (
                    <span
                      key={j}
                      className={`opp-tag ${t.highlight ? "highlight" : ""}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
                {card.savings && (
                  <span className="opp-savings">{card.savings}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        {total > MAX_VISIBLE && (
          <p
            className="opp-sample-note"
            style={{
              textAlign: "center",
              marginTop: 28,
              fontSize: 14,
              color: "var(--neutral-300)",
              fontWeight: 500,
            }}
          >
            This is just 6 sampled opportunities.{" "}
            <a
              href="https://hub.pointfive.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)", textDecoration: "underline" }}
            >
              Explore the full catalog →
            </a>
          </p>
        )}
        <div className="callout reveal">
          <div className="callout-icon">
            <svg
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00E639"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="callout-text">
            <h4>Real customer impact</h4>
            <p>
              Example customer achieved full ROI in 10 days. Another saved $600K
              from a single NAT Gateway endpoint deployment. Our average customer
              ROI exceeds 500% — and the real number? You wouldn&apos;t believe it.
            </p>
          </div>
          <div className="callout-stat">
            500%+
            <br />
            <span style={{ fontSize: 13, color: "var(--neutral-300)", fontWeight: 500 }}>
              avg ROI
            </span>
          </div>
        </div>
        <div className="hub-link" style={{ marginTop: 40, textAlign: "center" }}>
          <a
            href="https://hub.pointfive.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2={16.65} y2={16.65} />
            </svg>
            Explore the full catalog on our Cloud Efficiency Hub →
          </a>
          <p style={{ marginTop: 12, fontSize: 13, color: "var(--neutral-300)", fontWeight: 400 }}>
            Open-source repository of 400+ cloud optimization detections and
            remediation playbooks
          </p>
        </div>
      </div>
    </section>
  )
}
