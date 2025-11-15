import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto flex items-center justify-between md:border-x-2 border-black bg-yellow-200 dark:bg-yellow-500">
        <div className="w-full p-4 sm:p-6 md:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          {/* Header */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-normal leading-snug sm:leading-relaxed tracking-tight text-black dark:text-zinc-50">
            Let&apos;s discuss your project in a free 30-minute consultation
          </h1>

          {/* Button */}
          <a
            href="https://calendly.com/tonycomputers6/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:shrink-0"
          >
            <Button className="w-full sm:w-auto whitespace-nowrap">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              Schedule Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
