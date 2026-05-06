"use client";

import { motion } from "framer-motion";
import { User, Code2, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <nav className="glass px-6 py-3 rounded-full flex gap-6 items-center">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
            <span className="hidden sm:block">{item.name}</span>
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
