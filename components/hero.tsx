"use client";
import { MoveDown, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative bg-purple-50 dark:bg-background w-full overflow-hidden border-b-2 border-black dark:border-accent">
      <motion.div
        className="relative max-w-6xl mx-auto sm:border-x-2 border-black dark:border-accent"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="px-6 sm:px-8 md:px-12 py-14 flex items-center flex-col justify-center w-full text-center">
          {/* Badge */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white dark:bg-emerald-950/80 backdrop-blur-sm border-2 border-black dark:border-emerald-600 rounded-full shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-semibold text-black dark:text-emerald-100">
              Available for hire
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-black dark:text-white mb-6 sm:mb-8"
          >
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Anthony
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-emerald-900 dark:text-emerald-100 mb-6 sm:mb-8"
          >
            Software Developer & Digital Architect
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed text-zinc-700 dark:text-zinc-300 mb-10 sm:mb-12"
          >
            I build modern, high-performing digital solutions that help
            businesses run smarter, sell faster, and connect better. From
            complex backend systems to pixel-perfect interfaces — I turn ideas
            into real, scalable products.
          </motion.p>

          <div className="border-2 border-black dark:border-accent p-4 rounded-full bg-white dark:bg-background shadow">
            <MoveDown />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
