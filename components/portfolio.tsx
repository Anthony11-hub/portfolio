import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Plus } from "lucide-react";

export default function Portfolio({
  projects,
}: {
  projects: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
}) {
  const isOdd = projects.length % 2 !== 0;
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`p-4 sm:p-6 md:p-12 border-black group transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 ${
            // Mobile: border-b on all except last
            index < projects.length - 1 ? "border-b-2 xl:border-b-0" : ""
          } ${
            // Desktop: border-b on all items
            "xl:border-b-2"
          } ${
            // Desktop: border-r on left column
            index % 2 === 0 ? "xl:border-r-2" : ""
          }`}
        >
          <div className="relative w-full aspect-video mb-4 sm:mb-6 overflow-hidden rounded-lg border-2 border-black dark:border-zinc-700">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-zinc-100">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 mb-3 sm:mb-4 leading-relaxed">
            {project.description}
          </p>
          <Link
            href={project.link}
            className={buttonVariants({ variant: "default" })}
          >
            View Project →
          </Link>
        </div>
      ))}
      {isOdd && (
        <div className="hidden xl:flex p-4 sm:p-6 md:p-12 border-b-2 border-black items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:border-zinc-900 dark:group-hover:border-zinc-50 transition-colors">
              <Plus className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors" />
            </div>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
              More Upcoming
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
