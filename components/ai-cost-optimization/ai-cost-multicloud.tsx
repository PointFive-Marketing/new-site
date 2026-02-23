"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const PROVIDERS = [
  {
    name: "Azure OpenAI",
    icon: "/icons/pf/logo-azure.svg",
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
    icon: "/icons/pf/logo-aws.svg",
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
    icon: "/icons/pf/logo-gcp.svg",
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
  const [lightboxOpen, setLightboxOpen] = useState(false)

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

        {/* Unified Cost Analysis Dashboard with lightbox */}
        <div className="group mt-12">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="relative w-full overflow-hidden rounded-lg border border-border bg-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="View full cost analysis dashboard"
          >
            <div className="border-b border-border bg-neutral-50 px-6 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <p className="text-xs font-medium text-neutral-400">
                  PointFive — Unified Cloud Cost Analysis
                </p>
              </div>
            </div>
            <div className="p-2">
              <Image
                src="/images/ai-cost/cost-analysis.png"
                alt="PointFive unified cloud cost analysis dashboard showing daily spend breakdown across services with stacked bar chart visualization"
                width={1160}
                height={600}
                className="w-full rounded"
                quality={90}
              />
            </div>
            {/* Magnifying glass overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-lg opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                <Search className="h-6 w-6" aria-hidden />
              </span>
            </div>
          </button>
        </div>

        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent
            className="max-h-[90vh] max-w-[95vw] overflow-auto rounded-lg bg-white p-0 sm:max-w-[1100px]"
            showCloseButton={true}
          >
            <DialogTitle className="sr-only">
              PointFive Unified Cloud Cost Analysis Dashboard
            </DialogTitle>
            <div className="p-2">
              <Image
                src="/images/ai-cost/cost-analysis.png"
                alt="PointFive unified cloud cost analysis dashboard showing daily spend breakdown across services with stacked bar chart visualization"
                width={1440}
                height={900}
                className="w-full rounded"
                quality={95}
              />
            </div>
          </DialogContent>
        </Dialog>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROVIDERS.map((provider) => (
            <div
              key={provider.name}
              className="rounded-sm border border-border bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100">
                  <Image
                    src={provider.icon}
                    alt={`${provider.name} logo`}
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3
                    className="font-bold text-foreground"
                    style={{
                      fontSize: "clamp(18px, 2vw, 22px)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {provider.name}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {provider.services}
                  </p>
                </div>
              </div>
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
