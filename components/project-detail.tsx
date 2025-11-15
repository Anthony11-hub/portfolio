import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Project } from "@/lib/projects";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ProjectDetail({ project }: { project: Project }) {
  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: `Understanding the business needs, goals, and technical requirements to create a solid project roadmap for ${project.title}.`,
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Designing intuitive interfaces and scalable system architecture that aligns with the platform's vision.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Building the solution with clean code, regular updates, and thorough testing throughout the process.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "Deployed the project smoothly and provided ongoing maintenance and support as needed.",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-black z-50">
      <div className="max-w-6xl mx-auto flex flex-col justify-center sm:border-x-2 border-black">
        {/* Header */}
        <div className="w-full grid md:grid-cols-2 gap-0 border-b-2 border-black">
          {/*left column*/}
          <div className="bg-emerald-100 dark:bg-emerald-900 p-4 sm:p-6 md:p-12 sm:border-r-2 border-black border-b-2 sm:border-b-0">
            <div className="flex flex-col justify-between">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{project.slug}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="text-2xl md:text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 my-5">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                {project.description}
              </p>
              <a href={project.url} target="_blank">
                <Button className="max-w-[200px] mt-4">
                  View Live App
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
          {/*right column*/}
          <div className="relative w-full h-full aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt="programmer"
              fill
              className="object-cover sm:ml-4"
            />
          </div>
        </div>

        {/*project summary - problem & solution grid*/}
        <div className="border-b-2 border-black">
          <div className="w-full grid md:grid-cols-2 gap-0">
            {/*problem statement*/}
            <div className="bg-pink-100 dark:bg-pink-900 p-4 sm:p-6 md:p-12 flex flex-col justify-center border-b-2 sm:border-b-0 sm:border-r-2 border-black space-y-4">
              <h1 className="text-2xl md:text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Problem Statement
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                {project.problemStatement}
              </p>
            </div>
            {/*solution*/}
            <div className="bg-yellow-100 dark:bg-yellow-900 p-4 sm:p-6 md:p-12 flex flex-col justify-center space-y-4">
              <h1 className="text-2xl md:text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Solution
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
        {/*Approach - Tech stack & Process*/}
        <div className="border-b-2 border-black">
          {/* Tech Stack */}
          <div className="p-4 sm:p-6 md:p-12 border-b-2 border-black space-y-4 sm:space-y-6">
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
                    <div
                      key={index}
                      className="group px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 border-2 border-black dark:border-zinc-700 rounded-lg hover:bg-black dark:hover:bg-white transition-colors cursor-default flex items-center gap-1.5 sm:gap-2"
                    >
                      <tech.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors" />
                      <span className="text-xs sm:text-sm font-medium text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors">
                        {tech.name}
                      </span>
                    </div>
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
                    <div
                      key={index}
                      className="group px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 border-2 border-black dark:border-zinc-700 rounded-lg hover:bg-black dark:hover:bg-white transition-colors cursor-default flex items-center gap-1.5 sm:gap-2"
                    >
                      <tech.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors" />
                      <span className="text-xs sm:text-sm font-medium text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors">
                        {tech.name}
                      </span>
                    </div>
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
                      <div
                        key={index}
                        className="group px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 border-2 border-black dark:border-zinc-700 rounded-lg hover:bg-black dark:hover:bg-white transition-colors cursor-default flex items-center gap-1.5 sm:gap-2"
                      >
                        <tech.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors" />
                        <span className="text-xs sm:text-sm font-medium text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors">
                          {tech.name}
                        </span>
                      </div>
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
                    <div
                      key={index}
                      className="group px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 border-2 border-black dark:border-zinc-700 rounded-lg hover:bg-black dark:hover:bg-white transition-colors cursor-default flex items-center gap-1.5 sm:gap-2"
                    >
                      <tech.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors" />
                      <span className="text-xs sm:text-sm font-medium text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors">
                        {tech.name}
                      </span>
                    </div>
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
                      <div
                        key={index}
                        className="group px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 border-2 border-black dark:border-zinc-700 rounded-lg hover:bg-black dark:hover:bg-white transition-colors cursor-default flex items-center gap-1.5 sm:gap-2"
                      >
                        <tech.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors" />
                        <span className="text-xs sm:text-sm font-medium text-black dark:text-zinc-50 group-hover:text-white dark:group-hover:text-black transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Approach */}
          <div className="p-4 sm:p-6 md:p-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight sm:leading-10 tracking-tight text-black dark:text-zinc-50 mb-6 sm:mb-8">
              Approach
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black dark:border-zinc-700 flex items-center justify-center bg-white dark:bg-black">
                        <span className="text-base sm:text-lg font-bold text-black dark:text-zinc-50">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black dark:text-zinc-50 mb-1.5 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed sm:leading-6 text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*Features*/}
        <div className="border-b-2 border-black">
          <div className="border-b-2 border-black p-4 sm:p-6 md:p-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Features
            </h1>
          </div>
          {/* Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 border-black">
            {project.features.map((service, index) => (
              <div
                key={index}
                className={`p-4 sm:p-6 md:p-12 border-black ${
                  // On small screens: border-b on all except last item
                  // On md+ screens: border-b on first 3 items only
                  index < project.features.length - 1
                    ? "border-b-2 md:border-b-0"
                    : ""
                } ${index < 3 ? "md:border-b-2" : ""} ${
                  index % 3 !== 2 ? "md:border-r-2" : ""
                }`}
              >
                <h2 className="text-xl font-bold mb-2 text-black dark:text-zinc-100">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/*Impact*/}
        <div className="border-b-2 border-black">
          <div className="p-4 sm:p-6 md:p-12">
            <h1 className="text-2xl md:text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-4">
              {project.impact.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400 mb-8">
              {project.impact.description}
            </p>

            <div className="space-y-4">
              {project.impact.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-black dark:text-zinc-50 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*Screenshot*/}
      </div>
    </div>
  );
}
