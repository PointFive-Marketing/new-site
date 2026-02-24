import { SiteHeader } from "@/components/site-header"
import { PricingCalculator } from "@/components/pricing/pricing-calculator"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Pricing | PointFive",
  description:
    "See your exact ROI before you sign. Enter your cloud spend — we'll show the PointFive fee, guaranteed savings, and your net financial position.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-foreground">
        <SiteHeader dark />
        <div className="px-6 pb-16 pt-14 text-center md:pb-20 md:pt-16">
          <div className="mb-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
            Pricing Calculator
          </div>
          <h1 className="mx-auto max-w-[720px] text-4xl font-normal leading-tight text-white md:text-5xl md:text-[56px]">
            See your <em className="font-normal not-italic text-primary">exact ROI</em>
            <br />
            before you sign anything
          </h1>
          <p className="mx-auto mt-4 max-w-[540px] text-lg leading-relaxed text-white/60">
            Enter your estimated cloud spend. We&apos;ll show you the PointFive
            fee, guaranteed savings, and your net financial position — in real
            time.
          </p>
        </div>
      </section>
      <PricingCalculator />
      <Footer />
    </main>
  )
}
