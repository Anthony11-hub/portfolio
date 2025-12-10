"use client";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const services = [
  {
    title: "Web Development",
    description:
      "Designing and building fast, responsive, and secure websites that help your brand stand out and convert visitors.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with clean UI, real-time features, and seamless performance across Android and iOS.",
  },
  {
    title: "API Development",
    description:
      "Building secure, scalable APIs that connect your systems, automate workflows, and power your digital products.",
  },
  {
    title: "System Integration",
    description:
      "Integrate payment gateways, CRMs, or third-party tools to streamline your business processes and reduce manual work.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="w-full bg-purple-50 dark:bg-background border-b-2 border-black dark:border-accent">
      <div className="max-w-6xl mx-auto flex flex-col justify-center md:border-x-2 border-black dark:border-accent">
        {/* Header */}
        <div className="p-4 sm:p-6 md:p-12">
          <h1 className="text-xl md:text-2xl sm:text-3xl font-semibold leading-tight sm:leading-10 tracking-tight text-black dark:text-zinc-50">
            What I can do for your Business
          </h1>
        </div>

        <div className="w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-4 sm:p-6 md:p-12 border-black hover:bg-yellow-400 transition-all duration-700 ease-in-out dark:border-accent flex flex-col space-y-2 ${
                // Mobile: border-b on all except last
                index < services.length - 1 ? "border-b-2 md:border-b-0" : ""
              } ${
                // Desktop: border-b on top row (first 3)
                index < 3 ? "md:border-b-2" : ""
              }`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleOpen(index)}
              >
                <div className="flex items-center gap-4 md:gap-8 dark:group-hover:text-background">
                  <span className="">0{index + 1}</span>
                  <h1 className="text-md md:text-2xl font-bold">
                    {service.title}
                  </h1>
                </div>
                <motion.div
                  className="p-2 border-black dark:border-background text-black rounded-full bg-yellow-500 group-hover:bg-purple-600 group-hover:text-gray-100 transition-colors duration-300"
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <MoveUpRight className="w-6 h-6" />
                </motion.div>
              </div>
              {/*content*/}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-sm md:text-lg pt-2 dark:group-hover:text-background"
                    >
                      {service.description}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
