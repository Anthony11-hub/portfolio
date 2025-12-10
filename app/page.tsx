import CustomMarquee from "@/components/custom-marquee";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Header from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      <Header />
      <Hero />
      <CustomMarquee />
      <Portfolio projects={projects.slice(0, 6)} />
      <Services />
      <Footer />
    </div>
  );
}
