import Image from "next/image"
import { Linkedin } from "lucide-react"

interface TeamMember {
  name: string
  title: string
  photo: string
  linkedin: string
}

const team: TeamMember[] = [
  {
    name: "Alon Arvatz",
    title: "Co-founder & CEO",
    photo: "/about/team/alon-arvatz.avif",
    linkedin: "https://www.linkedin.com/in/alon-arvatz/",
  },
  {
    name: "Gal Ben David",
    title: "Co-founder & CPO",
    photo: "/about/team/gal-ben-david.avif",
    linkedin: "https://www.linkedin.com/in/gal-ben-david/",
  },
  {
    name: "Amir Hozez",
    title: "Co-founder & CTO",
    photo: "/about/team/amir-hozez.avif",
    linkedin: "https://www.linkedin.com/in/hozez/",
  },
  {
    name: "Mor Barak",
    title: "VP Global Operations",
    photo: "/about/team/mor-barak.avif",
    linkedin: "https://www.linkedin.com/in/mor-barak/",
  },
  {
    name: "Dave Anderson",
    title: "CMO",
    photo: "/about/team/dave-anderson.avif",
    linkedin: "https://www.linkedin.com/in/daveando/",
  },
  {
    name: "Chris Calkin",
    title: "SVP Revenue",
    photo: "/about/team/chris-calkin.avif",
    linkedin: "https://www.linkedin.com/in/chriscalkin/",
  },
]

export function AboutTeam() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#00E639]">
            Leadership
          </p>
          <h2
            className="mx-auto mt-3 max-w-[500px] font-bold leading-[1.15] tracking-tight text-foreground"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
          >
            The team behind PointFive
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg border border-border bg-neutral-50/50 transition-colors hover:border-[#0000EE]/20"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-[16px] font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-neutral-500">
                    {member.title}
                  </p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-neutral-400 transition-colors hover:border-[#0000EE]/30 hover:bg-[#0000EE]/5 hover:text-[#0000EE]"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
