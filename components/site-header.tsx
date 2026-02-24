"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  Layers,
  Search,
  Brain,
  Bot,
  Cpu,
  FileText,
  BarChart3,
  Megaphone,
  Rocket,
  BookOpen,
  GraduationCap,
  Building2,
  Users,
  Mail,
  Handshake,
  type LucideIcon,
} from "lucide-react"
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

const DEMO_URL = "/request-demo"
const BASE = "https://www.pointfive.co"

interface NavItem {
  label: string
  href: string
  internal?: boolean
  icon?: LucideIcon
  description?: string
}

interface NavColumn {
  title: string
  links: NavItem[]
  subgroups?: { title: string; links: NavItem[] }[]
}

const PRODUCT_COLUMNS: NavColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Product Overview", href: "/product", internal: true, icon: Layers, description: "End-to-end cloud optimization platform" },
      { label: "DeepWaste Detection", href: "/deepwaste", internal: true, icon: Search, description: "Cyber-inspired waste identification" },
    ],
    subgroups: [
      {
        title: "AI",
        links: [
          { label: "AI in Product", href: "/ai", internal: true, icon: Brain, description: "AI-powered recommendations" },
          { label: "AI Co-Workers", href: "/ai-coworkers", internal: true, icon: Bot, description: "Autonomous optimization agents" },
          { label: "AI Cost Optimization", href: "/ai-cost-optimization", internal: true, icon: Cpu, description: "Reduce AI/ML infrastructure costs" },
        ],
      },
    ],
  },
]

const RESOURCES_LINKS: NavItem[] = [
  { label: "Blog", href: "/blog", internal: true, icon: FileText, description: "Insights on FinOps and cloud efficiency" },
  { label: "Case Studies", href: "/case-studies", internal: true, icon: BarChart3, description: "Real customer optimization stories" },
  { label: "Press Releases", href: "/press", internal: true, icon: Megaphone, description: "Company announcements" },
  { label: "Product Releases", href: "/product-releases", internal: true, icon: Rocket, description: "Latest platform updates" },
  { label: "Whitepapers", href: "/whitepapers", internal: true, icon: BookOpen, description: "In-depth technical guides" },
  { label: "Learning", href: "/learning", internal: true, icon: GraduationCap, description: "Cloud optimization fundamentals" },
]

const COMPANY_LINKS: NavItem[] = [
  { label: "About Us", href: "/about", internal: true, icon: Building2, description: "Our mission and team" },
  { label: "Careers", href: "/careers", internal: true, icon: Users, description: "Join the PointFive team" },
  { label: "Contact Us", href: "/contact", internal: true, icon: Mail, description: "Get in touch" },
  { label: "Partners", href: "/partners", internal: true, icon: Handshake, description: "Partner with PointFive" },
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
        className={dark ? "h-5 w-auto brightness-0 invert" : "h-5 w-auto"}
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

function MegaLink({ item }: { item: NavItem }) {
  const Icon = item.icon
  const content = (
    <div className="flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.06] group/link">
      {Icon && (
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-[#7eb8ff] transition-colors group-hover/link:bg-white/[0.1] group-hover/link:text-white">
          <Icon className="h-[18px] w-[18px]" />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-[14px] font-medium text-[#E0E0F0] transition-colors group-hover/link:text-white">
          {item.label}
        </p>
        {item.description && (
          <p className="mt-0.5 text-[12px] leading-relaxed text-[#8888A8] transition-colors group-hover/link:text-[#B4B4D0]">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )

  if (item.internal) {
    return <Link href={item.href}>{content}</Link>
  }
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

function MobileMegaLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const Icon = item.icon
  const content = (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] text-[#B4B4D0] hover:bg-white/5 hover:text-white">
      {Icon && <Icon className="h-4 w-4 shrink-0 text-[#7eb8ff]" />}
      <span>{item.label}</span>
    </div>
  )

  if (item.internal) {
    return <Link href={item.href} onClick={onClick}>{content}</Link>
  }
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {content}
    </a>
  )
}

function MegaMenuTrigger({
  label,
  linkClass,
  open,
  onOpenChange,
  width,
  children,
}: {
  label: string
  linkClass: string
  open: boolean
  onOpenChange: (open: boolean) => void
  width?: string
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
        className={`${width || "w-[min(480px,calc(100vw-2rem))]"} ${MEGA_PANEL_CLASS}`}
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
        <PointFiveLogo dark={dark} className="h-5 w-auto" />

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
            <div className="flex flex-col gap-1">
              {PRODUCT_COLUMNS.map((col) => (
                <div key={col.title}>
                  <p className="mb-1 px-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#00E639]">
                    {col.title}
                  </p>
                  {col.links.map((item) => (
                    <MegaLink key={item.label} item={item} />
                  ))}
                  {col.subgroups?.map((sub) => (
                    <div key={sub.title} className="mt-3">
                      <p className="mb-1 px-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#B4B4D0]/50">
                        {sub.title}
                      </p>
                      {sub.links.map((item) => (
                        <MegaLink key={item.label} item={item} />
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </MegaMenuTrigger>

          <MegaMenuTrigger
            label="Resources"
            linkClass={linkClass}
            open={resourcesOpen}
            width="w-[min(560px,calc(100vw-2rem))]"
            onOpenChange={(open) => {
              setResourcesOpen(open)
              if (open) { setProductOpen(false); setCompanyOpen(false) }
            }}
          >
            <div className="grid gap-1 sm:grid-cols-2">
              {RESOURCES_LINKS.map((item) => (
                <MegaLink key={item.label} item={item} />
              ))}
            </div>
          </MegaMenuTrigger>

          <MegaMenuTrigger
            label="Company"
            linkClass={linkClass}
            open={companyOpen}
            width="w-[min(480px,calc(100vw-2rem))]"
            onOpenChange={(open) => {
              setCompanyOpen(open)
              if (open) { setProductOpen(false); setResourcesOpen(false) }
            }}
          >
            <div className="grid gap-1 sm:grid-cols-2">
              {COMPANY_LINKS.map((item) => (
                <MegaLink key={item.label} item={item} />
              ))}
            </div>
          </MegaMenuTrigger>

        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <NavLink
            href={`${BASE}/login`}
            className={`hidden sm:block ${linkClass}`}
          >
            Log in
          </NavLink>
          <Link
            href={DEMO_URL}
            className="rounded-full bg-[#0000EE] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25 sm:px-5"
          >
            Book a Demo
          </Link>

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
                  {PRODUCT_COLUMNS.flatMap((col) => [
                    ...col.links,
                    ...(col.subgroups ? col.subgroups.flatMap((sub) => sub.links) : []),
                  ]).map((item) => (
                    <MobileMegaLink key={item.label} item={item} onClick={() => setMobileOpen(false)} />
                  ))}

                  <p className="mb-1 mt-4 px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#00E639]">
                    Resources
                  </p>
                  {RESOURCES_LINKS.map((item) => (
                    <MobileMegaLink key={item.label} item={item} onClick={() => setMobileOpen(false)} />
                  ))}

                  <p className="mb-1 mt-4 px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#00E639]">
                    Company
                  </p>
                  {COMPANY_LINKS.map((item) => (
                    <MobileMegaLink key={item.label} item={item} onClick={() => setMobileOpen(false)} />
                  ))}

                  <p className="mb-1 mt-4 px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#00E639]">
                    More
                  </p>
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
                    <Link
                      href={DEMO_URL}
                      className="mx-2 mt-3 block rounded-full bg-[#0000EE] py-3 text-center text-sm font-semibold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Book a Demo
                    </Link>
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
