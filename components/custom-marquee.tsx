"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function CustomMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to horizontal movement (moves left as you scroll down)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const marqueeText =
    "selected work • selected work • selected work • selected work • ";

  return (
    <div
      ref={containerRef}
      className="bg-primary dark:bg-yellow-500 p-6 md:p-12 text-white dark:text-black w-full border-b-2 border-black dark:border-accent overflow-hidden"
    >
      <motion.div style={{ x }} className="flex whitespace-nowrap">
        {/* Duplicate text multiple times for seamless loop */}
        <span className="text-4xl sm:text-6xl md:text-8xl font-bold capitalize">
          {marqueeText.repeat(4)}
        </span>
      </motion.div>
    </div>
  );
}
