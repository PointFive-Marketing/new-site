import { ArrowRight } from "lucide-react"

const BLOG_POSTS = [
  {
    title: "Azure OpenAI Cost Saving Optimizations",
    description:
      "Four proven strategies for optimizing Azure OpenAI costs: PTU reservations, quota rightsizing, PAYG shifting, and capacity scheduling.",
    url: "/blog/azure-openai-cost-saving-optimizations",
    date: "Feb 11, 2026",
  },
  {
    title: "FinOps for AI: Master Your GenAI Unit Economics Across Every Cloud",
    description:
      "How to achieve unified visibility into AI spend across AWS Bedrock, Azure OpenAI, and GCP Vertex AI in a single platform.",
    url: "/blog/finops-for-ai-master-your-genai-unit-economics-across-every-cloud",
    date: "Feb 2, 2026",
  },
  {
    title: "FinOps for AI: The \"Tokenomics\" Frontier",
    description:
      "Why token-level unit economics — not aggregate spend — are the key to sustainable AI cost optimization. Real case studies with 86-99% savings.",
    url: "/blog/finops-for-ai-the-tokenomics-frontier",
    date: "Jan 22, 2026",
  },
  {
    title: "FinOps for AI: Cloud Is No Longer Only a Math Problem",
    description:
      "AI cost optimization isn't just about reducing spend. It's about optimizing cost-per-outcome while maintaining quality.",
    url: "/blog/finops-for-ai-cloud-is-no-longer-math-problem",
    date: "Jan 13, 2026",
  },
  {
    title: "The Hidden Economics of Managed LLMs in Azure OpenAI",
    description:
      "How managed LLM pricing hides deployment-level costs, and why Cloud Efficiency Posture Management (CEPM) provides the visibility you need.",
    url: "/blog/finops-for-ai-economics-of-managed-llms-in-azure-open-ai",
    date: "Jan 7, 2026",
  },
  {
    title: "The Collapse of Cost Visibility as a Strategy",
    description:
      "Why dashboards and alerts alone fail to drive efficiency. The shift from reporting spend to continuous optimization.",
    url: "/blog/the-collapse-of-cost-visibility-as-a-strategy",
    date: "Dec 11, 2025",
  },
]

export function AiCostBlogResources() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
            AI Cost Optimization Resources
          </p>
          <h2
            className="mt-3 text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Deep Dives on AI Cost Optimization
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">
            Our engineering and research teams publish continuously on the
            frontier of AI cost management. Explore our latest thinking.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-sm border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
            >
              <p className="font-mono text-xs text-neutral-400">{post.date}</p>
              <h3 className="mt-2 font-bold leading-tight text-foreground group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-500">
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
