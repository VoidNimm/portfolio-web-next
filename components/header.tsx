"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="z-[999] relative">
      {/* Header bar: hidden di mobile, tampil di desktop */}
      <motion.div
        className="hidden sm:block fixed top-0 left-1/2 h-12 w-full rounded-none border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      {/* Desktop nav: diselaraskan dengan tinggi & posisi header bar agar teks benar-benar center */}
      <nav className="hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 h-[3.25rem] items-center">
        <ul className="flex h-full items-center justify-center w-[22rem] flex-wrap gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative flex items-center justify-center px-3 py-2 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile hamburger: ada jarak dari tepi + ukuran 1.4x */}
      <div className="sm:hidden fixed top-4 left-4">
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-[0.5rem] border border-white/40 shadow-lg shadow-black/[0.03] dark:bg-gray-950/80 dark:border-black/40"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <HiMenu className="h-7 w-7 text-gray-700 dark:text-gray-200" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <motion.div
          className="sm:hidden fixed inset-0 w-full h-svh bg-white/95 backdrop-blur-[0.5rem] dark:bg-gray-950/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute top-2 right-2">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-[0.5rem] border border-white/40 shadow-lg shadow-black/[0.03] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation"
            >
              <HiX className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-center h-full gap-y-3 text-base font-medium text-gray-600 dark:text-gray-400">
            {links.map((link) => (
              <motion.li
                className="flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex items-center justify-center px-2 py-2 rounded-md hover:text-gray-900 dark:hover:text-gray-200 transition",
                    {
                      "text-gray-900 dark:text-gray-200":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100/80 dark:bg-gray-800/80 rounded-md absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
