import { NetZeroHero } from "@/components/net-zero/net-zero-hero"
import { NetZeroStats } from "@/components/net-zero/net-zero-stats"
import { NetZeroRoi } from "@/components/net-zero/net-zero-roi"
import { NetZeroOpportunities } from "@/components/net-zero/net-zero-opportunities"
import { NetZeroTimeline } from "@/components/net-zero/net-zero-timeline"
import { NetZeroPlatforms } from "@/components/net-zero/net-zero-platforms"
import { NetZeroPartner } from "@/components/net-zero/net-zero-partner"
import { NetZeroCta } from "@/components/net-zero/net-zero-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Net Zero Offer | PointFive",
  description:
    "Guaranteed net positive every term. If we don't find more cost optimizations than you've spent, we waive the difference. Most cover their annual fee in a month — Nubank did it in 10 days.",
}

export default function NetZeroPage() {
  return (
    <main>
      <NetZeroHero />
      <NetZeroStats />
      <NetZeroRoi />
      <NetZeroOpportunities />
      <NetZeroTimeline />
      <NetZeroPlatforms />
      <NetZeroPartner />
      <NetZeroCta />
      <Footer />
    </main>
  )
}
