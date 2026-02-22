"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What counts as \"finding savings\"?",
    a: "Actionable, quantified optimization opportunities in your infrastructure — things like idle resources, oversized instances, misconfigured services, or missing commitments. We deliver a prioritized report with dollar amounts, not vague suggestions. If there's nothing actionable to show you, dinner's on us.",
  },
  {
    q: "How does the dinner guarantee actually work?",
    a: "If our 48-hour savings report doesn't surface actionable cost optimizations, your team picks the restaurant and we cover the bill — up to $1,000. We'll send a prepaid card or reimburse directly. No fine print, no approval process. Just good food.",
  },
  {
    q: "What's the minimum cloud spend to qualify?",
    a: "The 48-hour guarantee is available for companies spending $500K+ annually on cloud infrastructure across any combination of AWS, Azure, GCP, Kubernetes, Snowflake, and Databricks. Below that threshold, we may still find savings but the dinner guarantee doesn't apply.",
  },
  {
    q: "What access do you need?",
    a: "Read-only access only — we never request write permissions. We connect through standard cloud provider IAM roles (AWS), service principals (Azure), or service accounts (GCP). For Kubernetes, it's completely agentless. Most customers are fully connected in under an hour.",
  },
  {
    q: "Is there any commitment after the 48-hour report?",
    a: "None. The savings report is yours to keep whether you continue with PointFive or not. If you want help implementing the findings, your dedicated engineering partner is ready to go. If not, enjoy the report — and potentially dinner.",
  },
  {
    q: "What if you find savings but I don't want to implement them?",
    a: "That's totally fine. The guarantee is about finding savings, not forcing implementation. You'll have a detailed report showing exactly what's possible. Many companies use our report to prioritize their own optimization roadmap, even before signing up.",
  },
  {
    q: "Has anyone actually gotten the dinner?",
    a: "Honestly? It's rare. We've done hundreds of these assessments and find actionable savings over 97% of the time. But we keep the guarantee because we believe in putting our money where our mouth is — literally.",
  },
]

export function GuaranteeFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[800px]">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Questions
          </p>
          <h2
            className="mx-auto mt-3 text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            The fine print
            <br />
            <span className="text-neutral-400">(there isn&apos;t much)</span>
          </h2>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card transition-colors hover:border-border"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-[16px] font-bold text-foreground">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-border px-6 pb-6 pt-4">
                  <p className="text-[15px] leading-relaxed text-neutral-500">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
