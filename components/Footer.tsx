export default function Footer() {
  return (
    <footer className="text-center pt-12 border-t-2 border-black/10 dark:border-gray-400/30 border-dashed">
      <p className="text-lg text-[var(--foreground)]/70">
        © {new Date().getFullYear()} Manish Rana.
      </p>
    </footer>
  );
}
