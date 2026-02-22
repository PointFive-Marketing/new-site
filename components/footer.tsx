import Link from "next/link"
import { ArrowRight } from "lucide-react"

const BASE = "https://www.pointfive.co"
const DEMO_URL = "https://www.pointfive.co/request-demo"

const PRODUCT_LINKS = [
  { label: "Product Overview", href: "/product", internal: true },
  { label: "DeepWaste Detection", href: "/deepwaste", internal: true },
  { label: "AI Engine", href: "/ai", internal: true },
  { label: "AI Co-Workers", href: "/ai-coworkers", internal: true },
  { label: "Pricing", href: "/pricing", internal: true },
]

const SOLUTIONS_LINKS = [
  { label: "48-Hour Guarantee", href: "/guarantee", internal: true },
  { label: "Net Zero Cloud Costs", href: "/net-zero", internal: true },
]

const RESOURCES_LINKS = [
  { label: "Blog", href: `${BASE}/blog` },
  { label: "Case Studies", href: `${BASE}/resources#case-studies` },
  { label: "Videos", href: `${BASE}/resources#videos` },
  { label: "Whitepapers", href: `${BASE}/resources#whitepapers` },
  { label: "Knowledge Base", href: `${BASE}/knowledge-base` },
]

const COMPANY_LINKS = [
  { label: "About Us", href: `${BASE}/about` },
  { label: "Careers", href: `${BASE}/careers` },
  { label: "Contact Us", href: `${BASE}/contact` },
  { label: "News", href: `${BASE}/news` },
]

function FooterLink({
  href,
  children,
  internal,
}: {
  href: string
  children: React.ReactNode
  internal?: boolean
}) {
  if (internal) {
    return (
      <Link
        href={href}
        className="text-[14px] text-[#8888A8] transition-colors hover:text-white"
      >
        {children}
      </Link>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[14px] text-[#8888A8] transition-colors hover:text-white"
    >
      {children}
    </a>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: Array<{ label: string; href: string; internal?: boolean }>
}) {
  return (
    <div>
      <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
        {title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href} internal={link.internal}>
              {link.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#060612] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-16">
        {/* Top: logo + CTA row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[320px]">
            <img
              src="https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/6661db9d841412af863235a4_Logo.svg"
              alt="PointFive"
              className="h-6 w-auto brightness-0 invert"
              width={120}
              height={24}
            />
            <p className="mt-4 text-[14px] leading-relaxed text-[#8888A8]">
              The cloud cost optimization platform that finds and fixes waste
              autonomously — so your team doesn&apos;t have to.
            </p>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0000EE] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
            >
              Book a Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Link columns */}
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
            <FooterColumn title="Product" links={PRODUCT_LINKS} />
            <FooterColumn title="Solutions" links={SOLUTIONS_LINKS} />
            <FooterColumn title="Resources" links={RESOURCES_LINKS} />
            <FooterColumn title="Company" links={COMPANY_LINKS} />
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/[0.06]" />

        {/* Bottom: copyright + legal */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-[11px] text-[#555570]">
            © {new Date().getFullYear()} PointFive, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href={`${BASE}/privacy`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#555570] transition-colors hover:text-[#8888A8]"
            >
              Privacy
            </a>
            <a
              href={`${BASE}/terms`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#555570] transition-colors hover:text-[#8888A8]"
            >
              Terms
            </a>
            <a
              href={`${BASE}/cookies`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#555570] transition-colors hover:text-[#8888A8]"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
