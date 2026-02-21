import { ProductHero } from "@/components/product/product-hero"
import { ProductStats } from "@/components/product/product-stats"
import { ProductFeatures } from "@/components/product/product-features"
import { ProductCapabilities } from "@/components/product/product-capabilities"
import { ProductEnterpriseCta } from "@/components/product/product-enterprise-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Product | PointFive",
  description:
    "Your lean, mean efficiency machine. Achieve total cloud and AI efficiency with PointFive's end-to-end visibility and remediation platform.",
}

export default function ProductPage() {
  return (
    <main>
      <ProductHero />
      <ProductStats />
      <ProductFeatures />
      <ProductCapabilities />
      <ProductEnterpriseCta />
      <Footer />
    </main>
  )
}
