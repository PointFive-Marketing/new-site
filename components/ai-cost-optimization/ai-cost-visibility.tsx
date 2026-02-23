import { Check } from "lucide-react"
import { ProductScreenshot } from "./product-screenshot"

const CAPABILITIES = [
  {
    title: "Unified AI Spend View",
    description:
      "Observe AI services, infrastructure, and supporting resources across AWS Bedrock, Azure OpenAI, and GCP Vertex AI in one place.",
  },
  {
    title: "Token-Level Cost Tracking",
    description:
      "Go beyond aggregated billing. Track cost per token, per inference, and per deployment to understand exactly what drives your AI spend.",
  },
  {
    title: "Team & Service Attribution",
    description:
      "Automatically allocate AI costs to engineering teams, services, and environments without manual tagging or spreadsheet gymnastics.",
  },
  {
    title: "Cost Driver Analysis",
    description:
      "Identify which models, token patterns, inference endpoints, and supporting infrastructure are responsible for cost growth.",
  },
]

export function AiCostVisibility() {
  return (
    <section className="bg-background" id="how-it-works">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
              Full Visibility
            </p>
            <h2
              className="mt-3 text-foreground"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              See Every Dollar of AI Spend. Allocate It to Every Team.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-500">
              PointFive maps your entire AI cost surface — from managed LLM
              APIs to GPU infrastructure — into a single view with engineering-level
              granularity.
            </p>
            <ul className="mt-8 space-y-4">
              {CAPABILITIES.map((cap) => (
                <li key={cap.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#00E639]/40 bg-[#00E639]/10">
                    <Check className="h-3 w-3 text-[#00E639]" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-neutral-600">
                    <strong className="text-foreground">{cap.title}</strong> —{" "}
                    {cap.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product screenshots — cropped to show sidebar panels */}
          <div className="flex flex-col gap-4">
            <ProductScreenshot
              src="/images/ai-cost/ai-cloud-costs.png"
              alt="PointFive AI Cloud Costs Summary — unified view of AI spend across services with cost breakdown by SageMaker and Bedrock"
              label="AI Cloud Costs Summary"
              description="$4,260/mo across SageMaker & Bedrock with service-level breakdown"
              cropFocus="right"
              previewHeight={280}
            />
            <ProductScreenshot
              src="/images/ai-cost/ai-top-resources.png"
              alt="Top AI Resources by Cost — SageMaker endpoints, Bedrock Inference Profiles with account-level cost attribution"
              label="Top AI Resources by Cost"
              description="Resource-level attribution across accounts and services"
              cropFocus="right"
              previewHeight={280}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
