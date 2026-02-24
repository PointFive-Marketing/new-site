const PARTNERS = [
  {
    name: "Deloitte",
    logo: "https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/684fbae1aed14c27e2b75a43_deloitte.png",
  },
  {
    name: "Capgemini",
    logo: "https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/684fbae14d2f2cdc7b5e6f3a_capgemini.png",
  },
  {
    name: "Accenture",
    logo: "https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/684fbae1f2de9d4b9e4d82b1_accenture.png",
  },
  {
    name: "Presidio",
    logo: "https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44/684fbae1a2b9e68c77ba33d1_presidio.png",
  },
]

export function PartnerLogos() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0A0A1A] py-16">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#B4B4D0]/60">
          Trusted By Leading Partners
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 w-auto opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
