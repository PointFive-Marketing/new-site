import Image from "next/image"

interface Badge {
  src: string
  alt: string
  width: number
  height: number
}

const badges: Badge[] = [
  {
    src: "/about/badges/aws-marketplace.svg",
    alt: "AWS Marketplace",
    width: 120,
    height: 48,
  },
  {
    src: "/about/badges/aws-partner-isv.avif",
    alt: "AWS Partner Network ISV",
    width: 120,
    height: 48,
  },
  {
    src: "/about/badges/finops-premier.avif",
    alt: "FinOps Foundation Premier Member",
    width: 100,
    height: 48,
  },
  {
    src: "/about/badges/finops-certified.avif",
    alt: "FinOps Certified Platform",
    width: 80,
    height: 48,
  },
  {
    src: "/about/badges/soc2.avif",
    alt: "SOC 2 Compliant",
    width: 60,
    height: 48,
  },
  {
    src: "/about/badges/iso27001.avif",
    alt: "ISO 27001 Certified",
    width: 60,
    height: 48,
  },
  {
    src: "/about/badges/gdpr.svg",
    alt: "GDPR Compliant",
    width: 60,
    height: 48,
  },
]

export function AboutTrust() {
  return (
    <section className="border-t border-border bg-neutral-50/50 py-14 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400">
          Trusted &amp; Certified
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge) => (
            <div key={badge.alt} className="flex items-center opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              <Image
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className="h-10 w-auto object-contain md:h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
