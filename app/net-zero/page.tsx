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
    "Your first month costs you nothing. PointFive's Net Zero guarantee: savings in month one exceed your subscription — or you don't pay. Start today.",
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
