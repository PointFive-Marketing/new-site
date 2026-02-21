import { AIHero } from "@/components/ai/ai-hero"
import { AIFeatures } from "@/components/ai/ai-features"
import { AIValueSection } from "@/components/ai/ai-value-section"
import { AIRoiStats } from "@/components/ai/ai-roi-stats"
import { AIUnitEconomics } from "@/components/ai/ai-unit-economics"
import { AIExecution } from "@/components/ai/ai-execution"
import { AICta } from "@/components/ai/ai-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "AI | PointFive",
  description:
    "Optimize AI workloads and accelerate cloud-wide remediation. Per-token precision, PTU rightsizing, and autonomous agents built into the engineering workflow.",
}

export default function AIPage() {
  return (
    <main>
      <AIHero />
      <AIFeatures />
      <AIValueSection />
      <AIRoiStats />
      <AIUnitEconomics />
      <AIExecution />
      <AICta />
      <Footer />
    </main>
  )
}
