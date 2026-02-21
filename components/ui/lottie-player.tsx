"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"

interface LottiePlayerProps {
  src: string
  alt?: string
  className?: string
  loop?: boolean
}

/**
 * Loads and plays a Lottie animation from a JSON URL.
 * Use for assets that are Lottie JSON (e.g. from pointfive.co product page).
 */
export function LottiePlayer({
  src,
  alt = "",
  className = "",
  loop = true,
}: LottiePlayerProps) {
  const [data, setData] = useState<object | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load Lottie")
        return res.json()
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [src])

  if (error) {
    return (
      <div
        className={`flex min-h-[200px] items-center justify-center rounded-sm border border-white/10 bg-white/5 text-[#B4B4D0] ${className}`}
        role="img"
        aria-label={alt || "Animation"}
      >
        <span className="text-sm">Animation unavailable</span>
      </div>
    )
  }

  if (!data) {
    return (
      <div
        className={`flex min-h-[200px] items-center justify-center rounded-sm border border-white/10 bg-white/5 ${className}`}
        aria-label={alt || "Loading animation"}
      >
        <div className="h-8 w-8 animate-pulse rounded-full bg-white/10" />
      </div>
    )
  }

  return (
    <div className={className} role="img" aria-label={alt || undefined}>
      <Lottie animationData={data} loop={loop} className="h-full w-full" />
    </div>
  )
}
