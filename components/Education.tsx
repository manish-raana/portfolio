export default function Education() {
  return (
    <section className="text-center py-12">
      <div className="inline-block bg-[var(--color-retro-yellow)] border-2 border-[var(--color-border)] px-8 py-3 rounded-full mb-12 transform rotate-1 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
        <h2 className="text-4xl font-bold text-[var(--foreground)]">Education</h2>
      </div>
      <div className="max-w-2xl mx-auto neo-card p-8 transform hover:scale-105 transition-transform rotate-1">
        <div className="mb-4">
           <span className="text-4xl">🎓</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">Computer Science Engineering</h3>
        <p className="text-xl font-bold text-[var(--foreground)]/80">Sharda University</p>
        <p className="inline-block mt-4 px-4 py-1 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-bold">
          2014 - 2018
        </p>
      </div>
    </section>
  );
}
