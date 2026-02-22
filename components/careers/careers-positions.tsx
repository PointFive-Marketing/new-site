"use client"

import { useState } from "react"
import { MapPin, ArrowRight } from "lucide-react"
import { jobs, getDepartments } from "@/lib/jobs"

export function CareersPositions() {
  const departments = getDepartments()
  const [filter, setFilter] = useState<string>("All")

  const filtered =
    filter === "All" ? jobs : jobs.filter((j) => j.department === filter)

  return (
    <section id="positions" className="bg-neutral-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
              Open Positions
            </p>
            <h2
              className="mt-3 font-bold leading-[1.15] tracking-tight text-foreground"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
            >
              {jobs.length} roles across {departments.length} teams
            </h2>
          </div>

          {/* Department filter */}
          <div className="flex flex-wrap gap-2">
            {["All", ...departments].map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all ${
                  filter === dept
                    ? "bg-[#0000EE] text-white shadow-sm"
                    : "bg-white text-neutral-500 hover:bg-neutral-100 hover:text-foreground border border-border"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job list */}
        <div className="mt-8 space-y-2">
          {filtered.map((job, i) => (
            <a
              key={`${job.title}-${i}`}
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-white p-5 transition-all hover:border-[#0000EE]/20 hover:shadow-sm"
            >
              <div className="min-w-0">
                <h3 className="text-[16px] font-semibold text-foreground group-hover:text-[#0000EE] transition-colors">
                  {job.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-[13px] text-neutral-400">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[12px] font-medium text-neutral-500">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                  <span>{job.type}</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-[#0000EE]" />
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-neutral-400">
            No positions found in this department. Check back soon!
          </p>
        )}
      </div>
    </section>
  )
}
