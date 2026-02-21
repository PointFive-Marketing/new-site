import { ArrowRight } from "lucide-react"

const updates = [
  {
    type: "Case Study",
    title: "Leading Global FinTech's DynamoDB Cost Optimization with PointFive",
    href: "https://www.pointfive.co/resources",
    image: "/latest-updates/1-dynamodb-case-study.png",
    imageAlt: "DynamoDB case study — cost optimization at scale",
  },
  {
    type: "Whitepaper",
    title: "FinOps for AI: Smarter Azure OpenAI Cost Management",
    href: "https://www.pointfive.co/resources",
    image: "/latest-updates/2-azure-openai-cost.png",
    imageAlt: "Cloud, AI and Azure OpenAI cost optimization",
  },
  {
    type: "Whitepaper",
    title: "FinOps for AI: Ensure LLM Efficiency From the Start",
    href: "https://www.pointfive.co/resources",
    image: "/latest-updates/3-llm-efficiency-from-start.png",
    imageAlt: "FinOps for AI: Ensure LLM efficiency from the start",
  },
  {
    type: "Whitepaper",
    title: "FinOps for AI: Managing LLM Costs in Azure OpenAI",
    href: "https://www.pointfive.co/resources",
    image: "/latest-updates/4-managing-llm-costs-azure.png",
    imageAlt: "Managing LLM economics with CEPM on Azure",
  },
]

export function LatestUpdatesSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-16">
        <h2
          className="text-center text-foreground"
          style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          Latest updates
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {updates.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-sm border border-foreground/[0.08] bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Card image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A1A]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(10,10,26,0.4) 100%)",
                  }}
                />
              </div>

              {/* Tag + content — light area */}
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 inline-flex w-fit rounded-full bg-primary-tint px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                  {item.type}
                </span>
                <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 group-hover:text-primary">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
