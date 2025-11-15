import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import { projects } from "@/lib/projects";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      <Header />
      {/*content*/}
      <div className="w-full bg-white dark:bg-black z-50">
        <div className="max-w-6xl mx-auto flex flex-col justify-center sm:border-x-2 border-black">
          {/* Header */}
          <div className="bg-emerald-100 dark:bg-emerald-900 border-b-2 border-black p-4 sm:p-6 md:p-12">
            <div className="flex flex-col justify-between">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Projects</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="text-2xl sm:text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 my-4 md:my-6">
                My Projects
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400">
                These are some of the interesting projects I’ve worked on in
                2025. I regularly update this list as I learn new technologies
                and improve my craft.
              </p>
            </div>
          </div>
          <Portfolio projects={projects} />
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
