"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Tools", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 rounded-3xl border border-zinc-900/10 bg-[#fffaf2]/90 px-4 py-3 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:rounded-full">
        <Link href="#home" className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-900 sm:tracking-[0.24em]">
          Faisal Ansari
        </Link>
        <div className="-mx-1 flex max-w-full items-center gap-2 overflow-x-auto pb-1 sm:mx-0 sm:gap-7 sm:overflow-visible sm:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="shrink-0 rounded-full px-2.5 py-1 text-sm text-zinc-600 transition-colors hover:bg-zinc-900/5 hover:text-zinc-950 sm:px-0 sm:py-0 sm:hover:bg-transparent"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
