import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/navbar";
import ProjectDetail from "@/components/project-detail";
import { projects } from "@/lib/projects";
import NotFound from "./not-found";

type Params = Promise<{ slug: string }>;

export default async function page({ params }: { params: Params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      <Header />
      {/*content*/}
      <ProjectDetail project={project} />
      <CTA />
      <Footer />
    </div>
  );
}
