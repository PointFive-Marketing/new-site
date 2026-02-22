import { getAllBlogPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog | PointFive",
  description:
    "Insights on cloud cost optimization, FinOps, and engineering efficiency from the PointFive team.",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-[#0A0A1A] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Blog
          </p>
          <h1
            className="mt-3 font-bold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Insights &amp; Ideas
          </h1>
          <p className="mt-4 max-w-[500px] text-[16px] leading-relaxed text-[#B4B4D0]">
            Cloud cost optimization, FinOps best practices, and engineering
            efficiency — from the team building the platform.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          {posts.length === 0 ? (
            <p className="py-20 text-center text-neutral-400">
              Blog posts coming soon.
            </p>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <div className="mb-10">
                  <BlogCard post={featured} featured />
                </div>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
