import "@/styles/deepwaste.css"
import { SiteHeader } from "@/components/site-header"
import { DeepWasteHero } from "@/components/deepwaste/deepwaste-hero"
import { DeepWasteTicker } from "@/components/deepwaste/deepwaste-ticker"
import { DeepWastePillars } from "@/components/deepwaste/deepwaste-pillars"
import { DeepWasteOpportunities } from "@/components/deepwaste/deepwaste-opportunities"
import { DeepWasteWasteCategories } from "@/components/deepwaste/deepwaste-waste-categories"
import { DeepWasteCoverage } from "@/components/deepwaste/deepwaste-coverage"
import { DeepWasteDifferentiators } from "@/components/deepwaste/deepwaste-differentiators"
import { DeepWasteCta } from "@/components/deepwaste/deepwaste-cta"
import { DeepWasteReveal } from "@/components/deepwaste/deepwaste-reveal"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "DeepWaste™ Technology | PointFive",
  description:
    "400+ optimization types across 12+ providers. Quick wins, deep waste nobody else detects, and the most common patterns. See how DeepWaste™ finds cloud waste others miss.",
}

export default function DeepWastePage() {
  return (
    <div className="dw-page">
      <DeepWasteReveal />
      <SiteHeader dark />
      <DeepWasteHero />
      <DeepWasteTicker />
      <DeepWastePillars />
      <DeepWasteOpportunities />
      <DeepWasteWasteCategories />
      <DeepWasteCoverage />
      <DeepWasteDifferentiators />
      <DeepWasteCta />
      <Footer />
    </div>
  )
}
