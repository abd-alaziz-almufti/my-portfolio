"use client";

import React from "react";
import Navbar from "./components/Navbar";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ExternalLink, Mail, User } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
  </svg>
);
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Real Estate Management System (Laravel) – Multi-Tenant SaaS",
      description: "Multi-tenant Laravel Real Estate System for property & unit management, tenant bookings, lease & payment tracking, maintenance requests, accounting, internal chat, and notifications. Fully responsive & SaaS-ready.",
      image: "/images/project1.png",
      tech: ["Laravel", "Livewire", "filament", "MySQL", "React.js", "Alpine"],
      live: "#",
      github: "https://github.com/abd-alaziz-almufti/real-estate-system",
    },
    {
      id: 2,
      title: "Smart Expense Management",
      description: "Smart Expense Manager built with Laravel & Filament. Integrated with OpenAI to analyze spending habits and generate personalized financial optimization plans.",
      image: "/images/project2.png",
      tech: ["Laravel", "Livewire", "Filament", "MySQL", "openai-api", "financial-analysis"],
      live: "#",
      github: "https://github.com/abd-alaziz-almufti/Expense-Manager-Project",
    },
    {
      id: 3,
      title: "Unified University Platform",
      description: "Establishing an information center for the Islamic University, developing the university's website to keep pace with advancements, creating a ticketing system, and integrating artificial intelligence to make it easier for students to use the website.",
      image: "/images/project3.png",
      tech: ["Laravel", "React", "Filament", "PostgreSQL", "Livewire laravel", "Alpine", "API"],
      live: "#",
      github: "https://github.com/abd-alaziz-almufti/uup-iug",
    },
  ];

  const skills = [
    "Laravel", "Livewire", "PHP", "React.js", "Next.js", "Node.js",
    "TypeScript", "Tailwind CSS", "MySQL", "PostgreSQL", "RabbitMQ", "Docker"
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        </div>

        <motion.div
          className="container mx-auto px-6 relative z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 flex justify-center relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative group">
              {/* Animated Glow Backlight */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-blue-600/40 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />

              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur-[1px] transition-all duration-500" />

              {/* Image Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-black/50 overflow-hidden glass p-1.5 backdrop-blur-2xl">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/MY Profile.jpeg"
                    alt="Abdalaziz M Almufti"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I&apos;m <br />
            <span className="text-gradient">Abdalaziz M Almufti</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
            Full Stack Web Developer specialized in building scalable architectures,
            high-performance backends, and beautiful frontend experiences.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center gap-4">
            <a href="#projects" className="group px-8 py-4 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-all">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 glass rounded-full font-medium hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="glass-card p-10 md:p-14 rounded-[2rem]"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
              <User className="text-primary w-8 h-8" />
              About Me
            </h2>
            <div className="text-lg text-gray-300 space-y-4 leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with a strong focus on system architecture and performance optimization.
                I specialize in migrating legacy systems to modern frameworks, ensuring robust security, and building scalable microservices.
              </p>
              <p>
                Whether it&apos;s optimizing database queries with eager loading, implementing caching strategies, or crafting
                stunning user interfaces, I take pride in delivering end-to-end solutions that exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-gray-400">The tools and technologies I use to build scalable systems.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass px-6 py-3 rounded-xl font-medium text-gray-200 border border-white/5 hover:border-primary/50 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400">Showcasing my best work in architecture and frontend development.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded-md text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a href={project.live} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                      <GithubIcon className="w-4 h-4" /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10 border-t border-white/5 mt-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              I&apos;m currently available for freelance work and full-time opportunities.
              If you have a project that needs some creative and technical magic, let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:aalmufti@students.iugaza.edu.ps" className="px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                Say Hello
              </a>
              <a href="https://www.linkedin.com/in/abdalaziz-almufti-a6a9a53a9" target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://wa.me/972567048866" target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <WhatsappIcon className="w-5 h-5 text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
