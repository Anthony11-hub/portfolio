import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <div className="w-full bg-primary dark:bg-background z-50" id="footer">
      <div className="max-w-6xl mx-auto flex flex-col md:items-center justify-between text-background dark:text-gray-200 sm:border-x-2 border-gray-300 dark:border-accent py-6">
        <div className="w-full p-4 sm:p-6 md:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          {/* Header */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-normal leading-snug sm:leading-relaxed tracking-tight text-zinc-50 text-center">
            Let&apos;s discuss your project in a free 30-minute consultation
          </h1>

          {/* Button */}
          <a
            href="https://calendly.com/tonycomputers6/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:shrink-0"
          >
            <Button className="w-full sm:w-auto whitespace-nowrap rounded-full bg-purple-500 hover:bg-purple-600 text-gray-100">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
              Schedule Now
            </Button>
          </a>
        </div>
        {/*socials*/}
        <Separator />
        <div className="py-4 px-4">
          <h1 className="text-yellow-400 text-xl pb-4 text-center">
            Connect on Socials
          </h1>
          <div className="flex items-center justify-center gap-4">
            <a href="" className="text-sm font-bold">
              email
            </a>
            <a href="" className="text-sm font-bold">
              linkedIn
            </a>
            <a href="" className="text-sm font-bold">
              github
            </a>
            <a href="" className="text-sm font-bold">
              twitter
            </a>
          </div>
        </div>
      </div>
      <Separator />
      <div className="max-w-6xl mx-auto flex items-center justify-center text-background dark:text-gray-200 sm:border-x-2 border-gray-300 dark:border-accent py-6 px-4">
        <p className="text-sm font-bold">
          &copy; {new Date().getFullYear()} Anthony Mwaura. All rights reserved.
        </p>
      </div>
    </div>
  );
}
