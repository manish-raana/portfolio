interface SkillCardProps {
  title: string;
  skills: string[];
  color: string;
  rotate: string;
}

function SkillCard({ title, skills, color, rotate }: SkillCardProps) {
  return (
    <div className={`neo-card h-full p-6 ${rotate} hover:rotate-0`}>
      <div className={`inline-block px-3 py-1 rounded-md border-2 border-black mb-4 ${color}`}>
         <h3 className="text-xl font-bold text-black">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-[var(--foreground)] font-medium">
            <span className={`w-2 h-2 rounded-full border border-black ${color}`}></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-12">
      <div className="flex justify-center mb-12">
        <div className="inline-block bg-[var(--color-retro-pink)] border-2 border-[var(--color-border)] px-8 py-3 rounded-full transform rotate-2 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
          <h2 className="text-4xl font-bold text-[var(--foreground)]">Technical Skills</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <SkillCard
          title="Frontend"
          skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Shadcn", "Web3"]}
          color="bg-[var(--color-retro-yellow)]"
          rotate="-rotate-1"
        />
        <SkillCard
          title="Backend"
          skills={["Node.js", "Express", "TypeScript", "Solidity", "Python"]}
          color="bg-[var(--color-retro-blue)]"
          rotate="rotate-2"
        />
        <SkillCard
          title="DevOps"
          skills={["AWS", "Docker", "Vercel", "Nginx", "CI/CD", "GitHub"]}
          color="bg-[var(--color-retro-sage)]"
          rotate="-rotate-2"
        />
        <SkillCard
          title="Database"
          skills={["PostgreSQL", "MongoDB"]}
          color="bg-[var(--color-retro-pink)]"
          rotate="rotate-1"
        />
      </div>
    </section>
  );
}
