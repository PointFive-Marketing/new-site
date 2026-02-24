import { getAllProductReleases } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Product Releases | PointFive",
  description:
    "The latest product updates, feature releases, and platform improvements from PointFive.",
}

export default function ProductReleasesPage() {
  const posts = getAllProductReleases()

  return (
    <main>
      <SiteHeader />

      <section className="bg-[#0A0A1A] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Product Releases
          </p>
          <h1
            className="mt-3 font-bold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            What&apos;s New
          </h1>
          <p className="mt-4 max-w-[500px] text-[16px] leading-relaxed text-[#B4B4D0]">
            Feature updates, platform improvements, and new capabilities.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          {posts.length === 0 ? (
            <p className="py-20 text-center text-neutral-400">
              Product releases coming soon.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} basePath="/product-releases" />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
