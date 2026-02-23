"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    question: "What is AI cost optimization?",
    answer:
      "AI cost optimization is the practice of reducing and managing the costs associated with running AI workloads in the cloud — including managed LLM APIs (Azure OpenAI, AWS Bedrock, GCP Vertex AI), GPU infrastructure, inference endpoints, and AI training pipelines. It goes beyond traditional cloud cost management by addressing token-based billing, provisioned throughput economics, model selection efficiency, and prompt optimization.",
  },
  {
    question: "How is AI cost optimization different from traditional cloud cost management?",
    answer:
      "Traditional cloud cost management focuses on compute, storage, and networking resources with predictable pricing models. AI workloads introduce fundamentally different economics: token-based billing, provisioned throughput vs. pay-as-you-go decisions, model version efficiency differences, and costs that scale with usage in non-linear ways. AI cost optimization requires understanding these mechanics at the deployment level, not just the billing account level.",
  },
  {
    question: "How does PointFive optimize AI costs across multiple cloud providers?",
    answer:
      "PointFive provides a unified platform that connects to AWS, Azure, and GCP through agentless, read-only integrations. It automatically discovers all AI services and resources, attributes costs to teams and services, and uses its DeepWaste detection engine to identify optimization opportunities specific to each provider's AI pricing mechanics — from Azure OpenAI PTU rightsizing to AWS Bedrock inference optimization to GCP Vertex AI training pipeline efficiency.",
  },
  {
    question: "Can PointFive allocate AI costs to specific engineering teams?",
    answer:
      "Yes. PointFive automatically maps AI spend to engineering teams, services, and cost centers using your existing infrastructure topology. This means no manual tagging or spreadsheet work — teams get real-time dashboards showing their AI cost footprint, spend trends, and optimization opportunities specific to their services.",
  },
  {
    question: "What kind of AI cost savings can I expect?",
    answer:
      "Savings vary by environment, but PointFive customers have achieved up to 99% cost reduction on underutilized provisioned throughput deployments and 86% savings through model migration to newer, more cache-efficient versions. Across all cloud resources, PointFive typically identifies savings of 15-30% of total cloud spend.",
  },
  {
    question: "How long does it take to deploy PointFive for AI cost optimization?",
    answer:
      "PointFive uses agentless, read-only integrations that deploy in hours, not weeks. There are no agents to install and no write access to your cloud environment. You can expect to see your first AI cost insights and optimization recommendations within 48 hours of connecting your cloud accounts.",
  },
  {
    question: "What AI services does PointFive support?",
    answer:
      "PointFive supports managed LLM services including Azure OpenAI (GPT-4o, GPT-4, o1, o3), AWS Bedrock (Claude, Titan, Llama, Mistral), and GCP Vertex AI (Gemini, PaLM, custom models). It also covers GPU infrastructure (including NVIDIA H100, H200, and B300 instances), AI training pipelines, and inference endpoints across all major cloud providers.",
  },
  {
    question: "Does PointFive integrate with engineering tools?",
    answer:
      "Yes. PointFive integrates with Jira, ServiceNow, and Slack for workflow management. Its MCP (Model Context Protocol) integration brings cost intelligence directly into agentic IDEs like Cursor and Windsurf, allowing engineers to discover savings and generate remediation code without leaving their development environment.",
  },
]

export function AiCostFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-[800px] px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
            FAQ
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
            AI Cost Optimization — Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-sm border border-border bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-border px-6 py-5">
                  <p className="text-[15px] leading-relaxed text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
