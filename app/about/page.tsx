import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutFivePoints } from "@/components/about/about-five-points"
import { AboutTeam } from "@/components/about/about-team"
import { AboutTrust } from "@/components/about/about-trust"
import { AboutCareersCta } from "@/components/about/about-careers-cta"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "About Us | PointFive",
  description:
    "PointFive enables continuous cloud cost efficiency through deeper detection and collaborative remediation tools. Meet the team behind the platform.",
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <AboutHero />
      <AboutMission />
      <AboutFivePoints />
      <AboutTeam />
      <AboutTrust />
      <AboutCareersCta />
      <Footer />
    </main>
  )
}
