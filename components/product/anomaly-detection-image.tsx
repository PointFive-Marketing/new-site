"use client"

import { productImages } from "@/lib/product-images"

/**
 * Anomaly Detection block image. Uses Detailed Cost and Usage Analysis SVG
 * (the proactive detection asset uses Lottie-style clip-path refs that don't
 * render when loaded as img src).
 */
export function AnomalyDetectionImage() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={productImages.detailedCostAnalysis}
      alt="Proactive detection and root-cause analysis"
      className="h-auto w-full object-contain"
    />
  )
}
