import { CareersHero } from "@/components/careers/careers-hero"
import { CareersValues } from "@/components/careers/careers-values"
import { CareersPositions } from "@/components/careers/careers-positions"
import { AboutTrust } from "@/components/about/about-trust"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Careers | PointFive",
  description:
    "Join PointFive — we're hiring across engineering, sales, marketing, and product. Shape the future of cloud cost optimization.",
}

export default function CareersPage() {
  return (
    <main>
      <SiteHeader />
      <CareersHero />
      <CareersValues />
      <CareersPositions />
      <AboutTrust />
      <Footer />
    </main>
  )
}
