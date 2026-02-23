import type { Metadata } from "next"
import { AiCostHero } from "@/components/ai-cost-optimization/ai-cost-hero"
import { AiCostProblem } from "@/components/ai-cost-optimization/ai-cost-problem"
import { AiCostStats } from "@/components/ai-cost-optimization/ai-cost-stats"
import { AiCostVisibility } from "@/components/ai-cost-optimization/ai-cost-visibility"
import { AiCostOptimizationEngine } from "@/components/ai-cost-optimization/ai-cost-optimization-engine"
import { AiCostEngineering } from "@/components/ai-cost-optimization/ai-cost-engineering"
import { AiCostMulticloud } from "@/components/ai-cost-optimization/ai-cost-multicloud"
import { AiCostHowItWorks } from "@/components/ai-cost-optimization/ai-cost-how-it-works"
import { AiCostBlogResources } from "@/components/ai-cost-optimization/ai-cost-blog-resources"
import { AiCostFaq } from "@/components/ai-cost-optimization/ai-cost-faq"
import { AiCostCta } from "@/components/ai-cost-optimization/ai-cost-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Cost Optimization | PointFive — Visibility, Allocation & Savings Across Every Cloud",
  description:
    "Optimize AI costs across Azure OpenAI, AWS Bedrock, and GCP Vertex AI. PointFive gives engineering teams full visibility into AI spend, team-level cost allocation, and continuous optimization — from token-level economics to PTU rightsizing. See savings in 48 hours.",
  keywords: [
    "AI cost optimization",
    "AI cost management",
    "LLM cost optimization",
    "Azure OpenAI cost optimization",
    "AWS Bedrock cost optimization",
    "GCP Vertex AI cost optimization",
    "AI spend visibility",
    "FinOps for AI",
    "GenAI cost management",
    "AI infrastructure costs",
    "token cost optimization",
    "PTU optimization",
    "AI workload optimization",
    "cloud AI spending",
    "engineering cost allocation",
    "AI unit economics",
  ],
  openGraph: {
    title: "AI Cost Optimization | PointFive",
    description:
      "Full visibility into AI spend. Team-level cost allocation. Continuous optimization across Azure OpenAI, AWS Bedrock, and GCP Vertex AI.",
    type: "website",
    url: "https://www.pointfive.co/ai-cost-optimization",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Cost Optimization | PointFive",
    description:
      "Full visibility into AI spend. Team-level cost allocation. Continuous optimization across Azure OpenAI, AWS Bedrock, and GCP Vertex AI.",
  },
  alternates: {
    canonical: "https://www.pointfive.co/ai-cost-optimization",
  },
}

// Structured data for AEO (Answer Engine Optimization)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Cost Optimization",
  description:
    "Optimize AI costs across Azure OpenAI, AWS Bedrock, and GCP Vertex AI with PointFive. Full visibility, team allocation, and continuous optimization.",
  provider: {
    "@type": "Organization",
    name: "PointFive",
    url: "https://www.pointfive.co",
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI cost optimization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI cost optimization is the practice of reducing and managing the costs associated with running AI workloads in the cloud — including managed LLM APIs, GPU infrastructure, inference endpoints, and AI training pipelines. It addresses token-based billing, provisioned throughput economics, model selection efficiency, and prompt optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How is AI cost optimization different from traditional cloud cost management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional cloud cost management focuses on compute, storage, and networking with predictable pricing. AI workloads introduce token-based billing, provisioned throughput vs pay-as-you-go decisions, model version efficiency differences, and non-linear cost scaling. AI cost optimization requires deployment-level understanding of these mechanics.",
        },
      },
      {
        "@type": "Question",
        name: "How does PointFive optimize AI costs across multiple cloud providers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PointFive provides a unified platform connecting to AWS, Azure, and GCP through agentless, read-only integrations. It discovers all AI services, attributes costs to teams, and uses DeepWaste detection to identify provider-specific optimization opportunities — from Azure OpenAI PTU rightsizing to AWS Bedrock inference optimization.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of AI cost savings can I expect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PointFive customers have achieved up to 99% cost reduction on underutilized provisioned throughput deployments and 86% savings through model migration. Across all cloud resources, PointFive typically identifies savings of 15-30% of total cloud spend.",
        },
      },
      {
        "@type": "Question",
        name: "Can PointFive allocate AI costs to specific engineering teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. PointFive automatically maps AI spend to engineering teams, services, and cost centers using existing infrastructure topology — no manual tagging required. Teams get real-time dashboards showing their AI cost footprint and optimization opportunities.",
        },
      },
    ],
  },
}

export default function AiCostOptimizationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <AiCostHero />
        <AiCostProblem />
        <AiCostStats />
        <AiCostVisibility />
        <AiCostOptimizationEngine />
        <AiCostEngineering />
        <AiCostMulticloud />
        <AiCostHowItWorks />
        <AiCostBlogResources />
        <AiCostFaq />
        <AiCostCta />
        <Footer />
      </main>
    </>
  )
}
