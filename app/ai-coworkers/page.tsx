import { AICoworkersHero } from "@/components/ai-coworkers/ai-coworkers-hero"
import { AICoworkersFeatures } from "@/components/ai-coworkers/ai-coworkers-features"
import { AICoworkersTrust } from "@/components/ai-coworkers/ai-coworkers-trust"
import { AICoworkersCta } from "@/components/ai-coworkers/ai-coworkers-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "AI Co-Workers | PointFive",
  description:
    "Intelligent teammates that turn cloud optimization into a self-sustaining practice — monitoring, prioritizing, and acting on your behalf, 24/7.",
}

export default function AICoworkersPage() {
  return (
    <main>
      <AICoworkersHero />
      <AICoworkersFeatures />
      <AICoworkersTrust />
      <AICoworkersCta />
      <Footer />
    </main>
  )
}
