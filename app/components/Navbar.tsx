"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4"
    >
      <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-zinc-950/50 backdrop-blur-md border border-zinc-800 shadow-xl">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
