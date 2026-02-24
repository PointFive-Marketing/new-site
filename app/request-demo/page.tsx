import { ArrowRight, Check, Shield, Clock, Zap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Book a Demo | PointFive",
  description:
    "See how PointFive finds and fixes cloud waste autonomously. Book a personalized demo and get a value report within 48 hours.",
}

const VALUE_PROPS = [
  {
    icon: Clock,
    title: "48-Hour Value Report",
    text: "We deliver quantified savings before you commit to anything",
  },
  {
    icon: Zap,
    title: "Agentless Deployment",
    text: "No agents, no write access — live in hours, not weeks",
  },
  {
    icon: Shield,
    title: "Net Zero Guarantee",
    text: "If we don't find more savings than you spend on us, we waive the difference",
  },
]

const TRUSTED_BY = [
  "Nubank",
  "PwC",
  "JustEat Takeaway",
  "REEF Technology",
  "Via",
  "DriveWealth",
]

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-[#0A0A1A]">
      <SiteHeader dark />

      <section className="relative overflow-hidden">
        {/* Background glows */}
        <div
          className="pointer-events-none absolute -right-[200px] -top-[200px] h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,238,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-[100px] left-[100px] h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,230,57,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:gap-16 md:pb-28 md:pt-24 lg:gap-20">
          {/* Left: messaging */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0000EE]/30 bg-[#0000EE]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E639]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#7eb8ff]">
                Book a Demo
              </span>
            </div>

            <h1
              className="text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              See what you&apos;re
              <br />
              <em className="font-bold italic text-[#7eb8ff]">
                really spending.
              </em>
            </h1>

            <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-[#B4B4D0]">
              Book a personalized demo and we&apos;ll show you exactly where
              your cloud waste is hiding. Most companies find savings that pay
              for the yearly platform fee in a month.
            </p>

            {/* Value props */}
            <div className="mt-10 space-y-5">
              {VALUE_PROPS.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#0000EE]/30 bg-[#0000EE]/10">
                    <item.icon className="h-4 w-4 text-[#7eb8ff]" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-[14px] text-[#B4B4D0]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                Trusted by teams at
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {TRUSTED_BY.map((name) => (
                  <span
                    key={name}
                    className="text-[14px] font-medium text-[#8888A8]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form placeholder */}
          <div className="flex items-center">
            <div className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
              <h2 className="text-[22px] font-bold text-white">
                Request Your Demo
              </h2>
              <p className="mt-2 text-[14px] text-[#B4B4D0]">
                Fill in your details and we&apos;ll be in touch within one
                business day.
              </p>

              {/* Form — ready for HubSpot / form integration */}
              <div className="mt-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-[13px] font-medium text-white/70">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-[15px] text-white placeholder-white/25 outline-none transition-colors focus:border-[#0000EE]/50 focus:bg-white/[0.08]"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[13px] font-medium text-white/70">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-[15px] text-white placeholder-white/25 outline-none transition-colors focus:border-[#0000EE]/50 focus:bg-white/[0.08]"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-white/70">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-[15px] text-white placeholder-white/25 outline-none transition-colors focus:border-[#0000EE]/50 focus:bg-white/[0.08]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-white/70">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-[15px] text-white placeholder-white/25 outline-none transition-colors focus:border-[#0000EE]/50 focus:bg-white/[0.08]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-white/70">
                    Monthly Cloud Spend (approx.)
                  </label>
                  <select className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-[15px] text-white/50 outline-none transition-colors focus:border-[#0000EE]/50 focus:bg-white/[0.08]">
                    <option value="">Select range</option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-plus">$5M+</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-white/70">
                    What are you most interested in?
                  </label>
                  <select className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-[15px] text-white/50 outline-none transition-colors focus:border-[#0000EE]/50 focus:bg-white/[0.08]">
                    <option value="">Select one</option>
                    <option value="cost-optimization">Cloud Cost Optimization</option>
                    <option value="ai-costs">AI / LLM Cost Management</option>
                    <option value="deepwaste">DeepWaste Detection</option>
                    <option value="ai-coworkers">AI Co-Workers</option>
                    <option value="net-zero">Net Zero Guarantee</option>
                    <option value="general">General Demo</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#0000EE] py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
                >
                  Book My Demo
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-center text-[12px] text-white/30">
                  No commitment required. We&apos;ll never share your info.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-t border-white/[0.06] bg-[#060612]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-6 py-12 sm:flex-row sm:gap-4 md:py-14">
          <div className="text-center sm:text-left">
            <div
              className="font-bold text-[#00E639]"
              style={{ fontSize: "clamp(32px, 3vw, 44px)" }}
            >
              500%+
            </div>
            <div className="mt-1 text-[14px] text-[#8888A8]">
              Average customer ROI
            </div>
          </div>
          <div className="hidden h-8 w-px bg-white/10 sm:block" />
          <div className="text-center">
            <div
              className="font-bold text-[#7eb8ff]"
              style={{ fontSize: "clamp(32px, 3vw, 44px)" }}
            >
              48 hrs
            </div>
            <div className="mt-1 text-[14px] text-[#8888A8]">
              From deploy to value report
            </div>
          </div>
          <div className="hidden h-8 w-px bg-white/10 sm:block" />
          <div className="text-center sm:text-right">
            <div
              className="font-bold text-white"
              style={{ fontSize: "clamp(32px, 3vw, 44px)" }}
            >
              $50M+
            </div>
            <div className="mt-1 text-[14px] text-[#8888A8]">
              Savings delivered across key accounts
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
