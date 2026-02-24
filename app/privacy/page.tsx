import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | PointFive",
  description:
    "PointFive's privacy policy. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A1A]">
      <SiteHeader dark />

      <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-[800px] px-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Legal
          </p>
          <h1
            className="mt-3 text-white"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-[15px] text-[#B4B4D0]">
            Last updated: February 24, 2026
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-[#B4B4D0]">
            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                1. Introduction
              </h2>
              <p>
                PointFive, Inc. (&quot;PointFive,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website (pointfive.co), use our platform, or interact with our
                services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                2. Information We Collect
              </h2>
              <h3 className="mb-2 text-[16px] font-semibold text-white/80">
                Information You Provide
              </h3>
              <ul className="mb-4 list-inside list-disc space-y-2">
                <li>
                  Contact information (name, email address, phone number,
                  company name)
                </li>
                <li>Account registration details</li>
                <li>
                  Information submitted through forms, surveys, or
                  correspondence
                </li>
                <li>Payment and billing information</li>
              </ul>

              <h3 className="mb-2 text-[16px] font-semibold text-white/80">
                Information Collected Automatically
              </h3>
              <ul className="mb-4 list-inside list-disc space-y-2">
                <li>
                  Device and browser information (IP address, browser type,
                  operating system)
                </li>
                <li>
                  Usage data (pages visited, time spent, interactions with our
                  platform)
                </li>
                <li>
                  Cookies and similar tracking technologies (see Section 7)
                </li>
              </ul>

              <h3 className="mb-2 text-[16px] font-semibold text-white/80">
                Cloud Infrastructure Data
              </h3>
              <p>
                When you connect your cloud accounts to PointFive, we access
                read-only metadata about your cloud infrastructure (resource
                configurations, usage metrics, and cost data) to provide our
                optimization services. We do not access your application data,
                customer data, or any information stored within your cloud
                resources.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                3. How We Use Your Information
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Providing, operating, and improving our cloud cost
                  optimization platform
                </li>
                <li>
                  Generating savings recommendations and value reports
                </li>
                <li>
                  Processing transactions and managing your account
                </li>
                <li>
                  Communicating with you about our services, updates, and
                  promotional offers
                </li>
                <li>
                  Analyzing usage patterns to improve user experience
                </li>
                <li>
                  Complying with legal obligations and protecting our rights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                4. Data Sharing and Disclosure
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong className="text-white">Service Providers:</strong>{" "}
                  Third-party vendors who help us operate our platform (hosting,
                  analytics, payment processing)
                </li>
                <li>
                  <strong className="text-white">Legal Requirements:</strong>{" "}
                  When required by law, regulation, or legal process
                </li>
                <li>
                  <strong className="text-white">Business Transfers:</strong>{" "}
                  In connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong className="text-white">With Your Consent:</strong>{" "}
                  When you have given us explicit permission to share your data
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                5. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect
                your data, including encryption in transit (TLS 1.2+) and at
                rest, access controls, regular security audits, and SOC 2 Type
                II compliance. While we strive to protect your information, no
                method of electronic storage or transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                provide our services and fulfill the purposes described in this
                policy. Cloud infrastructure metadata is retained for the
                duration of your subscription and deleted within 90 days of
                account termination, unless required by law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                7. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar technologies to enhance your
                experience, analyze usage, and deliver targeted content. You
                can control cookie preferences through your browser settings.
                Essential cookies required for platform functionality cannot be
                disabled.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                8. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:privacy@pointfive.co"
                  className="text-[#7eb8ff] underline transition-colors hover:text-white"
                >
                  privacy@pointfive.co
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                9. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place for such transfers, including Standard Contractual
                Clauses where applicable.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of
                16. We do not knowingly collect personal information from
                children.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-[20px] font-bold text-white">
                12. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <p className="font-semibold text-white">
                  PointFive, Inc.
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:privacy@pointfive.co"
                    className="text-[#7eb8ff] underline transition-colors hover:text-white"
                  >
                    privacy@pointfive.co
                  </a>
                </p>
                <p className="mt-1">
                  Website:{" "}
                  <a
                    href="https://www.pointfive.co"
                    className="text-[#7eb8ff] underline transition-colors hover:text-white"
                  >
                    pointfive.co
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
