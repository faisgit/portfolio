"use client";

import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navbar } from "./components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Cloud, Mail, Send, Wrench } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  SiAppwrite,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { useEffect, useState } from "react";
import type { Experience, Project } from "@/lib/data";

const skills = [
  { name: "Flutter", icon: SiFlutter },
  { name: "React Native", icon: SiReact },
  { name: "Dart", icon: SiDart },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "AWS", icon: Cloud },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Appwrite", icon: SiAppwrite },
  { name: "Git", icon: SiGit },
];

const notes = [
  "Mobile apps with Flutter and React Native, from UI flows to backend integration.",
  "Web apps and dashboards with React, Next.js, Firebase, Supabase, and AWS.",
  "Always learning current tools and using new technology where it solves a real problem.",
];

const stats = [
  { value: "2025", label: "Working in production teams" },
  { value: "2+", label: "Published personal products" },
  { value: "Full-stack", label: "Mobile and web development" },
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function compactDescription(description: string) {
  return description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 3)
    .join(" ");
}

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects || []);
        setExperiences(data.experiences || []);
      })
      .catch((err) => console.error("Error fetching portfolio data", err));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 900);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-zinc-950 selection:bg-[#e8784b]/25">
      <AnimatedBackground />
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-36 sm:px-6 sm:pt-28 lg:px-8">
        <section id="home" className="grid min-h-[auto] items-start gap-8 pb-12 pt-6 sm:min-h-[78vh] sm:gap-10 sm:pb-16 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#b65332] sm:mb-5 sm:text-xs sm:tracking-[0.22em]">
              Mobile app and web developer / Nagpur
            </p>
            <h1 className="max-w-4xl text-[2.65rem] font-semibold leading-[1.03] tracking-normal text-zinc-950 sm:text-6xl lg:text-7xl">
              Mobile and web developer building useful products.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 sm:mt-7 sm:text-lg sm:leading-8">
              I am Faisal Ansari, a developer working with Flutter, React Native,
              Next.js, React, Firebase, Supabase, AWS, and modern product tooling.
            </p>
            <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 sm:h-11"
              >
                View work
                <ArrowUpRight className="ml-2 size-4" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-900/15 bg-white/50 px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white sm:h-11"
              >
                Email me
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl gap-2 sm:mt-12 sm:grid-cols-3 sm:gap-px sm:overflow-hidden sm:rounded-2xl sm:border sm:border-zinc-900/10 sm:bg-zinc-900/10">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-900/10 bg-[#fffaf2]/85 p-4 sm:rounded-none sm:border-0">
                  <p className="text-xl font-semibold text-zinc-950">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-600">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="rounded-[1.5rem] border border-zinc-900/10 bg-[#fffaf2]/78 p-4 shadow-sm backdrop-blur sm:rounded-[2rem] sm:p-6 lg:mt-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Current focus</p>
            <div className="mt-5 space-y-4">
              {notes.map((note) => (
                <p key={note} className="rounded-2xl bg-white/70 p-3.5 text-sm leading-6 text-zinc-700 sm:p-4 sm:leading-7">
                  {note}
                </p>
              ))}
            </div>
          </motion.aside>
        </section>

        <section id="projects" className="scroll-mt-32 border-t border-zinc-900/10 py-14 sm:scroll-mt-28 sm:py-20">
          <motion.div {...fadeIn} className="mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Selected work</p>
              <h2 className="mt-3 text-2xl font-semibold text-zinc-950 sm:text-3xl">Projects with a clear job</h2>
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.id || project.title}
                {...fadeIn}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-[1.4rem] border border-zinc-900/10 bg-[#fffaf2]/82 p-5 shadow-sm backdrop-blur transition-transform hover:-translate-y-1 sm:rounded-[1.75rem] sm:p-6"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                      0{index + 1} / Project
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-zinc-950 sm:text-2xl">{project.title}</h3>
                  </div>
                  <a
                    href={project.link}
                    className="rounded-full border border-zinc-900/10 bg-white/70 p-2 text-zinc-500 transition-colors hover:border-[#b65332]/40 hover:text-[#b65332]"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                </div>
                <p className="mt-5 text-sm leading-7 text-zinc-700 sm:min-h-28">
                  {compactDescription(project.description)}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-zinc-900/10 bg-white/55 px-2.5 py-1 font-mono text-xs text-zinc-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-32 border-t border-zinc-900/10 py-14 sm:scroll-mt-28 sm:py-20">
          <motion.div {...fadeIn} className="mb-10 flex items-center gap-3">
            <BriefcaseBusiness className="size-5 text-[#227d89]" />
            <h2 className="text-2xl font-semibold text-zinc-950 sm:text-3xl">Experience</h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id || `${exp.company}-${index}`}
                {...fadeIn}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="grid gap-4 rounded-[1.4rem] border border-zinc-900/10 bg-white/45 p-5 sm:gap-5 sm:rounded-[1.5rem] sm:p-6 md:grid-cols-[220px_1fr]"
              >
                <p className="font-mono text-sm text-zinc-500">
                  {exp.startDate} - {exp.endDate || "Present"}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-950">{exp.role}</h3>
                  <p className="mt-1 text-[#227d89]">{exp.company}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-700">{exp.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-32 border-t border-zinc-900/10 py-14 sm:scroll-mt-28 sm:py-20">
          <motion.div {...fadeIn} className="mb-10 flex items-center gap-3">
            <Wrench className="size-5 text-[#b65332]" />
            <h2 className="text-2xl font-semibold text-zinc-950 sm:text-3xl">Tools I use</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill) => (
              <div key={skill.name} className="flex min-h-16 items-center gap-3 rounded-2xl border border-zinc-900/10 bg-white/55 p-4 shadow-sm sm:min-h-20">
                <skill.icon className="size-5 text-[#227d89]" />
                <span className="text-sm text-zinc-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-32 border-t border-zinc-900/10 py-14 sm:scroll-mt-28 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <motion.div {...fadeIn}>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Contact</p>
              <h2 className="mt-3 text-2xl font-semibold text-zinc-950 sm:text-3xl">Have a project or role in mind?</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-700">
                Send the details directly. I care most about clear requirements, realistic timelines,
                and work where the interface has to serve actual users.
              </p>
              <div className="mt-8 flex gap-3">
                <a className="rounded-full border border-zinc-900/10 bg-white/55 p-2 text-zinc-600 hover:text-zinc-950" href="#">
                  <FaGithub className="size-5" />
                </a>
                <a className="rounded-full border border-zinc-900/10 bg-white/55 p-2 text-zinc-600 hover:text-zinc-950" href="#">
                  <FaLinkedin className="size-5" />
                </a>
                <a className="rounded-full border border-zinc-900/10 bg-white/55 p-2 text-zinc-600 hover:text-zinc-950" href="mailto:hello@example.com">
                  <Mail className="size-5" />
                </a>
              </div>
            </motion.div>

            <motion.form {...fadeIn} transition={{ duration: 0.45, delay: 0.08 }} onSubmit={handleSubmit} className="space-y-5 rounded-[1.4rem] border border-zinc-900/10 bg-[#fffaf2]/82 p-5 shadow-sm backdrop-blur sm:rounded-[1.75rem] sm:p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-700">
                    Name
                  </Label>
                  <Input id="name" required placeholder="Your name" className="h-11 rounded-xl border-zinc-900/10 bg-white/70" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-700">
                    Email
                  </Label>
                  <Input id="email" type="email" required placeholder="you@example.com" className="h-11 rounded-xl border-zinc-900/10 bg-white/70" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-700">
                  Message
                </Label>
                <Textarea id="message" required placeholder="Tell me what you are building..." className="min-h-36 rounded-xl border-zinc-900/10 bg-white/70" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="h-11 w-full rounded-full bg-zinc-950 text-white hover:bg-zinc-800">
                {isSubmitting ? "Sending..." : "Send message"}
                {!isSubmitting && <Send className="ml-2 size-4" />}
              </Button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900/10 px-5 py-8 text-center text-sm text-zinc-500">
        <p>Faisal Ansari. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
