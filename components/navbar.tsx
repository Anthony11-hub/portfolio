"use client";
import { Code, Menu, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-purple-50 dark:bg-background border-b-2 border-black dark:border-accent top-0 z-50 sticky">
      <div className="max-w-6xl mx-auto flex items-center gap-2 justify-between sm:border-x-2 border-black dark:border-accent">
        {/*logo*/}
        <Link href={"/"} className="flex items-center h-14">
          <div className="h-full w-16 bg-purple-400 flex items-center justify-center border-r-2 border-black dark:border-accent">
            <Code className="w-6 h-6 text-white" />
          </div>
        </Link>
        {/*dark mode toggle*/}
        <div className="absolute left-1/2 -translate-x-1/2">
          <AnimatedThemeToggler />
        </div>
        {/*email & menu*/}
        <div className="h-14 flex items-center border-l-2 border-black dark:border-accent">
          <div className="hidden md:flex items-center border-r-2 border-black dark:border-accent px-4 py-1 space-x-2 bg-yellow-400 text-black h-full">
            <a href="mailto:tonycomputers6@gmail.com" className="text-sm">
              chat@m-an.dev
            </a>
            <MoveUpRight />
          </div>
          <button
            onClick={handleOpen}
            className="capitalize w-16 md:w-auto flex items-center justify-center px-4 py-1 gap-2 bg-purple-500 text-gray-100 hover:text-white h-full"
          >
            <p className="hidden md:flex">menu</p>
            <Menu />
          </button>
        </div>
      </div>
      {/*sidebar*/}
      {open && <Sidebar isOpen={open} onClose={() => setOpen(false)} />}
    </div>
  );
}
