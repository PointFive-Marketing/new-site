import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Learning | PointFive",
  description:
    "Webinars, whitepapers, and resources on cloud cost optimization, FinOps for AI, and engineering efficiency from PointFive.",
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const WEBINARS = [
  {
    title:
      "How Nubank Scales Financial Services with DynamoDB — Without Waste",
    description:
      "Learn how Nubank, the world's largest digital bank, achieved a 10-day ROI with PointFive by eliminating DynamoDB waste at massive scale while maintaining the performance their 100M+ customers depend on.",
    href: "https://hs.pointfive.co/how-nubank-scales-financial-services-with-dynamodb-without-waste",
    tag: "On-Demand",
  },
  {
    title: "Autonomous Cloud Optimization: Beyond Dashboards and Alerts",
    description:
      "Discover how AI-driven autonomous optimization replaces manual FinOps workflows — detecting, validating, and fixing cloud waste without human intervention.",
    href: "#",
    tag: "Coming Soon",
  },
  {
    title: "DeepWaste Detection: Finding the Waste Others Miss",
    description:
      "A deep dive into PointFive's DeepWaste engine and how it uncovers hidden cloud cost inefficiencies that traditional tools overlook.",
    href: "#",
    tag: "Coming Soon",
  },
]

const WHITEPAPERS = [
  {
    title: "FinOps for AI: Smarter Azure OpenAI Cost Management",
    description:
      "Practical strategies for managing and reducing Azure OpenAI spend as your organization scales AI workloads.",
    href: "/blog/azure-openai-cost-saving-optimizations",
    internal: true,
  },
  {
    title: "FinOps for AI: The Tokenomics Frontier",
    description:
      "Understand the economics of token-based AI pricing and how FinOps teams can build cost models that keep pace with LLM adoption.",
    href: "/blog/finops-for-ai-the-tokenomics-frontier",
    internal: true,
  },
  {
    title: "FinOps for AI: Managing LLM Costs in Azure OpenAI",
    description:
      "A guide to the cost levers available in Azure OpenAI and how to align model selection, provisioning, and usage with your budget.",
    href: "/blog/finops-for-ai-economics-of-managed-llms-in-azure-open-ai",
    internal: true,
  },
  {
    title: "FinOps for AI: Ensure LLM Efficiency From the Start",
    description:
      "Master your GenAI unit economics across every cloud — from initial deployment through production scale.",
    href: "/blog/finops-for-ai-master-your-genai-unit-economics-across-every-cloud",
    internal: true,
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function LearningPage() {
  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-[#0A0A1A] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Learning
          </p>
          <h1
            className="mt-3 font-bold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Resources &amp; Insights
          </h1>
          <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#B4B4D0]">
            Webinars, whitepapers, and deep dives on cloud cost optimization,
            FinOps for AI, and autonomous infrastructure efficiency.
          </p>
        </div>
      </section>

      {/* Webinars */}
      <section className="bg-[#0A0A1A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Webinars
          </p>
          <h2
            className="mt-3 font-bold leading-[1.15] tracking-tight text-white"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            Watch &amp; Learn
          </h2>
          <p className="mt-3 max-w-[480px] text-[15px] leading-relaxed text-[#B4B4D0]">
            Recorded sessions featuring real customer stories and deep technical
            walkthroughs.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WEBINARS.map((w) => {
              const isAvailable = w.href !== "#"
              return (
                <a
                  key={w.title}
                  href={isAvailable ? w.href : undefined}
                  target={isAvailable ? "_blank" : undefined}
                  rel={isAvailable ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-colors ${
                    isAvailable
                      ? "hover:border-[#0000EE]/40 hover:bg-white/[0.06]"
                      : "cursor-default opacity-70"
                  }`}
                >
                  <span
                    className={`mb-4 inline-block w-fit rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${
                      isAvailable
                        ? "bg-[#0000EE]/10 text-[#7eb8ff]"
                        : "bg-white/5 text-[#B4B4D0]"
                    }`}
                  >
                    {w.tag}
                  </span>
                  <h3 className="text-[17px] font-semibold leading-snug text-white">
                    {w.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#8888A8]">
                    {w.description}
                  </p>
                  {isAvailable && (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#7eb8ff] transition-colors group-hover:text-white">
                      Watch Now
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="bg-[#0A0A1A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          {/* Divider */}
          <div className="mb-16 border-t border-white/[0.06]" />

          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Whitepapers
          </p>
          <h2
            className="mt-3 font-bold leading-[1.15] tracking-tight text-white"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            FinOps for AI Series
          </h2>
          <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#B4B4D0]">
            In-depth guides on managing and optimizing AI and LLM costs across
            every major cloud provider.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {WHITEPAPERS.map((wp) => (
              <Link
                key={wp.title}
                href={wp.href}
                className="group flex flex-col rounded-lg border border-white/10 bg-white/[0.04] p-8 transition-colors hover:border-[#0000EE]/40 hover:bg-white/[0.06]"
              >
                <span className="mb-4 inline-block w-fit rounded-full bg-[#00E639]/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#00E639]">
                  Whitepaper
                </span>
                <h3 className="text-[17px] font-semibold leading-snug text-white">
                  {wp.title}
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#8888A8]">
                  {wp.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#7eb8ff] transition-colors group-hover:text-white">
                  Read Now
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
