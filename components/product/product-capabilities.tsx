import { productImages } from "@/lib/product-images"

const capabilities = [
  {
    title: "Seamless Integration",
    description:
      "Read-only, agentless integrations offer immediate insights into your entire cloud environment—including usage, cost, performance, metrics, and Kubernetes workloads.",
    image: productImages.seamlessIntegration,
    alt: "Seamless Integration",
  },
  {
    title: "DeepWaste™ Detection",
    description:
      "Proprietary DeepWaste algorithms go deeper into cloud architecture to proactively catch typically overlooked inefficiencies before resources are wasted.",
    image: productImages.deepwasteCard,
    alt: "DeepWaste™ Detection",
  },
  {
    title: "Cross-Team Collaboration",
    description:
      "Bring your engineering and FinOps teams together to keep your organization's cloud strategies aligned with business goals.",
    image: productImages.crossTeamCollab,
    alt: "Cross-Team Collaboration",
  },
  {
    title: "Agentic Remediation",
    description:
      "Quickly implement automated and supervised remediation workflows and optimize long-tail opportunity groups automatically.",
    image: productImages.effortlessRemediation,
    alt: "Effortless Remediation",
  },
  {
    title: "Customized Analytics",
    description:
      "Quickly assess your cloud resources, understand costs, unlock savings, and discover your PointFive efficiency score to make the most of your cloud investment.",
    image: productImages.customizedAnalytics,
    alt: "Customized Analytics",
  },
  {
    title: "Workflow Enablement",
    description:
      "Empower engineers by integrating existing productivity tools, automated task creation and delegation, and in-platform tracking and messaging.",
    image: productImages.workflowEnablement,
    alt: "Workflow Enablement",
  },
  {
    title: "Rate Optimization",
    description:
      "Centralize your cloud commitments on a single pane of glass to make informed decisions with real-time alerts and recommendations to boost efficiency and operational performance.",
    image: productImages.rateOptimizationCard,
    alt: "Rate Optimization",
  },
  {
    title: "Contextualized Insights",
    description:
      "Analyze resource dependencies and ownership with detailed graphs that forecast the technical and financial impacts of potential changes.",
    image: productImages.richContextualizationCard,
    alt: "Rich Contextualization",
  },
]

export function ProductCapabilities() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {/* Hero image spanning full width above cards */}
          <div className="md:col-span-2 lg:col-span-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={productImages.nurtureTeam}
              alt="Nurture a healthier cloud and a happier team"
              className="h-auto w-full object-contain"
            />
            <h2
              className="mt-8 text-center text-foreground"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              Nurture a healthier cloud and a happier team
            </h2>
          </div>

          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10 md:p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cap.image}
                  alt={cap.alt}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold leading-tight text-foreground">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
