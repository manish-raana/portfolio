import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-5xl mx-auto space-y-24 text-[var(--foreground)]">
      <Hero />
      <BlogSection />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Education />
      <Footer />
    </main>
  );
}
