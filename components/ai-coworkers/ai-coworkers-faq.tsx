"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    question: "What data can a Co-worker access?",
    answer:
      "Opportunities, Anomalies, Resources, Users, Teams, and Slack users/channels. Co-workers do not access raw billing data or cost history.",
  },
  {
    question: "Can it take actions, or only send reports?",
    answer:
      "Both. Co-workers deliver reports via email or Slack, and can assign opportunities to team members or update their status — all within your defined guardrails.",
  },
  {
    question: "How does a customer set up a Co-worker?",
    answer:
      "No code needed. Go to Automations → Co-workers → Add Task, describe the workflow in plain language, approve the AI suggestion, and save. That's it.",
  },
  {
    question: "What delivery channels are supported?",
    answer:
      "Email (HTML, to any address) and Slack (channels or DMs). More delivery channels are planned.",
  },
  {
    question: "Who can create and manage Co-workers?",
    answer:
      "Admins and Members can create and manage Co-workers. Users have access to their own data and can build personal workflows.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Co-workers run as server-side scheduled jobs within PointFive's SOC2-compliant infrastructure. No agents are deployed in your environment. Read-only cloud integration. All actions are logged and auditable.",
  },
]

export function AICoworkersFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[800px] px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Frequently Asked Questions
          </p>
          <h2
            className="mx-auto mt-3 max-w-3xl text-balance text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Got Questions? We&apos;ve Got Answers.
          </h2>
        </div>

        <div className="divide-y divide-border">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[16px] font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-[15px] leading-relaxed text-neutral-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
