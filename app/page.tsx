import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Header from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      <Header />
      <Hero />
      <Services />
      <div className="w-full bg-white dark:bg-black z-50">
        <div className="max-w-6xl mx-auto flex flex-col justify-center sm:border-x-2 border-black">
          {/* Header */}
          <div className="border-b-2 border-black p-4 sm:p-6 md:p-12">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl sm:text-3xl font-semibold leading-tight sm:leading-10 tracking-tight text-black dark:text-zinc-50">
                Recent Projects
              </h1>
              <Link
                href="/projects"
                className={buttonVariants({ variant: "default" })}
              >
                View All →
              </Link>
            </div>
          </div>
          <Portfolio projects={projects.slice(0, 4)} />
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
