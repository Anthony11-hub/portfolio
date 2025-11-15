import { Code } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-white dark:bg-black border-b-2 border-black z-50">
      <div className="max-w-6xl mx-auto flex items-center gap-2 md:justify-between sm:border-x-2 border-black">
        <Link href={"/"} className="flex items-center gap-2">
          <div className="w-11 h-10 bg-purple-400 flex items-center justify-center border-r-2 border-black">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h1 className="hidden md:block font-semibold text-zinc-950 dark:text-zinc-50">
            Anthony Mwaura
          </h1>
        </Link>
        <nav className="flex items-center gap-8 px-4">
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
          <Link
            href="/projects"
            className="text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            resume
          </Link>
          <a
            href="https://calendly.com/tonycomputers6/30min"
            className="hidden md:block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
          >
            Schedule Meeting
          </a>
        </nav>
      </div>
    </div>
  );
}
