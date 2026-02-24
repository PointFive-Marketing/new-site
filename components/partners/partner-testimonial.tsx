export function PartnerTestimonial() {
  return (
    <section className="bg-[#0A0A1A] py-16 md:py-20">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="rounded-xl border border-[#0000EE]/30 bg-[#0000EE]/[0.04] p-8 md:p-10">
          {/* Quote marks */}
          <svg
            className="mb-4 h-8 w-8 text-[#0000EE]/40"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M10 8C6.7 8 4 10.7 4 14v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
          </svg>

          <blockquote className="text-[18px] font-medium leading-relaxed text-white md:text-[20px]">
            PointFive transformed how we deliver cloud optimization for our
            clients. The depth of detection across services and clouds means we
            consistently uncover savings that other tools simply don&apos;t find. It&apos;s
            become a core part of our FinOps practice.
          </blockquote>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0000EE]/40 to-[#7eb8ff]/40" />
            <div>
              <p className="text-[15px] font-semibold text-white">
                Adam Zeitlin
              </p>
              <p className="text-[13px] text-[#B4B4D0]">
                FinOps Practice Lead, Deloitte
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
