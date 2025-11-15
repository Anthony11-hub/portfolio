import Footer from "@/components/footer";
import Header from "@/components/navbar";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      <Header />
      <div className="w-full bg-white dark:bg-black z-50">
        <div className="max-w-6xl min-h-screen mx-auto flex flex-col items-center justify-center sm:border-x-2 border-black p-6 md:p-12">
          <h1 className="text-6xl font-semibold text-black dark:text-zinc-50 mb-4">
            404
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Page not found
          </p>
          <Link href="/" className={buttonVariants({ variant: "default" })}>
            Go back home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
