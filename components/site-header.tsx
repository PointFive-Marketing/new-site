"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const DEMO_URL = "https://www.pointfive.co/request-demo"
const BASE = "https://www.pointfive.co"

// Product: internal /product page; external links for others
const PRODUCT_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Product Overview", href: "/product", internal: true },
      { label: "DeepWaste Detection", href: "/deepwaste", internal: true },
      { label: "AI Engine", href: "/ai", internal: true },
      { label: "AI Co-Workers", href: "/ai-coworkers", internal: true },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "48-Hour Guarantee", href: "/guarantee", internal: true },
      { label: "Net Zero Cloud Costs", href: "/net-zero", internal: true },
      { label: "Pricing", href: "/pricing", internal: true },
    ],
  },
]

const RESOURCES_LINKS = [
  { label: "Blog", href: "/blog", internal: true },
  { label: "Case Studies", href: "/case-studies", internal: true },
  { label: "Press Releases", href: "/press", internal: true },
  { label: "Videos", href: `${BASE}/resources#videos` },
  { label: "Knowledge Base", href: `${BASE}/knowledge-base` },
]

const COMPANY_LINKS = [
  { label: "About Us", href: "/about", internal: true },
  { label: "Careers", href: "/careers", internal: true },
  { label: "Contact Us", href: "/contact", internal: true },
]

const MEGA_PANEL_CLASS =
  "border-white/10 bg-[#0E0E22] shadow-xl rounded-lg p-6 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1 z-50 outline-none"

function PointFiveLogo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={className}>
      <img
        src="https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/6661db9d841412af863235a4_Logo.svg"
        alt="PointFive"
        width={140}
        height={32}
        className={dark ? "h-7 w-auto brightness-0 invert" : "h-7 w-auto"}
      />
    </Link>
  )
}

function NavLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

function MegaLink({ href, children, internal }: { href: string; children: React.ReactNode; internal?: boolean }) {
  if (internal) {
    return (
      <Link
        href={href}
        className="block rounded-md px-2 py-2 text-[15px] text-[#B4B4D0] transition-colors hover:bg-white/10 hover:text-white"
      >
        {children}
      </Link>
    )
  }
  return (
    <NavLink
      href={href}
      className="block rounded-md px-2 py-2 text-[15px] text-[#B4B4D0] transition-colors hover:bg-white/10 hover:text-white"
    >
      {children}
    </NavLink>
  )
}

function MegaMenuTrigger({
  label,
  linkClass,
  open,
  onOpenChange,
  children,
}: {
  label: string
  linkClass: string
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger
        className={`inline-flex items-center gap-1 outline-none ${linkClass}`}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 opacity-70 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={4}
        className={`w-[min(720px,calc(100vw-2rem))] ${MEGA_PANEL_CLASS}`}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {children}
      </PopoverContent>
    </Popover>
  )
}

export function SiteHeader({ dark = true }: { dark?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  const linkClass = dark
    ? "text-[15px] font-medium text-[#B4B4D0] transition-colors hover:text-white"
    : "text-[15px] font-medium text-neutral-600 transition-colors hover:text-foreground"

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A0A1A]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <PointFiveLogo dark={dark} className="h-7 w-auto" />

        {/* Desktop nav with mega menus */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-6">
          <MegaMenuTrigger
            label="Product"
            linkClass={linkClass}
            open={productOpen}
            onOpenChange={(open) => {
              setProductOpen(open)
              if (open) { setResourcesOpen(false); setCompanyOpen(false) }
            }}
          >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCT_COLUMNS.map((col) => (
                <div key={col.title}>
                  <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#00E639]">
                    {col.title}
                  </p>
                  <ul className="flex flex-col gap-0">
                    {col.links.map((item) => (
                      <li key={item.label}>
                        {"internal" in item && item.internal ? (
                          <Link
                            href={item.href}
                            className="block rounded-md px-2 py-2 text-[15px] text-[#B4B4D0] transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <MegaLink href={item.href}>{item.label}</MegaLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </MegaMenuTrigger>

          <MegaMenuTrigger
            label="Resources"
            linkClass={linkClass}
            open={resourcesOpen}
            onOpenChange={(open) => {
              setResourcesOpen(open)
              if (open) { setProductOpen(false); setCompanyOpen(false) }
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {RESOURCES_LINKS.map((item) => (
                <MegaLink key={item.label} href={item.href} internal={"internal" in item && (item as { internal?: boolean }).internal}>
                  {item.label}
                </MegaLink>
              ))}
            </div>
          </MegaMenuTrigger>

          <MegaMenuTrigger
            label="Company"
            linkClass={linkClass}
            open={companyOpen}
            onOpenChange={(open) => {
              setCompanyOpen(open)
              if (open) { setProductOpen(false); setResourcesOpen(false) }
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {COMPANY_LINKS.map((item) => (
                <MegaLink key={item.label} href={item.href} internal={"internal" in item && (item as { internal?: boolean }).internal}>
                  {item.label}
                </MegaLink>
              ))}
            </div>
          </MegaMenuTrigger>

          <Link href="/net-zero" className={linkClass}>
            Net Zero
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <NavLink
            href={`${BASE}/login`}
            className={`hidden sm:block ${linkClass}`}
          >
            Log in
          </NavLink>
          <NavLink
            href={DEMO_URL}
            className="rounded-full bg-[#0000EE] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25 sm:px-5"
          >
            Book a Demo
          </NavLink>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#B4B4D0] hover:bg-white/10 hover:text-white md:hidden"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-[320px] border-white/10 bg-[#0A0A1A] p-0 md:hidden"
            >
              <div className="flex h-full flex-col overflow-y-auto">
                <div className="flex items-center justify-between border-b border-white/10 p-4">
                  <PointFiveLogo dark />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="rounded-lg p-2 text-[#B4B4D0] hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="flex flex-col gap-0 p-4">
                  <p className="mb-1 mt-2 px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#00E639]">
                    Product
                  </p>
                  {PRODUCT_COLUMNS.flatMap((col) => col.links).map((item) =>
                    "internal" in item && item.internal ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <NavLink
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    )
                  )}
                  <p className="mb-1 mt-4 px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#00E639]">
                    Resources
                  </p>
                  {RESOURCES_LINKS.map((item) =>
                    "internal" in item && (item as { internal?: boolean }).internal ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <NavLink
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    )
                  )}
                  <p className="mb-1 mt-4 px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#00E639]">
                    Company
                  </p>
                  {COMPANY_LINKS.map((item) =>
                    "internal" in item && (item as { internal?: boolean }).internal ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <NavLink
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    )
                  )}
                  <p className="mb-1 mt-4 px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#00E639]">
                    More
                  </p>
                  <Link
                    href="/pricing"
                    className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/guarantee"
                    className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    48-Hour Guarantee
                  </Link>
                  <Link
                    href="/net-zero"
                    className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Net Zero Offer
                  </Link>
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <NavLink
                      href={`${BASE}/login`}
                      className="block rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Log in
                    </NavLink>
                    <NavLink
                      href={DEMO_URL}
                      className="mx-2 mt-3 block rounded-full bg-[#0000EE] py-3 text-center text-sm font-semibold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Book a Demo
                    </NavLink>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
