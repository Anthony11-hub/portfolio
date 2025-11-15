import { Calendar } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-white dark:bg-black border-b-2 border-black z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between sm:border-x-2 border-black">
        <div className="w-full grid md:grid-cols-2 gap-0">
          {/* Left column - Text content */}
          <div className="bg-emerald-100 dark:bg-emerald-900 p-4 sm:p-6 md:p-12 flex flex-col justify-center sm:border-r-2 border-black">
            <h1 className="text-2xl sm:text-3xl font-semibold leading-tight sm:leading-10 tracking-tight text-black dark:text-zinc-50 mb-4 sm:mb-6 md:mb-8">
              Hi, I&apos;m Anthony. I&apos;m a Software Developer.
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-zinc-800 dark:text-zinc-400 mb-6 sm:mb-8">
              I build modern, high-performing digital solutions that help
              businesses run smarter, sell faster, and connect better. From
              complex backend systems to pixel-perfect interfaces — I turn ideas
              into real, scalable products.
            </p>
            <div className="flex items-center gap-3 sm:gap-2">
              <Link
                href={"/projects"}
                className={buttonVariants({ variant: "default" })}
              >
                View Projects
              </Link>
              <a
                href="https://calendly.com/tonycomputers6/30min"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Button className="">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Schedule Now
                </Button>
              </a>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative h-64 sm:h-80 md:h-auto">
            <Image
              src={"/male-programmer-working-developing-new-html-script.jpg"}
              alt="programmer"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
