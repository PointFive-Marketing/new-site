import { AICoworkersHero } from "@/components/ai-coworkers/ai-coworkers-hero"
import { AICoworkersFeatures } from "@/components/ai-coworkers/ai-coworkers-features"
import { AICoworkersCta } from "@/components/ai-coworkers/ai-coworkers-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "AI Co-Workers | PointFive",
  description:
    "Autonomous AI agents that go beyond recommendations to implement cloud optimizations — right-sizing, scheduling, re-architecting — so your team can focus on building.",
}

export default function AICoworkersPage() {
  return (
    <main>
      <AICoworkersHero />
      <AICoworkersFeatures />
      <AICoworkersCta />
      <Footer />
    </main>
  )
}
