interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  points: string[];
}

function ExperienceCard({ role, company, period, points }: ExperienceCardProps) {
  return (
    <div className="neo-card relative p-6 md:p-8">
      <div className="absolute -left-[49px] md:-left-[65px] top-8 w-6 h-6 bg-[var(--color-retro-blue)] rounded-full border-2 border-black z-10"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <div>
          <h3 className="text-2xl font-bold text-[var(--foreground)]">{role}</h3>
          <p className="text-xl font-bold text-[var(--foreground)]/70">{company}</p>
        </div>
        <span className="neo-pill bg-[var(--foreground)] text-[var(--background)] text-sm transform -rotate-2 border-none">
          {period}
        </span>
      </div>
      <ul className="space-y-2 list-disc list-inside text-[var(--foreground)]/90">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="relative py-12">
      <div className="flex justify-center mb-12">
        <div className="inline-block bg-[var(--color-retro-sage)] border-2 border-[var(--color-border)] px-8 py-3 rounded-full transform -rotate-1 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
          <h2 className="text-4xl font-bold text-[var(--foreground)]">Work Experience</h2>
        </div>
      </div>
      
      <div className="space-y-12 border-l-4 border-[var(--color-border)] border-dashed ml-4 md:ml-8 pl-8 md:pl-12 py-4">
        <ExperienceCard
          role="Full Stack Developer"
          company="Reactivate (Via APN Consulting)"
          period="Present"
          points={[
            "Building Next.js applications with AWS Amplify.",
            "Delivering Zero to MVP solutions.",
            "Developing APIs, Frontend, and managing AWS infrastructure."
          ]}
        />
        <ExperienceCard
          role="Full Stack Developer"
          company="Blockpeer Finance"
          period="Nov 2022 - Sep 2025"
          points={[
            "Spearheaded migration from Laravel to Node.js/Next.js.",
            "Integrated secure payment gateways and authentication systems.",
            "Developed robust REST APIs on Node.js and managed AWS infrastructure.",
            "Implemented verifiable digital documents using TradeTrust."
          ]}
        />
        <ExperienceCard
          role="Full Stack Developer"
          company="bitcci ag"
          period="Feb 2019 - Oct 2022"
          points={[
            "Designed user-centric interfaces using React and Angular.",
            "Developed robust backend systems with Node.js.",
            "Contributed to POCs for blockchain use cases and identity solutions."
          ]}
        />
        <ExperienceCard
          role="QA Engineer"
          company="IVP"
          period="June 2018 - Jan 2019"
          points={[
            "Executed manual and automation testing using Selenium WebDriver.",
            "Developed reusable test cases and automation scripts."
          ]}
        />
      </div>
    </section>
  );
}
