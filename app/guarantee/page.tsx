import { GuaranteeHero } from "@/components/guarantee/guarantee-hero"
import { GuaranteeStats } from "@/components/guarantee/guarantee-stats"
import { GuaranteeHowItWorks } from "@/components/guarantee/guarantee-how-it-works"
import { GuaranteeWhatWeFind } from "@/components/guarantee/guarantee-what-we-find"
import { GuaranteeProof } from "@/components/guarantee/guarantee-proof"
import { GuaranteeFaq } from "@/components/guarantee/guarantee-faq"
import { GuaranteeCta } from "@/components/guarantee/guarantee-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "48-Hour Savings Guarantee | PointFive",
  description:
    "Guaranteed cloud savings in 48 hours — or we buy your team dinner, up to $1,000. Connect your cloud accounts, get a full savings report, and start optimizing. No agents, no risk.",
}

export default function GuaranteePage() {
  return (
    <main>
      <GuaranteeHero />
      <GuaranteeStats />
      <GuaranteeHowItWorks />
      <GuaranteeWhatWeFind />
      <GuaranteeProof />
      <GuaranteeFaq />
      <GuaranteeCta />
      <Footer />
    </main>
  )
}
