import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { PartnerHero } from "@/components/partners/partner-hero"
import { PartnerLogos } from "@/components/partners/partner-logos"
import { WhyPartner } from "@/components/partners/why-partner"
import { HowPartnersWin } from "@/components/partners/how-partners-win"
import { PartnerTestimonial } from "@/components/partners/partner-testimonial"
import { PartnerFaq } from "@/components/partners/partner-faq"
import { PartnerCta } from "@/components/partners/partner-cta"

export const metadata = {
  title: "Partners | PointFive",
  description:
    "Join the PointFive partner ecosystem. Grow your cloud practice with industry-leading DeepWaste Detection across 7 clouds and 400+ optimization types.",
}

export default function PartnersPage() {
  return (
    <main>
      <SiteHeader />
      <PartnerHero />
      <PartnerLogos />
      <WhyPartner />
      <HowPartnersWin />
      <PartnerTestimonial />
      <PartnerFaq />
      <PartnerCta />
      <Footer />
    </main>
  )
}
