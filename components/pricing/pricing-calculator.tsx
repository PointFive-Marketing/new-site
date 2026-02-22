"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

const TIERS = [
  {
    id: 0,
    name: "Starter",
    desc: "For teams with up to $2M in annual cloud spend",
    maxSpend: 2_000_000,
    fee: 40_000,
  },
  {
    id: 1,
    name: "Growth",
    desc: "For teams with up to $5M in annual cloud spend",
    maxSpend: 5_000_000,
    fee: 85_000,
  },
  {
    id: 2,
    name: "Scale",
    desc: "For teams with up to $15M in annual cloud spend",
    maxSpend: 15_000_000,
    fee: 150_000,
  },
  {
    id: 3,
    name: "Enterprise",
    desc: "For teams with up to $50M in annual cloud spend",
    maxSpend: 50_000_000,
    fee: 300_000,
  },
  {
    id: 4,
    name: "Strategic",
    desc: "Custom pricing for $50M+ in annual cloud spend",
    maxSpend: Infinity,
    fee: null as number | null,
  },
] as const

function getTier(spend: number) {
  return TIERS.find((t) => spend <= t.maxSpend) ?? TIERS[TIERS.length - 1]
}

// Logarithmic scale: 0 → $500K, 100 → $75M+
function sliderToSpend(val: number) {
  const min = Math.log(500_000)
  const max = Math.log(75_000_000)
  return Math.round(Math.exp(min + (val / 100) * (max - min)))
}

function formatSpend(n: number) {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K"
  return n.toLocaleString()
}

function formatDollar(n: number) {
  if (n >= 1_000_000)
    return "$" + (n / 1_000_000).toFixed(2).replace(/\.?0+$/, "") + "M"
  return "$" + Math.round(n).toLocaleString()
}

