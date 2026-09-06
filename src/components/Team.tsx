const team = [
  {
    id: "raheel",
    name: "Raheel Ali Butt",
    role: "CEO",
    initials: "RAB",
  },
  {
    id: "asim",
    name: "Asim Muneer",
    role: "Filmmaker, Editor",
    initials: "AM",
  },
  {
    id: "hassan",
    name: "Hassan Arshad",
    role: "Audio & Sound Specialist",
    initials: "HA",
  },
  {
    id: "usman",
    name: "Usman Ahmed",
    role: "Cinematographer",
    initials: "UA",
  },
  {
    id: "faisal",
    name: "Faisal Suleman",
    role: "photographer& videographer",
    initials: "FS",
  },
  {
    id: "abdullah",
    name: "Abdullah Nazir",
    role: "Camera Operator, Production Assistant",
    initials: "AN",
  },
  {
    id: "amir",
    name: "Amir shahzad",
    role: "Camera Operator, Production Assistant",
    initials: "As",
  },
] as const;

export default function Team() {
  return (
    <section id="team" className="relative bg-background-elevated py-24 md:py-32">
      <div className="container-edge">
        <div className="mb-12 max-w-xl">
          <p className="tracked mb-3 text-xs font-semibold uppercase text-gold-soft">Studio Personnel</p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracked-tight sm:text-4xl">
            Team
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-6 rounded-sm border border-line bg-background p-6"
            >
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/25 to-transparent ring-1 ring-gold/30"
                aria-hidden="true"
              >
                <span className="font-display text-xl font-bold tracked-tight text-gold-soft">
                  {member.initials}
                </span>
              </div>
              <div>
                <p className="font-display text-base font-bold uppercase tracked-tight">
                  {member.name}
                </p>
                <p className="tracked mt-1 text-[11px] uppercase text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
