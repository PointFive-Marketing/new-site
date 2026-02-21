import { productImages, productLottie } from "@/lib/product-images"
import { LottiePlayer } from "@/components/ui/lottie-player"
import { ProductDashboardPreview } from "@/components/product/product-hero-ui"

function FeatureBlock({
  badge,
  title,
  description,
  bullets,
  imageSrc,
  lottieSrc,
  media,
  imageAlt,
  reverse = false,
  light = false,
}: {
  badge: string
  title: string
  description?: string
  bullets: string[]
  imageSrc?: string
  lottieSrc?: string
  /** Custom content for the right column (e.g. dashboard window); overrides image/Lottie */
  media?: React.ReactNode
  imageAlt: string
  reverse?: boolean
  /** Light theme (for use on light section backgrounds with white product imagery) */
  light?: boolean
}) {
  const mediaContent =
    media != null
      ? media
      : lottieSrc != null
        ? (
            <LottiePlayer
              src={lottieSrc}
              alt={imageAlt}
              className="h-auto min-h-[280px] w-full"
              loop
            />
          )
        : imageSrc != null
          ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-auto w-full object-contain"
              />
            )
          : null

  const titleColor = light ? "text-foreground" : "text-white"
  const bodyColor = light ? "text-muted-foreground" : "text-[#B4B4D0]"

  return (
    <div className="grid min-h-[85vh] gap-10 py-16 md:grid-cols-2 md:gap-12 md:items-center md:py-24">
      <div className={reverse ? "md:order-2" : ""}>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
          {badge}
        </p>
        <h2
          className={`mt-2 ${titleColor}`}
          style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          {title}
        </h2>
        {description ? (
          <p className={`mt-4 text-pretty leading-relaxed ${bodyColor}`}>
            {description}
          </p>
        ) : null}
        <ul className="mt-5 flex flex-col gap-2">
          {bullets.map((b) => (
            <li
              key={b}
              className={`flex items-start gap-2 text-sm ${bodyColor}`}
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00E639]" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        {mediaContent}
      </div>
    </div>
  )
}

export function ProductFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,0,238,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div id="releases" className="relative mx-auto max-w-[1200px] px-6 py-20 md:py-28 scroll-mt-20">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Product
          </p>
          <h2
            className="mx-auto mt-3 max-w-2xl text-balance text-white"
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Masters of the Cloud
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-[#B4B4D0]">
            Empower your engineers with best-in-class tools for cloud visibility,
            management, and optimization.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-28 md:gap-36">
          {/* AI services optimization — dashboard window on right */}
          <FeatureBlock
            badge="AI services optimization"
            title="Understand AI costs in real time"
            description="Continuous visibility into AI-related cloud spend—so teams can understand where costs are coming from, how they're changing, and what's driving them, without digging through fragmented billing data."
            bullets={[
              "Unified view of AI spend. Observe AI services, infrastructure and supporting resources in one place across providers.",
              "Cost drivers, not just totals. Track what's driving AI spend—models, tokens, inference patterns and supporting infra—so teams can understand and manage growth.",
              "Continuous AI optimization. Detect PTU vs PAYG inefficiencies, idle capacity and outdated model choices and recommend migration or rightsizing strategies.",
            ]}
            media={<ProductDashboardPreview />}
            imageAlt="PointFive AI & Cloud Infrastructure dashboard"
          />

          {/* Cloud Observability — Lottie on live site (DeepWaste animation) */}
          <FeatureBlock
            badge="Cloud Observability"
            title="Effortless, agentless integrations, continuous intelligence."
            description="Agentless integrations enable seamless read-only connections to deliver continuous telemetry across clouds and services with minimal setup."
            bullets={[
              "Advanced DeepWaste™ multi-source detection surfaces real dollar optimization opportunities.",
              "Rich contextualization includes technical root cause, business impact and ownership so engineers have everything they need to fix issues quickly.",
            ]}
            lottieSrc={productLottie.deepwasteDetection}
            imageAlt="Seamless, agentless integration enables continuous cloud and K8s monitoring"
            reverse
          />

          {/* Usage Optimization — Lottie on live site */}
          <FeatureBlock
            badge="Usage Optimization"
            title="Accelerate Realized Savings with Low-Risk Instant Remediation"
            description="Prioritized opportunities by verified impact and implementation risk."
            bullets={[
              "Cut engineering time with one-click scripts, and production-ready IaC patches.",
              "Frictionless automation, delegation, and integrations meet engineers in the workflows they already use.",
            ]}
            lottieSrc={productLottie.actionRead}
            imageAlt="Action-ready recommendations"
          />

          {/* Unified Data Fabric */}
          <FeatureBlock
            badge="Unified Data Fabric"
            title="Query Your Cloud Data Instantly with AI"
            description="Plain language queries. Any cloud. Instant action."
            bullets={[
              "Clarity and confidence: A single, trusted AI model ends manual reconciliation and guesswork.",
              "Instant answers for everyone: Ask in plain language and receive editable SQL, visual charts, and shareable dashboards without queues or training.",
              "Freedom to adapt: Full SQL is visible. Add custom rules or integrate through open APIs.",
            ]}
            imageSrc={productImages.dataFabricGif}
            imageAlt="Unified Data Fabric in action"
            reverse
          />

          {/* Rate Optimization — Lottie on live site */}
          <FeatureBlock
            badge="Rate Optimization"
            title="Make smart decisions to optimize coverage and utilization across clouds and services"
            description="Consolidate commitment data across your cloud services, including reserved resources, flexible savings plans, capacity reservations, enterprise agreements, custom pricing, and more."
            bullets={[
              "Track your effective savings rate, optimize coverage and utilization across services in a single pane of glass.",
              "Get real-time alerts and recommendations, including impending commitment expirations, unexpected drops in utilization, and more.",
            ]}
            lottieSrc={productLottie.commitments}
            imageAlt="Consolidate all cloud commitments"
          />

          {/* Anomaly Detection — same Lottie as live site: DeepWaste Detection.json */}
          <FeatureBlock
            badge="Anomaly Detection"
            title="Detect anomalies early. Act instantly."
            description="Scoped detection parameters to match your risk tolerance."
            bullets={[
              "Root-cause analysis: usage vs pricing vs resource-level issues.",
              "Every anomaly becomes an actionable item with ownership and verification.",
            ]}
            lottieSrc={productLottie.deepwasteDetection}
            imageAlt="Proactive detection and root-cause analysis"
            reverse
          />

          {/* Analytics — Lottie (Context-Rich Insights) on live site */}
          <FeatureBlock
            badge="Analytics"
            title="Empower your team to act with the data that matters to them"
            description="Build custom charts and dashboards to support your organization's needs for any department or stakeholder."
            bullets={[
              "Review and share key metrics, including spend, projected savings, resource utilization, commitments and more.",
              "Governed data with role-based access and audit trails.",
            ]}
            lottieSrc={productLottie.contextRichInsights}
            imageAlt="Context-rich insights and analytics"
          />

          {/* Kubernetes */}
          <FeatureBlock
            badge="Kubernetes Observability & Optimization Solution"
            title="Comprehensive, agentless Kubernetes visibility with cost attribution at workload and container level, and automated remediation to eliminate K8s waste."
            description=""
            bullets={[
              "Agentless access to K8s metrics and resource metadata.",
              "Maximize K8s cost optimization through deep visibility into cluster metrics, usage, and metadata.",
              "Automated remediations and scripts for right-sizing and idle workload cleanup.",
            ]}
            imageSrc={productImages.k8sSolution}
            imageAlt="PointFive Kubernetes Observability & Optimization Solution"
            reverse
          />
        </div>
      </div>
    </section>
  )
}