function useAnimatedValue(target: number, format: (v: number) => string) {
  const [display, setDisplay] = useState(() => format(target))
  const fromRef = useRef(target)
  const formatRef = useRef(format)
  formatRef.current = format
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const from = fromRef.current
    const t0 = performance.now()
    const dur = 400
    function tick(now: number) {
      const p = Math.min((now - t0) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      const current = Math.round(from + (target - from) * ease)
      setDisplay(formatRef.current(current))
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
      else fromRef.current = target
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [target])
  return display
}

const DEMO_URL = "https://www.pointfive.co/request-demo"

export function PricingCalculator() {
  const [sliderValue, setSliderValue] = useState(30) // 0–100, ~$2M at 30
  const spend = sliderToSpend(sliderValue)
  const tier = getTier(spend)
  const savings = Math.round(spend * 0.3)
  const isStrategic = tier.fee === null
  const fee = isStrategic ? Math.round(spend * 0.015) : tier.fee
  const net = savings - fee
  const roi = fee > 0 ? Math.round(((savings - fee) / fee) * 100) : 0
  const returnPerDollar = fee > 0 ? Math.round(savings / fee) : 0

  const wasteSavingsDisplay = useAnimatedValue(savings, formatDollar)
  const platformFeeDisplay = useAnimatedValue(fee, (v) => "−" + formatDollar(v))
  const netPositionDisplay = useAnimatedValue(net, formatDollar)

  return (
    <div className="mx-auto max-w-[900px] px-6 py-14 pb-20 md:py-16">
      {/* Slider card */}
      <div className="mb-7 rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10 md:pb-11">
        <div className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-neutral-500">
          Annual Cloud Spend
        </div>
        <div className="mb-8 flex items-baseline gap-1.5">
          <span className="text-2xl font-light text-neutral-500 md:text-3xl">
            $
          </span>
          <span
            className="font-mono text-5xl font-medium tracking-tight text-foreground transition-[font-size] md:text-6xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            {formatSpend(spend)}
          </span>
          <span className="text-lg font-light text-neutral-500">/ year</span>
        </div>

        <div className="mb-4">
          <Slider
            min={0}
            max={100}
            step={1}
            value={[sliderValue]}
            onValueChange={([v]) => setSliderValue(v)}
            className="[&_[data-slot=slider-track]]:h-1.5 [&_[data-slot=slider-track]]:bg-border [&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:h-7 [&_[data-slot=slider-thumb]]:w-7 [&_[data-slot=slider-thumb]]:border-[3px] [&_[data-slot=slider-thumb]]:border-white [&_[data-slot=slider-thumb]]:bg-primary [&_[data-slot=slider-thumb]]:shadow-[0_2px_8px_rgba(0,0,238,0.4)]"
          />
        </div>
        <div className="flex justify-between text-[11px] text-neutral-500">
          <span>$500K</span>
          <span>$2M</span>
          <span>$5M</span>
          <span>$15M</span>
          <span>$50M+</span>
        </div>

        {/* Tier indicator */}
        <div className="mt-7 border-t border-border pt-6">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
            Your pricing tier
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {TIERS.map((t) => (
              <div
                key={t.id}
                className={cn(
                  "rounded-lg border-2 px-2 py-2.5 text-center transition-colors",
                  t.id === tier.id
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card"
                )}
              >
                <div
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-wider",
                    t.id === tier.id ? "text-primary" : "text-neutral-500"
                  )}
                >
                  {t.name}
                </div>
                <div
                  className={cn(
                    "mt-0.5 text-[10px]",
                    t.id === tier.id ? "text-primary" : "text-neutral-500/70"
                  )}
                >
                  {t.maxSpend === Infinity ? "$50M+" : `Up to $${(t.maxSpend / 1_000_000).toFixed(0)}M`}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3.5 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 px-5 py-3.5">
            <div>
              <div className="text-[15px] font-semibold text-primary">
                {tier.name}
              </div>
              <div className="mt-0.5 text-xs text-neutral-500">
                {tier.desc}
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-lg font-medium text-foreground">
                {isStrategic ? "Contact us" : formatDollar(tier.fee!)}
              </div>
              <div className="text-[11px] text-neutral-500">per year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice card */}
      <div className="mb-7 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex justify-between border-b border-border bg-foreground px-6 py-4 md:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
            Your efficiency statement
          </span>
          <span className="text-[11px] text-white/35">
            Conservative estimates · Based on avg. customer results
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border px-6 py-4 md:px-8">
          <div>
            <div className="text-[15px] font-medium text-foreground">
              Cloud waste eliminated
            </div>
            <div className="mt-0.5 text-xs text-neutral-500">
              Compute, Kubernetes, storage, data platforms — conservative 30%
              waste reduction
            </div>
          </div>
          <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
            +Savings
          </span>
          <span className="font-mono text-[17px] font-medium text-accent tabular-nums text-right">
            {wasteSavingsDisplay}
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border px-6 py-4 md:px-8">
          <div>
            <div className="text-[15px] font-medium text-foreground">
              Engineering productivity gains
            </div>
            <div className="mt-0.5 text-xs text-neutral-500">
              Faster remediation, reduced toil, 1-click fixes — hours recovered
              per engineer per week
            </div>
          </div>
          <span className="rounded bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
            Included
          </span>
          <span className="font-mono text-[17px] font-medium tabular-nums text-right text-neutral-500">
            Varies
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border px-6 py-4 md:px-8">
          <div>
            <div className="text-[15px] font-medium text-foreground">
              Carbon & sustainability savings
            </div>
            <div className="mt-0.5 text-xs text-neutral-500">
              Reduced compute = reduced energy consumption and CO₂ emissions
            </div>
          </div>
          <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-muted">
            Included
          </span>
          <span className="font-mono text-[17px] font-medium tabular-nums text-right text-accent-muted">
            Included
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border px-6 py-4 md:px-8">
          <div>
            <div className="text-[15px] font-medium text-foreground">
              Estimated PointFive cost
            </div>
            <div className="mt-0.5 text-xs text-neutral-500">
              Based on your cloud spend · Agentless, read-only · No hidden setup
              costs
            </div>
          </div>
          <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
            Est. Cost
          </span>
          <span className="font-mono text-[17px] font-medium tabular-nums text-right text-neutral-500">
            {platformFeeDisplay}
            {isStrategic ? "*" : ""}
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto_auto] gap-4 bg-neutral-50/80 px-6 py-4 md:px-8">
          <div className="border-t-2 border-border pt-4">
            <div className="text-base font-bold text-foreground">
              Net financial position
            </div>
            <div className="mt-0.5 text-xs text-neutral-500">
              Savings minus PointFive fee · Year 1
            </div>
          </div>
          <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
            Net Gain
          </span>
          <span className="font-mono text-xl font-medium tabular-nums text-right text-accent">
            {netPositionDisplay}
          </span>
        </div>
      </div>

      {/* Net Zero banner */}
      <div className="relative mb-7 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-[#000] to-[#111] px-8 py-8 md:px-9 md:py-8">
        <div
          className="pointer-events-none absolute -top-12 -right-12 h-[200px] w-[200px] rounded-full opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,238,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              Net Zero Guarantee
            </div>
            <div className="mt-2 text-2xl font-normal text-white">
              PointFive pays for itself
            </div>
            <div className="mt-1.5 text-[13px] leading-relaxed text-white/50">
              If we don&apos;t identify savings that exceed our fee within 30
              days, you pay nothing. The math below shows why this is a safe
              bet.
            </div>
            <Link
              href="/net-zero"
              className="mt-4 inline-block text-[13px] font-medium text-primary transition-colors hover:text-primary-tint"
            >
              See our Net Zero campaign →
            </Link>
          </div>
          <div className="shrink-0 text-right md:text-right">
            <div className="font-mono text-4xl font-medium leading-none text-accent transition-all md:text-[42px]">
              {roi.toLocaleString()}%
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-wider text-white/40">
              Average customer ROI
            </div>
          </div>
        </div>
      </div>

      {/* ROI grid */}
      <div className="mb-7 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-primary bg-primary/5 p-5 text-center">
          <div className="font-mono text-3xl font-medium text-primary">
            {roi.toLocaleString()}%
          </div>
          <div className="mt-1.5 text-xs text-neutral-500">
            Your estimated ROI
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
          <div className="font-mono text-3xl font-medium text-foreground">
            &lt;30 days
          </div>
          <div className="mt-1.5 text-xs text-neutral-500">
            Time to payback
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
          <div className="font-mono text-3xl font-medium text-foreground">
            {returnPerDollar}×
          </div>
          <div className="mt-1.5 text-xs text-neutral-500">
            Return for every $1 spent
          </div>
        </div>
      </div>

      {/* Assumptions */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-6 rounded-xl border border-border bg-card px-6 py-5">
        <div className="flex items-center gap-2 text-[13px] text-neutral-500">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>
            Savings rate: <strong className="text-foreground">30%</strong>{" "}
            (conservative)
          </span>
        </div>
        <div className="flex items-center gap-2 text-[13px] text-neutral-500">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>
            Cost scales with <strong className="text-foreground">your cloud spend</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 text-[13px] text-neutral-500">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>
            Avg. customer ROI: <strong className="text-foreground">1,200%+</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 text-[13px] text-neutral-500">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>Agentless · Read-only · No write access</span>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <h2 className="text-2xl font-normal text-foreground md:text-[28px]">
          Ready to see your actual numbers?
        </h2>
        <p className="mt-2 text-[15px] text-neutral-500">
          Our team runs a free infrastructure scan — no agents, no commitments.
        </p>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-lg bg-primary px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
        >
          Get My Free Assessment →
        </a>
        <p className="mt-3 text-xs text-neutral-500">
          Average time to full ROI: 10 days · Based on Nubank and other
          enterprise customers
        </p>
      </div>
    </div>
  )
}
