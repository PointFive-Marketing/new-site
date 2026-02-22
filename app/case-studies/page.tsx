import { getAllCaseStudies } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Case Studies | PointFive",
  description:
    "See how leading companies achieve cloud cost savings with PointFive.",
}

export default function CaseStudiesPage() {
  const posts = getAllCaseStudies()

  return (
    <main>
      <SiteHeader />

      <section className="bg-[#0A0A1A] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Case Studies
          </p>
          <h1
            className="mt-3 font-bold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Customer Stories
          </h1>
          <p className="mt-4 max-w-[500px] text-[16px] leading-relaxed text-[#B4B4D0]">
            See how engineering teams use PointFive to find and fix cloud waste
            at scale.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          {posts.length === 0 ? (
            <p className="py-20 text-center text-neutral-400">
              Case studies coming soon.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  basePath="/case-studies"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
