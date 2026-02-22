import { Mail, MapPin, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

const DEMO_URL = "https://www.pointfive.co/request-demo"

export const metadata = {
  title: "Contact Us | PointFive",
  description:
    "Get in touch with PointFive. Book a demo, reach our sales team, or find our office locations.",
}

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-[#0A0A1A] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Contact
          </p>
          <h1
            className="mt-4 max-w-[600px] font-bold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Let&apos;s talk cloud efficiency.
          </h1>
          <p className="mt-6 max-w-[500px] text-lg leading-relaxed text-[#B4B4D0]">
            Whether you&apos;re looking to optimize your cloud spend or just
            want to learn more — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Book a Demo — primary */}
            <div className="rounded-lg border-2 border-[#0000EE]/20 bg-[#0000EE]/[0.02] p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0000EE]/10">
                <ArrowRight className="h-5 w-5 text-[#0000EE]" />
              </div>
              <h2 className="mt-5 text-[20px] font-bold text-foreground">
                Book a Demo
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
                See PointFive in action. Our team will walk you through the
                platform and show you exactly where your savings are hiding.
              </p>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0000EE] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0000CC] hover:shadow-lg hover:shadow-[#0000EE]/25"
              >
                Schedule Now
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Email */}
            <div className="rounded-lg border border-border bg-neutral-50/50 p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0000EE]/20 bg-[#0000EE]/5">
                <Mail className="h-5 w-5 text-[#0000EE]" />
              </div>
              <h2 className="mt-5 text-[20px] font-bold text-foreground">
                Email Us
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
                Have a question or want to learn more? Drop us a line and
                we&apos;ll get back to you within one business day.
              </p>
              <div className="mt-6 space-y-2">
                <a
                  href="mailto:sales@pointfive.co"
                  className="block text-[14px] font-medium text-[#0000EE] hover:underline"
                >
                  sales@pointfive.co
                </a>
                <a
                  href="mailto:info@pointfive.co"
                  className="block text-[14px] font-medium text-[#0000EE] hover:underline"
                >
                  info@pointfive.co
                </a>
              </div>
            </div>

            {/* Offices */}
            <div className="rounded-lg border border-border bg-neutral-50/50 p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0000EE]/20 bg-[#0000EE]/5">
                <MapPin className="h-5 w-5 text-[#0000EE]" />
              </div>
              <h2 className="mt-5 text-[20px] font-bold text-foreground">
                Our Offices
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
                PointFive is headquartered in Tel Aviv with a growing presence in
                New York and remote teams across the US and EMEA.
              </p>
              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-[13px] font-semibold text-foreground">
                    Tel Aviv, Israel
                  </p>
                  <p className="text-[13px] text-neutral-400">HQ</p>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">
                    New York, USA
                  </p>
                  <p className="text-[13px] text-neutral-400">US Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
