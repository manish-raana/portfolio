interface ProjectCardProps {
  title: string;
  desc: string;
  color: string;
  link: string;
}

function ProjectCard({ title, desc, color, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      className="group block h-full"
    >
      <div className={`h-full bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:-translate-y-1`}>
        <div className={`${color} h-32 flex items-center justify-center border-b-2 border-black dark:border-gray-300 group-hover:bg-opacity-80 transition-colors`}>
          <span className="text-4xl">🚀</span>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 dark:text-white group-hover:underline decoration-wavy decoration-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section>
      <div className="inline-block bg-pastel-purple dark:bg-pastel-purple border-2 border-black dark:border-gray-300 px-6 py-2 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] mb-12 transform -rotate-2">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="PDC NFT Marketplace"
          desc="Interactive web app for buying/selling NFTs. Built with Next.js 14, Web3, Tailwind, and Redux."
          color="bg-pastel-blue"
          link="#"
        />
        <ProjectCard
          title="DeFi Dashboard"
          desc="Comprehensive dashboard visualizing financial data from various protocols using Web3 and PostgreSQL."
          color="bg-pastel-green"
          link="#"
        />
        <ProjectCard
          title="AI Image Generation"
          desc="SaaS app for generating custom AI images using Stable Diffusion API, Python, and Next.js."
          color="bg-pastel-pink"
          link="#"
        />
        <ProjectCard
          title="AI Cart Optimization"
          desc="E-commerce cart with AI-driven upsell suggestions using Google Gemini API."
          color="bg-pastel-purple"
          link="#"
        />
      </div>
    </section>
  );
}
