import Image from "next/image";

interface SocialLinkProps {
  href: string;
  label: string;
  color: string;
}

function SocialLink({ href, label, color }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} neo-pill text-lg`}
    >
      {label}
    </a>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center space-y-8 py-12">
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        {/* Animated Avatar with changing border radius */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/mkart.png"
            alt="Avatar"
            width={400}
            height={400}
            layout="responsive"
            className="animated-radius object-cover border-4 border-black dark:border-gray-400 bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-[var(--foreground)] drop-shadow-sm mb-2">
          Manish Rana
        </h1>
        <div className="inline-block bg-[var(--color-retro-yellow)] px-6 py-2 transform -rotate-1 border-2 border-[var(--color-border)] rounded-lg shadow-[4px_4px_0px_0px_var(--shadow-color)]">
          <p className="text-xl md:text-2xl text-[var(--foreground)] font-bold">
            Full Stack Developer
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-6 text-left">
          <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed">
            I’m a Full Stack Developer with over 7 years of experience building end-to-end web applications—from crafting seamless user interfaces with React and Next.js to designing efficient, scalable backends with Node.js.
          </p>
          <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed">
            My work spans diverse domains, including secure online transactions and blockchain integrations. I thrive on problem-solving—turning complex challenges into clean, practical solutions.
          </p>
          <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed">
            Outside of code, I recharge by traveling, exploring nature, and spending time with my kid—my best source of inspiration.
          </p>
        </div>
      </div>

      {/* Social Pills */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <SocialLink href="https://www.linkedin.com/in/manishraana/" label="LinkedIn" color="bg-[var(--color-retro-blue)] text-[var(--foreground)]" />
        <SocialLink href="https://peerlist.io/manishrana" label="Peerlist" color="bg-[var(--color-retro-sage)] text-[var(--foreground)]" />
        <SocialLink href="https://twitter.com/ManishRaanaa" label="Twitter" color="bg-[var(--color-retro-pink)] text-[var(--foreground)]" />
        <SocialLink href="mailto:mkrana173@gmail.com" label="Email" color="bg-[var(--color-retro-peach)] text-[var(--foreground)]" />
        <SocialLink href="https://github.com/manish-raana" label="GitHub" color="bg-[var(--color-retro-yellow)] text-[var(--foreground)]" />
      </div>
    </section>
  );
}
