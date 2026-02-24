"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    question: "What partnership types does PointFive offer?",
    answer:
      "PointFive offers three partnership tiers: Referral Partners who earn commissions on qualified introductions, Reseller Partners who bundle PointFive into their cloud optimization offerings, and Strategic Partners who co-develop solutions and go-to-market strategies. Each tier includes dedicated enablement, co-marketing opportunities, and technical support.",
  },
  {
    question: "How does PointFive support partner teams?",
    answer:
      "Every partner gets access to a dedicated Partner Success Manager, technical enablement workshops, and a partner portal with sales tools, battle cards, and deal registration. We also provide joint customer onboarding support and quarterly business reviews to ensure partner success.",
  },
  {
    question: "How does PointFive differentiate from other platforms?",
    answer:
      "PointFive\u2019s DeepWaste Detection Engine applies cyber-security methodologies to cloud cost optimization \u2014 an approach no other vendor takes. This results in 400+ unique detection types across 7 clouds, consistently finding 20\u201340% more savings than traditional tools. For partners, this means every engagement delivers measurable, differentiated results.",
  },
  {
    question: "How quickly can partners get onboarded?",
    answer:
      "Partners can be fully enabled within 2 weeks. The process includes platform training, sales enablement, and access to demo environments. Most partners are running their first customer engagement within 30 days of signing.",
  },
  {
    question: "What are the margins and pricing?",
    answer:
      "PointFive offers competitive partner margins that increase with tier level. Referral partners earn commission on closed deals. Reseller and Strategic partners receive volume-based pricing with margins designed to support a sustainable, profitable cloud optimization practice. Contact our partnerships team for detailed pricing.",
  },
]

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-[16px] font-medium text-white">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#B4B4D0] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[14px] leading-relaxed text-[#B4B4D0]">{answer}</p>
      </div>
    </div>
  )
}

export function PartnerFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="border-t border-white/[0.06] bg-[#060612] py-16 md:py-20">
      <div className="mx-auto max-w-[720px] px-6">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            FAQ
          </p>
          <h2
            className="mt-3 font-bold leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
