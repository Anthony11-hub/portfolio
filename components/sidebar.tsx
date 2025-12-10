import { MoveUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:block relative overflow-hidden h-full w-full">
            <Image
              src={"/male-programmer-working-developing-new-html-script.jpg"}
              alt=""
              width={500}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="">
            {/* Header */}
            <div className="flex items-center justify-end gap-4 p-6 bg-black">
              <div className="hidden md:flex items-center border-r-2 border-black dark:border-accent rounded-full px-4 py-2 space-x-2 bg-yellow-400 text-black h-full">
                <a href="mailto:tonycomputers6@gmail.com" className="text-sm">
                  chat@m-an.dev
                </a>
                <MoveUpRight />
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full border-2 border-yellow-400 transition-colors text-yellow-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="bg-black text-white h-[calc(100vh-88px)] flex flex-col">
              <div className="p-8">
                <nav className="space-y-6">
                  <Link
                    href="/projects"
                    className="block text-gray-400 hover:text-white text-2xl transition-colors"
                  >
                    My Work
                  </Link>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white text-2xl transition-colors"
                  >
                    Resume
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-white text-2xl transition-colors"
                  >
                    Blog
                  </a>
                </nav>
              </div>
              <div className="mt-auto p-8">
                <h3 className="text-yellow-400 text-xl font-semibold mb-4">
                  Connect on Socials
                </h3>
                <div className="flex gap-4 text-sm">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    email
                  </a>
                  <span className="text-yellow-400">|</span>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    linkedin
                  </a>
                  <span className="text-yellow-400">|</span>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    twitter
                  </a>
                  <span className="text-yellow-400">|</span>
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    behance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
