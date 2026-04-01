"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu } from "@/components/site/icons";
import { DEVPOST_REGISTER_URL } from "@/lib/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#themes", label: "Themes" },
  { href: "#build", label: "Build" },
  { href: "#requirements", label: "Rules" },
  { href: "#prizes", label: "Prizes" },
  { href: "#judges", label: "Judges" },
  { href: "#criteria", label: "Criteria" },
  { href: "#timeline", label: "Timeline" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 border-b-2 border-slate-200/80 ${
        scrolled ? "bg-[#faf8ff]/95 shadow-sm backdrop-blur-sm" : "bg-[#faf8ff]/80"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="#top"
          className="flex shrink-0 items-center gap-2 text-base font-bold tracking-tight text-slate-800 sm:text-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-200 text-violet-800">
            <Cpu className="h-5 w-5" aria-hidden />
          </span>
          <span>
            AI Automate <span className="text-violet-600">2026</span>
          </span>
        </Link>
        <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-violet-100 hover:text-violet-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={DEVPOST_REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md bg-teal-400 px-5 py-2.5 text-sm font-semibold text-teal-950 shadow-sm transition hover:bg-teal-500"
        >
          Register
        </Link>
      </nav>
    </motion.header>
  );
}
