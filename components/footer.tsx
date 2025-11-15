import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="w-full bg-white dark:bg-black border-t-2 border-black z-50"
      id="footer"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between sm:border-x-2 border-black py-2 px-4">
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            home
          </Link>
          <Link
            href="/projects"
            className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            projects
          </Link>
          <a
            href="resume"
            className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            resume
          </a>
        </nav>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Anthony Mwaura.
        </p>
      </div>
    </div>
  );
}
