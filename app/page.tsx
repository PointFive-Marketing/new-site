import { HeroSection } from "@/components/hero-section"
import { LogoBar } from "@/components/logo-bar"
import { StatsSection } from "@/components/stats-section"
import { PillarsSection } from "@/components/pillars-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { LatestUpdatesSection } from "@/components/latest-updates-section"
import { VideoCtaSection } from "@/components/video-cta-section"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoBar />
      <StatsSection />
      <PillarsSection />
      <TestimonialSection />
      <LatestUpdatesSection />
      <VideoCtaSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
