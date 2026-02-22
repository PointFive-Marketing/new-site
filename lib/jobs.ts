export interface Job {
  title: string
  department: string
  location: string
  type: string
  url: string
}

// Update this array when positions change.
// Jobs are displayed grouped by department.
export const jobs: Job[] = [
  {
    title: "Head of Talent Acquisition",
    department: "HR",
    location: "Tel Aviv",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Sales Operations Manager",
    department: "Business Operations",
    location: "New York",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Product Marketing Manager",
    department: "Product Management",
    location: "Tel Aviv",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Senior Product Manager",
    department: "Product Management",
    location: "Tel Aviv",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Technical Customer Success Manager",
    department: "Customer Success",
    location: "New York",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Field Marketing Manager",
    department: "Marketing",
    location: "US Remote",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Sr. Manager, Demand Generation (ABM/Digital)",
    department: "Marketing",
    location: "US Remote",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Tel Aviv",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Engineering Group Manager",
    department: "Engineering",
    location: "Tel Aviv",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Analytics Engineer",
    department: "Engineering",
    location: "Tel Aviv",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Cloud Research",
    department: "Research",
    location: "Tel Aviv",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Enterprise Solutions Engineer, UK (EMEA)",
    department: "Sales",
    location: "EMEA Remote",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Enterprise Account Executive US - East/Central",
    department: "Sales",
    location: "US Remote",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Enterprise Account Executive - West",
    department: "Sales",
    location: "US Remote",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Regional VP of Sales, EMEA & APAC",
    department: "Sales",
    location: "EMEA Remote",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
  {
    title: "Channel Partnerships Development - EMEA",
    department: "Partnerships",
    location: "EMEA Remote",
    type: "Permanent",
    url: "https://www.pointfive.co/careers",
  },
]

export function getJobsByDepartment(): Record<string, Job[]> {
  const grouped: Record<string, Job[]> = {}
  for (const job of jobs) {
    if (!grouped[job.department]) grouped[job.department] = []
    grouped[job.department].push(job)
  }
  return grouped
}

export function getDepartments(): string[] {
  return [...new Set(jobs.map((j) => j.department))]
}
