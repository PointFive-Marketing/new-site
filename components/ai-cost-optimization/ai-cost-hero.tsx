"use client"

import { useState } from "react"
import { ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const DEMO_URL = "https://www.pointfive.co/request-demo"

export function AiCostHero() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute -right-[200px] -top-[200px] h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,238,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[100px] left-[200px] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,230,57,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <SiteHeader dark />

        <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0000EE]/30 bg-[#0000EE]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E639]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#7eb8ff]">
                AI Cost Optimization
              </span>
            </div>

            <h1
              className="text-balance text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              Your AI Costs Are Growing{" "}
              <em className="font-bold italic text-[#7eb8ff]">Faster</em> Than
              Your Visibility.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-[#B4B4D0]">
              Engineering teams are deploying AI at unprecedented speed, but cost
              governance hasn&apos;t kept up. PointFive gives you full visibility
              into AI spend, allocates costs to teams, and finds optimizations
              that traditional tools miss.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0000EE] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
              >
                See Your AI Costs
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-[15px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Product screenshot with lightbox */}
          <div className="group mt-14">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="relative w-full overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-[#0000EE]/10 transition-all duration-300 hover:border-white/20 hover:shadow-[#0000EE]/20 focus:outline-none focus:ring-2 focus:ring-[#0000EE] focus:ring-offset-2 focus:ring-offset-[#0A0A1A]"
              aria-label="View full dashboard screenshot"
            >
              <Image
                src="/images/ai-cost/dashboard-overview.png"
                alt="PointFive AI Cost Optimization Dashboard — Team Opportunities, Savings Tracking, and Optimization Groups"
                width={1200}
                height={700}
                className="w-full"
                quality={90}
              />
              {/* Magnifying glass overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A1A]/0 transition-all duration-300 group-hover:bg-[#0A0A1A]/30">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#0A0A1A] shadow-lg opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                  <Search className="h-6 w-6" aria-hidden />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="max-h-[90vh] max-w-[95vw] overflow-auto rounded-lg bg-white p-0 sm:max-w-[1100px]"
          showCloseButton={true}
        >
          <DialogTitle className="sr-only">
            PointFive AI Cost Optimization Dashboard
          </DialogTitle>
          <div className="p-2">
            <Image
              src="/images/ai-cost/dashboard-overview.png"
              alt="PointFive AI Cost Optimization Dashboard — Team Opportunities, Savings Tracking, and Optimization Groups"
              width={1440}
              height={900}
              className="w-full rounded"
              quality={95}
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
