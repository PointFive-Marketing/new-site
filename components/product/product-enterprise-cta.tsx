import { ArrowRight } from "lucide-react"
import { productImages } from "@/lib/product-images"

const DEMO_URL = "https://www.pointfive.co/request-demo"
const CONTACT_URL = "https://www.pointfive.co/contact"

export function ProductEnterpriseCta() {
  return (
    <>
      {/* Enterprise Ready */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2
                className="text-foreground"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  fontWeight: 700,
                }}
              >
                Enterprise-Ready
              </h2>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-neutral-600">
                PointFive&apos;s scalable, secure, and customizable solution is
                extensible via API and designed to monitor, manage, and maintain
                an organization&apos;s footprint across cloud platforms. Our
                system delivers robust performance and reliability and has been
                rigorously tested by the world&apos;s largest cloud consumers.
              </p>
            </div>
            <div className="shrink-0">
              <div className="overflow-hidden rounded-sm border border-border bg-muted/50 p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={productImages.enterpriseReady}
                  alt="We're Enterprise-Ready"
                  className="h-auto w-full max-w-[320px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0A0A1A]">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,0,238,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 py-16 text-center sm:px-6 md:py-28">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Starting point
          </p>
          <h2
            className="mx-auto mt-3 max-w-3xl text-balance text-white"
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              fontWeight: 700,
            }}
          >
            Discover deeper cloud efficiency with PointFive.
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5 sm:w-auto sm:px-8"
            >
              Let&apos;s Chat
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0000EE] px-6 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25 sm:w-auto sm:px-8"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
