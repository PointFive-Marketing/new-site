const RESOURCES = [
  { label: "Latest", href: "https://www.pointfive.co/resources" },
  { label: "Blog", href: "https://www.pointfive.co/blog" },
  { label: "Videos", href: "https://www.pointfive.co/resources#videos" },
  { label: "Whitepapers", href: "https://www.pointfive.co/resources#whitepapers" },
  { label: "Case Studies", href: "https://www.pointfive.co/resources#case-studies" },
  { label: "Solution Briefs", href: "https://www.pointfive.co/resources#solution-briefs" },
  { label: "Newsletters", href: "https://www.pointfive.co/resources#newsletters" },
  { label: "Press Release", href: "https://www.pointfive.co/resources#press" },
  { label: "Knowledge Base", href: "https://www.pointfive.co/knowledge-base" },
]

const PRODUCT = [
  { label: "Product Overview", href: "https://www.pointfive.co/product" },
  { label: "Feature Releases", href: "https://www.pointfive.co/product#releases" },
]

const COMPANY = [
  { label: "About Us", href: "https://www.pointfive.co/about" },
  { label: "Contact Us", href: "https://www.pointfive.co/contact" },
  { label: "Careers", href: "https://www.pointfive.co/careers" },
  { label: "News", href: "https://www.pointfive.co/news" },
]

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-neutral-500 transition-colors hover:text-foreground"
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
  links: Array<{ label: string; href: string }>
}) {
  return (
    <div>
      <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-3">
        {title}
      </p>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-14">
        {/* Top: logo + primary nav */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <img
            src="https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/6661db9d841412af863235a4_Logo.svg"
            alt="PointFive"
            className="h-5 w-auto"
            width={100}
            height={20}
          />
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title="Product" links={PRODUCT} />
            <FooterColumn title="Resources" links={RESOURCES} />
            <FooterColumn title="Company" links={COMPANY} />
          </nav>
        </div>

        {/* Bottom: copyright + legal */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono text-xs text-neutral-500">
            © {new Date().getFullYear()} PointFive, Inc.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <FooterLink href="https://www.pointfive.co/privacy">Privacy Policy</FooterLink>
            <FooterLink href="https://www.pointfive.co/terms">Terms & Conditions</FooterLink>
            <FooterLink href="https://www.pointfive.co/cookies">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
