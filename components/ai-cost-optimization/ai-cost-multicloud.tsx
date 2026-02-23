const PROVIDERS = [
  {
    name: "Azure OpenAI",
    services: "GPT-4o, GPT-4, o1, o3",
    capabilities: [
      "PTU vs. PAYG optimization",
      "Deployment-level cost attribution",
      "Token economics per model version",
      "Reserved capacity rightsizing",
    ],
  },
  {
    name: "AWS Bedrock",
    services: "Claude, Titan, Llama, Mistral",
    capabilities: [
      "Cross-model cost comparison",
      "On-demand vs. provisioned analysis",
      "Inference endpoint optimization",
      "Multi-region cost mapping",
    ],
  },
  {
    name: "GCP Vertex AI",
    services: "Gemini, PaLM, custom models",
    capabilities: [
      "Prediction endpoint utilization",
      "Training pipeline cost tracking",
      "Custom model serving efficiency",
      "Auto-scaling cost impact analysis",
    ],
  },
]

export function AiCostMulticloud() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Multi-Cloud AI Coverage
          </p>
          <h2
            className="mt-3 text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            One Platform for AI Costs Across Every Cloud
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">
            Most organizations use AI services from multiple cloud providers.
            PointFive provides unified AI cost optimization across all of them —
            no fragmented views, no manual reconciliation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROVIDERS.map((provider) => (
            <div
              key={provider.name}
              className="rounded-sm border border-border bg-white p-8 transition-shadow hover:shadow-md"
            >
              <h3
                className="font-bold text-foreground"
                style={{
                  fontSize: "clamp(18px, 2vw, 22px)",
                  letterSpacing: "-0.02em",
                }}
              >
                {provider.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                {provider.services}
              </p>
              <ul className="mt-6 space-y-3">
                {provider.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
