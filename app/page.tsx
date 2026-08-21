"use client";

import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navbar } from "./components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2, Briefcase, User, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiTailwindcss, SiFramer, SiGraphql, SiPostgresql, SiGit 
} from "react-icons/si";
import { useState, useEffect } from "react";
import type { Project, Experience } from "@/lib/data";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/api/portfolio")
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects || []);
        setExperiences(data.experiences || []);
      })
      .catch(err => console.error("Error fetching portfolio data", err));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1500);
  };

  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
    { name: "GraphQL", icon: SiGraphql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit }
  ];

  return (
    <div className="relative min-h-screen text-zinc-50 overflow-x-hidden selection:bg-purple-500/30">
      <AnimatedBackground />
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[70vh] flex flex-col justify-center items-start pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-purple-400 font-medium tracking-wider mb-4 uppercase">Welcome to my universe</h2>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I&apos;m Faisal Ansari.<br />
            I build digital experiences.
          </motion.h1>

          <motion.p 
            className="text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products.
          </motion.p>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-8">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-zinc-700 hover:bg-zinc-800">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-12"
          >
            <Code2 className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent ml-4"></div>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm text-zinc-300 font-medium shadow-xl hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors"
              >
                <skill.icon className="w-5 h-5 text-purple-400" />
                {skill.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-12"
          >
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent ml-4"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                  <div className="mb-2 md:mb-0 text-zinc-400 font-medium md:text-right mt-1">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </div>
                  <div className="md:col-span-3 bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-zinc-800/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="text-purple-400 mb-4">{exp.company}</div>
                    <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-12"
          >
            <User className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent ml-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-zinc-900/40 border-zinc-800 backdrop-blur-sm flex flex-col hover:border-zinc-700 transition-colors overflow-hidden group">
                  <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-zinc-800/50 rounded-lg">
                        <Code2 className="w-6 h-6 text-purple-400" />
                      </div>
                      <a href={project.link} className="text-zinc-400 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <CardTitle className="text-xl mb-2 text-zinc-100">{project.title}</CardTitle>
                    <CardDescription className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-zinc-300 bg-zinc-800/80 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-32 max-w-2xl mx-auto text-center pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-zinc-400">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-6 text-left bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300">Name</Label>
                <Input id="name" required placeholder="John Doe" className="bg-zinc-950/50 border-zinc-800 focus-visible:ring-purple-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">Email</Label>
                <Input id="email" type="email" required placeholder="john@example.com" className="bg-zinc-950/50 border-zinc-800 focus-visible:ring-purple-500" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-zinc-300">Message</Label>
              <Textarea id="message" required placeholder="Hello Faisal, I'd like to talk about..." className="min-h-[150px] bg-zinc-950/50 border-zinc-800 focus-visible:ring-purple-500" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-white text-black hover:bg-zinc-200 h-12 rounded-xl text-md">
              {isSubmitting ? "Sending..." : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 mt-16"
          >
            <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:text-purple-400 transition-colors text-zinc-400">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:text-blue-400 transition-colors text-zinc-400">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:text-red-400 transition-colors text-zinc-400">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-500 text-sm border-t border-zinc-900">
        <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        <p className="mt-1">© {new Date().getFullYear()} Faisal Ansari. All rights reserved.</p>
      </footer>
    </div>
  );
}
