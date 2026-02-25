const logoEntries = [
  { name: "Accor", slug: "accor", domain: "accor.com" },
  { name: "The Linux Foundation", slug: "linux-foundation", domain: "linuxfoundation.org" },
  { name: "Bridgestone", slug: "bridgestone", domain: "bridgestone.com" },
  { name: "E.ON", slug: "eon", domain: "eon.com" },
  { name: "Fanatics", slug: "fanatics", domain: "fanatics.com" },
  { name: "Hertz", slug: "hertz", domain: "hertz.com" },
  { name: "NICE", slug: "nice", domain: "nice.com" },
  { name: "Nubank", slug: "nubank", domain: "nubank.com.br" },
  { name: "H&M", slug: "hm", domain: "hm.com" },
  { name: "Checkmarx", slug: "checkmarx", domain: "checkmarx.com" },
]

export function LogoBar() {
  const logos = [...logoEntries, ...logoEntries]

  return (
    <section className="border-b border-border bg-background overflow-hidden">
      <p className="mx-auto max-w-[1200px] px-6 pt-12 pb-4 text-center font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-500 md:pb-6">
        Trusted by engineering and platform teams at
      </p>
      <div className="relative py-6 md:py-8">
        <div className="flex w-max animate-logo-scroll items-center gap-12 px-6 md:gap-16">
          {logos.map((entry, i) => (
            <a
              key={`${entry.slug}-${i}`}
              href={`https://${entry.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 shrink-0 items-center opacity-80 transition-opacity hover:opacity-100 md:h-9"
              aria-label={entry.name}
            >
              <img
                src={`/logos/${entry.slug}.svg`}
                alt=""
                className="h-full w-auto max-w-[140px] object-contain object-center"
                loading="eager"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
