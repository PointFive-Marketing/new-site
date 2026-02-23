"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

type CropFocus = "right" | "center" | "left" | "full"

interface ProductScreenshotProps {
  /** Path to the screenshot image */
  src: string
  /** Alt text for accessibility */
  alt: string
  /** Short label displayed below or overlaid on the image */
  label?: string
  /** Optional description below the label */
  description?: string
  /** Which portion of the image to focus on (right = sidebar area) */
  cropFocus?: CropFocus
  /** Fixed height of the cropped preview area */
  previewHeight?: number
  /** Whether to use dark theme styling (for dark background sections) */
  dark?: boolean
  /** Additional class for the wrapper */
  className?: string
}

/**
 * ProductScreenshot — shows a cropped/focused preview of a product screenshot
 * with a magnifying glass overlay. Clicking opens a full-size lightbox.
 *
 * Most product screenshots show the same dashboard + sidebar layout.
 * Using cropFocus="right" shows only the sidebar content that is unique and relevant.
 */
export function ProductScreenshot({
  src,
  alt,
  label,
  description,
  cropFocus = "right",
  previewHeight = 360,
  dark = false,
  className = "",
}: ProductScreenshotProps) {
  const [open, setOpen] = useState(false)

  // CSS object-position values for cropping
  const objectPositionMap: Record<CropFocus, string> = {
    right: "right center",
    center: "center center",
    left: "left center",
    full: "center center",
  }

  const isCropped = cropFocus !== "full"

  return (
    <>
      <div className={`group ${className}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`relative w-full overflow-hidden rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            dark
              ? "border border-white/10 shadow-lg hover:border-white/20 focus:ring-[#0000EE] focus:ring-offset-[#0A0A1A]"
              : "border border-border shadow-lg hover:shadow-xl focus:ring-primary focus:ring-offset-background"
          }`}
          aria-label={`View full screenshot: ${alt}`}
          style={{ height: previewHeight }}
        >
          {/* Cropped image preview */}
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover ${isCropped ? "scale-[1.15]" : ""}`}
            style={{ objectPosition: objectPositionMap[cropFocus] }}
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Gradient overlay for better legibility */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              dark
                ? "bg-gradient-to-t from-[#0A0A1A]/60 via-transparent to-transparent group-hover:opacity-40"
                : "bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:opacity-40"
            }`}
          />

          {/* Magnifying glass icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-110 ${
                dark
                  ? "bg-white/90 text-[#0A0A1A]"
                  : "bg-white/95 text-neutral-800"
              }`}
            >
              <Search className="h-5 w-5" aria-hidden />
            </span>
          </div>

          {/* Label overlay at bottom */}
          {label && (
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8">
              <p
                className={`text-sm font-semibold ${
                  dark ? "text-white" : "text-white"
                }`}
              >
                {label}
              </p>
              {description && (
                <p className="mt-0.5 text-xs text-white/70">{description}</p>
              )}
            </div>
          )}
        </button>
      </div>

      {/* Lightbox modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-h-[90vh] max-w-[95vw] overflow-auto rounded-lg bg-white p-0 sm:max-w-[1100px]"
          showCloseButton={true}
        >
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <div className="p-2">
            <Image
              src={src}
              alt={alt}
              width={1440}
              height={900}
              className="w-full rounded"
              quality={95}
            />
          </div>
          {label && (
            <div className="border-t border-border px-6 py-4">
              <p className="text-sm font-semibold text-foreground">{label}</p>
              {description && (
                <p className="mt-1 text-xs text-neutral-500">{description}</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
