const stats = [
  { value: "1200%+", label: "Average customer ROI" },
  { value: "$50M", label: "Total savings delivered" },
  { value: "10 days", label: "Fastest full ROI achieved" },
  { value: "400+", label: "Optimization types" },
]

export function NetZeroStats() {
  return (
    <div className="bg-primary py-6">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 md:grid-cols-4 md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-semibold leading-none text-white md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-white/65">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
