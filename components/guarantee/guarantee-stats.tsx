const stats = [
  { value: "48hrs", label: "To Full Savings Report" },
  { value: "97%", label: "Find Savings Every Time" },
  { value: "$50M+", label: "Total Savings Delivered" },
  { value: "400+", label: "Optimization Types" },
]

export function GuaranteeStats() {
  return (
    <div className="bg-[#0000EE] py-10 md:py-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="font-bold leading-none text-white"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              {stat.value}
            </div>
            <div className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
