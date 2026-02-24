import { getAllKnowledgeBaseItems, getKnowledgeBaseCategories } from "@/lib/blog"
import { KnowledgeBaseList } from "@/components/knowledge-base/knowledge-base-list"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Knowledge Base | PointFive",
  description:
    "Cloud optimization knowledge base — understand inefficiencies, billing models, detection methods, and remediation strategies across AWS, Azure, GCP, and Snowflake.",
}

export default function KnowledgeBasePage() {
  const posts = getAllKnowledgeBaseItems()
  const categories = getKnowledgeBaseCategories()

  return (
    <main>
      <SiteHeader />

      <section className="bg-[#0A0A1A] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Knowledge Base
          </p>
          <h1
            className="mt-3 font-bold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Cloud Optimization Framework
          </h1>
          <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#B4B4D0]">
            Deep dives into cloud inefficiencies — how they arise, how
            they&apos;re billed, how to detect them, and how to fix them.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <KnowledgeBaseList posts={posts} categories={categories} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
