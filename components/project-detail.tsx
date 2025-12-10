import { MoveLeft, MoveRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { Patrick_Hand } from "next/font/google";

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: ["400"],
});
import Link from "next/link";
import { Badge } from "./ui/badge";
import Gallery from "./gallery";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="w-full bg-purple-50 dark:bg-background">
      <div className="max-w-6xl mx-auto flex flex-col justify-center sm:border-x-2 border-black dark:border-accent">
        {/* Header */}
        <div className="p-4 sm:p-6 md:p-12 border-b-2 border-black dark:border-accent space-y-6">
          {/*first container*/}
          <div className="w-full flex items-end flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col justify-between">
              <Link
                href={"/"}
                className="h-12 w-12 flex items-center justify-center bg-yellow-400 border-2 border-black dark:border-accent rounded-full"
              >
                <MoveLeft className="text-black" />
              </Link>
              <h1 className="text-2xl md:text-3xl max-w-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 my-5">
                {project.title}: {project.summary}
              </h1>
              <a
                href={project.url}
                className="inline-flex w-42 items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-emerald-950/80 backdrop-blur-sm border-2 border-black dark:border-emerald-600 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold text-black dark:text-emerald-100">
                  View Live App
                </span>
                <MoveRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </a>
            </div>
            {/*second container*/}
            <div className="flex items-end justify-end flex-col">
              <div className="flex items-center gap-4 pb-4">
                <p
                  className={`${patrickHand.className} font-bold italic text-2xl`}
                >
                  01
                </p>
                <MoveRight className="text-yellow-400" size={32} />
                <p
                  className={`${patrickHand.className} font-bold italic text-2xl`}
                >
                  {project.year}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pb-2">
                {project.tags.map((tag, index) => (
                  <p
                    key={index}
                    className={`text-sm uppercase ${patrickHand.className} ${index >= 2 ? "" : "border-r-2 pr-2"}`}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/*gallery*/}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.image.slice(0, 2).map((image, index) => (
              <Gallery image={image} key={index} />
            ))}
          </div>
        </div>

        {/*project summary - project description & role*/}
        <div className="border-b-2 border-black dark:border-accent">
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-0">
            {/*problem statement*/}
            <div className="xl:col-span-2 p-4 sm:p-6 md:p-12 flex flex-col border-b-2 sm:border-b-0 sm:border-r-2 border-black dark:border-accent space-y-4">
              <p className={`${patrickHand.className} text-sm uppercase`}>
                Description
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Creating a POS solution for SMEs in Kenya
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
            {/*solution*/}
            <div className="p-4 sm:p-6 md:p-12 flex flex-col justify-center space-y-2">
              <h1 className="text-xl md:text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Role
              </h1>
              <p className="text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                Full Stack Developer
              </p>
              <h1 className="text-xl md:text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Tools
              </h1>
              <p className="text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                VsCode, Github, Github Actions, VPS
              </p>
              <h1 className="text-xl md:text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Project Duration
              </h1>
              <p className="text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                2 month(s)
              </p>
            </div>
          </div>
        </div>
        {/*Tech stack*/}
        <div className="">
          {/* Tech Stack */}
          <div className="p-4 sm:p-6 md:p-12 border-b-2 border-black dark:border-accent space-y-4 sm:space-y-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight sm:leading-10 tracking-tight text-black dark:text-zinc-50">
              Tech Stack
            </h1>

            <div className="space-y-6 sm:space-y-8">
              {/* Frontend */}
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wide">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.techStack.frontend.map((tech, index) => (
                    <Badge
                      key={index}
                      className="px-4 py-2 bg-background border-2 border-black dark:border-accent text-gray-900 dark:text-gray-300 shadow-xl dark:shadow"
                    >
                      <tech.icon />
                      <span className="text-xs md:text-sm">{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wide">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.techStack.backend.map((tech, index) => (
                    <Badge
                      key={index}
                      className="px-4 py-2 bg-background border-2 border-black dark:border-accent text-gray-900 dark:text-gray-300 shadow-xl dark:shadow"
                    >
                      <tech.icon className="" />
                      <span className="text-xs md:text-sm">{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Mobile */}
              {project.techStack.mobile && (
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wide">
                    Mobile
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.techStack.mobile.map((tech, index) => (
                      <Badge
                        key={index}
                        className="px-4 py-2 bg-background border-2 border-black dark:border-accent text-gray-900 dark:text-gray-300 shadow-xl dark:shadow"
                      >
                        <tech.icon className="" />
                        <span className="text-xs md:text-sm">{tech.name}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Infrastructure */}
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wide">
                  Tools & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.techStack.tools.map((tech, index) => (
                    <Badge
                      key={index}
                      className="px-4 py-2 bg-background border-2 border-black dark:border-accent text-gray-900 dark:text-gray-300 shadow-xl dark:shadow"
                    >
                      <tech.icon className="" />
                      <span className="text-xs md:text-sm">{tech.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Error Reporting & Logs */}
              {project.techStack.errorLogs && (
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wide">
                    Error Reporting & Testing
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.techStack.errorLogs.map((tech, index) => (
                      <Badge
                        key={index}
                        className="px-4 py-2 bg-background border-2 border-black dark:border-accent text-gray-900 dark:text-gray-300 shadow-xl dark:shadow"
                      >
                        <tech.icon className="" />
                        <span className="text-xs md:text-sm">{tech.name}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
