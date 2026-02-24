"use client"

import { useRef, useEffect, useState } from "react"
import { Search } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const DEMO_URL = "/request-demo"

/**
 * Small preview of the dashboard with a magnifying glass overlay.
 * Click to open the full-size dashboard in a modal.
 */
export function ProductDashboardPreview() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative flex h-[340px] w-full items-center justify-center overflow-hidden bg-[#0e0e1a] focus:outline-none focus:ring-2 focus:ring-[#0000EE] focus:ring-offset-2 focus:ring-offset-[#0A0A1A] sm:h-[400px]"
        aria-label="View dashboard full screen"
      >
        {/* Scaled-down dashboard preview — larger, no corner radius */}
        <div
          className="absolute left-1/2 top-1/2 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/2 scale-[0.58] sm:scale-[0.65]"
        >
          <ProductDashboardWindow />
        </div>
        {/* Magnifying glass overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A1A]/50 transition-colors group-hover:bg-[#0A0A1A]/25">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#1a1d2e] shadow-lg transition-transform group-hover:scale-110">
            <Search className="h-7 w-7" aria-hidden />
          </span>
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-h-[90vh] max-w-[95vw] overflow-auto rounded-none bg-white p-0 sm:max-w-[920px]"
          showCloseButton={true}
        >
          <DialogTitle className="sr-only">
            PointFive dashboard — full screen view
          </DialogTitle>
          <div className="p-0">
            <ProductDashboardWindow />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

/** Dashboard window only — for use in the first product feature block (right side). */
export function ProductDashboardWindow() {
  return (
    <div className="w-full min-w-[320px] max-w-[900px] overflow-x-auto bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-[#e2e6ed] bg-[#f9fafc] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-[#9ba3b5]">
          PointFive — AI & Cloud Infrastructure
        </span>
      </div>

      {/* Content: sidebar + main */}
      <div className="grid min-h-[480px] w-full min-w-[600px] grid-cols-[200px_1fr]">
        {/* Sidebar */}
        <aside className="border-r border-[#e2e6ed] bg-[#f9fafc] py-4">
          <div className="mb-5 px-3">
            <div className="mb-1.5 px-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-[#b0b8c8]">
              Overview
            </div>
            {sidebarOverview.map((item) => (
              <div
                key={item.label}
                className={`flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
                  item.active ? "bg-[#0000ee]/[0.06] text-[#1a1d2e]" : "text-[#8a93a8]"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    item.active ? "bg-[#0000ee]" : "bg-[#d0d6e2]"
                  }`}
                />
                {item.label}
                {"badge" in item && item.badge && (
                  <span className="ml-auto rounded-full bg-[#0000ee]/10 px-1.5 py-0.5 font-mono text-[10px] text-[#0000ee]">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="px-3">
            <div className="mb-1.5 px-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-[#b0b8c8]">
              Detections
            </div>
            {sidebarDetections.map((item) => (
              <div
                key={item.label}
                className="flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-xs text-[#8a93a8]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d0d6e2]" />
                {item.label}
                {"badgeRed" in item && item.badgeRed && item.badge && (
                  <span className="ml-auto rounded-full bg-[#dc3c3c]/10 px-1.5 py-0.5 font-mono text-[10px] text-[#dc3c3c]">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b border-[#e2e6ed] px-5 py-3.5">
            <div>
              <div className="text-[13px] font-medium text-[#1a1d2e]">AI Infrastructure Costs</div>
              <div className="mt-0.5 font-mono text-[11px] text-[#9ba3b5]">
                Jan 21 – Feb 17 · 6 resources · All regions
              </div>
            </div>
            <span className="rounded-full border border-[#10b964]/20 bg-[#10b964]/10 px-2.5 py-1 text-[10px] font-medium text-[#10b964]">
              Live
            </span>
          </div>
          <div className="grid grid-cols-3 border-b border-[#e2e6ed]">
            {[
              { label: "Monthly Spend", value: "$6,842", sub: "↑ 23%", green: false },
              { label: "Identified Savings", value: "$2,140", sub: null, green: true },
              { label: "Detections", value: "12", sub: "active", green: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-r border-[#e2e6ed] px-5 py-3.5 last:border-r-0"
              >
                <div className="font-mono text-[10px] uppercase tracking-wide text-[#9ba3b5]">
                  {stat.label}
                </div>
                <div
                  className={`mt-1 font-mono text-[20px] font-semibold tracking-tight text-[#1a1d2e] ${
                    stat.green ? "text-[#10b964]" : ""
                  }`}
                >
                  {stat.value}
                  {stat.sub && (
                    <span className="ml-1.5 text-xs font-normal text-[#10b964]">{stat.sub}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-[#e2e6ed] px-5 py-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-[11px] font-medium text-[#6a7385]">
                Token spend by type · Claude / Bedrock
              </div>
              <div className="flex gap-3">
                {[
                  { color: "bg-[#0000ee]/70", label: "Input" },
                  { color: "bg-[#10b964]", label: "Output" },
                  { color: "bg-[#e2e6ed]", label: "Cache" },
                ].map((l) => (
                  <div
                    key={l.label}
                    className="flex items-center gap-1.5 font-mono text-[10px] text-[#9ba3b5]"
                  >
                    <span className={`h-2 w-2 rounded-sm ${l.color}`} />
                    {l.label}
                  </div>
                ))}
              </div>
            </div>
            <BarChart />
          </div>
          <div className="border-b border-[#e2e6ed] border-l-[3px] border-l-[#0000ee] bg-[#f9faff] px-5 py-3.5">
            <div className="mb-2.5 flex items-center gap-2">
              <div className="flex h-[18px] w-[18px] items-center justify-center rounded bg-[#0000ee]/10 text-[10px]">
                ✦
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-[#0000ee]">
                AI Agent Observations
              </div>
            </div>
            <ul className="flex flex-col gap-1.5">
              {observations.map((obs, i) => {
                const parts = obs.text.split(obs.em)
                return (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[11.5px] leading-snug text-[#6a7385]"
                  >
                    <span className="mt-0.5 shrink-0 text-[10px] text-[#0000ee]">→</span>
                    <span>
                      {parts[0]}
                      <span className="font-medium text-[#1a1d2e]">{obs.em}</span>
                      {parts[1]}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="min-w-0 px-5 py-3">
            <div className="grid grid-cols-[1fr_80px_80px_100px] gap-2 border-b border-[#eaecf2] pb-1.5 font-mono text-[9px] font-semibold uppercase tracking-wide text-[#9ba3b5]">
              <div className="min-w-0">Resource</div>
              <div className="text-right">Tokens / Req</div>
              <div className="text-right">$/Month</div>
              <div className="text-right">Savings Opp.</div>
            </div>
            {resourceRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_80px_80px_100px] items-center gap-2 border-b border-[#f2f4f8] py-1.5 last:border-b-0"
              >
                <div className="flex min-w-0 items-center gap-1.5 text-[11.5px] text-[#2a2d3e]">
                  <span
                    className={`shrink-0 rounded px-1 py-0.5 font-mono text-[9px] font-medium ${row.tagClass}`}
                  >
                    {row.tag}
                  </span>
                  <span className="truncate">{row.name}</span>
                </div>
                <div className="font-mono text-[11px] text-[#9ba3b5] text-right">{row.tokens}</div>
                <div className="font-mono text-[11px] font-medium text-[#1a1d2e] text-right">
                  {row.cost}
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-0.5 rounded bg-[#10b964]/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#10b964]">
                    {row.saving}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const sidebarOverview = [
  { label: "AI Infrastructure", active: true, badge: "12" },
  { label: "Compute", active: false },
  { label: "Data Platforms", active: false },
  { label: "Storage", active: false },
  { label: "Networking", active: false },
] as const

const sidebarDetections = [
  { label: "DeepWaste™", badge: "47", badgeRed: true },
  { label: "Remediation", active: false },
  { label: "Commitments", active: false },
] as const

const observations = [
  { text: "Claude Opus accounts for 68% of token spend — output tokens 4× more expensive than input; consider prompt caching for repeated context.", em: "Claude Opus" },
  { text: "SageMaker endpoint ml.g5.2xlarge utilization averaged 12% over 14 days. Recommend switching to on-demand or serverless inference.", em: "ml.g5.2xlarge" },
  { text: "Spend spike detected Feb 1–3 correlates with batch inference job; no auto-scaling policy configured. Estimated waste: $340/mo.", em: "$340/mo" },
] as const

const resourceRows = [
  { tag: "AWS", tagClass: "bg-[#ff9900]/10 text-[#c77800]", name: "Claude Opus 4 · Bedrock", tokens: "1.2M / mo", cost: "$2,534", saving: "↓ $680/mo" },
  { tag: "AWS", tagClass: "bg-[#ff9900]/10 text-[#c77800]", name: "SageMaker · g5.2xlarge", tokens: "—", cost: "$1,517", saving: "↓ $940/mo" },
  { tag: "Azure", tagClass: "bg-[#0078d7]/10 text-[#0078d7]", name: "OpenAI · GPT-4o", tokens: "820K / mo", cost: "$1,290", saving: "↓ $310/mo" },
  { tag: "Data", tagClass: "bg-[#29b6f6]/10 text-[#0090c7]", name: "Databricks · ML Runtime", tokens: "—", cost: "$1,501", saving: "↓ $210/mo" },
] as const

function BarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const weeks = 28
  const inputD = useRef<number[]>([])
  const outputD = useRef<number[]>([])
  const cacheD = useRef<number[]>([])

  const draw = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const wrap = canvas.parentElement
    if (!ctx || !wrap || wrap.clientWidth <= 0) return

    if (inputD.current.length === 0) {
      for (let i = 0; i < weeks; i++) {
        const growth = 1 + (i / weeks) * 1.4
        const spike = i >= 11 && i <= 13 ? 1.8 : 1
        const base = 8 + Math.random() * 4
        inputD.current.push(base * growth * spike)
        outputD.current.push((base * 0.6 + Math.random() * 2) * growth * spike)
        cacheD.current.push((base * 0.2 + Math.random() * 1) * growth * spike)
      }
    }

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1
    const w = wrap.clientWidth
    const h = 110
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    ctx.scale(dpr, dpr)

    const padL = 28
    const padR = 8
    const padT = 6
    const padB = 18
    const chartW = w - padL - padR
    const chartH = h - padT - padB
    const barW = Math.max(2, chartW / weeks - 2)
    const maxVal =
      Math.max(
        ...Array.from(
          { length: weeks },
          (_, i) => inputD.current[i] + outputD.current[i] + cacheD.current[i]
        )
      ) * 1.1

    ctx.clearRect(0, 0, w, h)
    ctx.strokeStyle = "#eaecf2"
    ctx.lineWidth = 1
    for (let g = 0; g <= 3; g++) {
      const y = padT + chartH - (g / 3) * chartH
      ctx.beginPath()
      ctx.moveTo(padL, y)
      ctx.lineTo(padL + chartW, y)
      ctx.stroke()
    }
    for (let i = 0; i < weeks; i++) {
      const x = padL + (i / weeks) * chartW + (chartW / weeks - barW) / 2
      const inputH = (inputD.current[i] / maxVal) * chartH
      const outputH = (outputD.current[i] / maxVal) * chartH
      const cacheH = (cacheD.current[i] / maxVal) * chartH
      let curY = padT + chartH
      ctx.fillStyle = "#e2e6ed"
      ctx.fillRect(x, curY - cacheH, barW, cacheH)
      curY -= cacheH
      ctx.fillStyle = "#0000ee"
      ctx.globalAlpha = 0.7
      ctx.fillRect(x, curY - inputH, barW, inputH)
      ctx.globalAlpha = 1
      curY -= inputH
      ctx.fillStyle = "#10b964"
      ctx.globalAlpha = 0.85
      ctx.fillRect(x, curY - outputH, barW, outputH)
      ctx.globalAlpha = 1
    }
    ctx.fillStyle = "#9ba3b5"
    ctx.font = "9px ui-monospace, monospace"
    ctx.textAlign = "right"
    ;["$0", "$50", "$100", "$150"].forEach((l, g) => {
      const y = padT + chartH - (g / 3) * chartH
      ctx.fillText(l, padL - 3, y + 3)
    })
  }

  useEffect(() => {
    draw()
    const wrap = canvasRef.current?.parentElement
    if (!wrap) return
    const ro = new ResizeObserver(draw)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="relative h-[110px] w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

export function ProductHeroUi() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A1A]">
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(0,0,238,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative">
        <SiteHeader dark />

        <div className="mx-auto max-w-[1200px] px-4 pb-20 pt-12 md:px-6 md:pb-24 md:pt-16">
          {/* Optional short headline above window */}
          <p className="mb-6 text-center font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            See the platform in action
          </p>

          <div className="mx-auto w-full max-w-[900px]">
            <ProductDashboardWindow />
          </div>

          <p className="mt-6 text-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0000EE] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
            >
              Book a Demo
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
