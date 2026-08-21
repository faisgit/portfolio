"use client";

import { useState, useEffect } from "react";
import type { Project, Experience } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Trash2, Plus, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  
  // Forms state
  const [projectForm, setProjectForm] = useState({ title: "", description: "", link: "", tags: "" });
  const [expForm, setExpForm] = useState<{
    role: string;
    company: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    description: string;
  }>({ role: "", company: "", startDate: undefined, endDate: undefined, description: "" });
  
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      setProjects(data.projects || []);
      setExperiences(data.experiences || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string, type: "project" | "experience") => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;
    try {
      await fetch(`/api/portfolio?id=${id}&type=${type}`, { method: "DELETE" });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...projectForm,
      tags: projectForm.tags.split(",").map(t => t.trim()).filter(Boolean)
    };
    
    try {
      await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "project", payload })
      });
      setProjectForm({ title: "", description: "", link: "", tags: "" });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!expForm.startDate) {
      alert("Start Date is required.");
      return;
    }
    const payload = {
      ...expForm,
      startDate: format(expForm.startDate, "MMM yyyy"),
      endDate: expForm.endDate ? format(expForm.endDate, "MMM yyyy") : ""
    };

    try {
      await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "experience", payload })
      });
      setExpForm({ role: "", company: "", startDate: undefined, endDate: undefined, description: "" });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">Loading Admin Dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Admin Dashboard
          </h1>
          <Link href="/">
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
              Return to Website
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PROJECTS SECTION */}
          <div className="space-y-8">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Add New Project</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddProject} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Title</Label>
                    <Input required value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} className="bg-zinc-950/50 border-zinc-800" placeholder="My Cool Project" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Link</Label>
                    <Input required value={projectForm.link} onChange={e => setProjectForm({...projectForm, link: e.target.value})} className="bg-zinc-950/50 border-zinc-800" placeholder="https://..." />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Tags (comma separated)</Label>
                    <Input required value={projectForm.tags} onChange={e => setProjectForm({...projectForm, tags: e.target.value})} className="bg-zinc-950/50 border-zinc-800" placeholder="React, Tailwind, Node.js" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Description</Label>
                    <Textarea required value={projectForm.description} onChange={e => setProjectForm({...projectForm, description: e.target.value})} className="bg-zinc-950/50 border-zinc-800 min-h-[100px]" placeholder="A brief description..." />
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Plus className="w-4 h-4 mr-2" /> Add Project
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Existing Projects</h2>
              {projects.map(p => (
                <div key={p.id} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg flex justify-between items-start group">
                  <div>
                    <h3 className="font-bold text-white">{p.title}</h3>
                    <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{p.description}</p>
                    <div className="text-xs text-purple-400 mt-2">{p.tags.join(", ")}</div>
                  </div>
                  <button onClick={() => handleDelete(p.id, "project")} className="p-2 text-zinc-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              {projects.length === 0 && <p className="text-zinc-500 text-sm">No projects found.</p>}
            </div>
          </div>

          {/* EXPERIENCES SECTION */}
          <div className="space-y-8">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Add New Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddExperience} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Role</Label>
                    <Input required value={expForm.role} onChange={e => setExpForm({...expForm, role: e.target.value})} className="bg-zinc-950/50 border-zinc-800" placeholder="Frontend Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Company</Label>
                    <Input required value={expForm.company} onChange={e => setExpForm({...expForm, company: e.target.value})} className="bg-zinc-950/50 border-zinc-800" placeholder="Google" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 flex flex-col">
                      <Label className="text-zinc-300">Start Date</Label>
                      <Popover>
                        <PopoverTrigger
                          render={
                            <Button variant="outline" className={cn("bg-zinc-950/50 border border-zinc-800 justify-start text-left font-normal", !expForm.startDate && "text-zinc-500")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {expForm.startDate ? format(expForm.startDate, "MMM yyyy") : <span>Pick a date</span>}
                            </Button>
                          }
                        />
                        <PopoverContent className="w-auto p-0 border-zinc-800 bg-zinc-950 text-white">
                          <Calendar mode="single" selected={expForm.startDate} onSelect={(date) => setExpForm({...expForm, startDate: date})} />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <Label className="text-zinc-300">End Date</Label>
                      <Popover>
                        <PopoverTrigger
                          render={
                            <Button variant="outline" className={cn("bg-zinc-950/50 border border-zinc-800 justify-start text-left font-normal", !expForm.endDate && "text-zinc-500")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {expForm.endDate ? format(expForm.endDate, "MMM yyyy") : <span>Present (Leave empty)</span>}
                            </Button>
                          }
                        />
                        <PopoverContent className="w-auto p-0 border-zinc-800 bg-zinc-950 text-white">
                          <Calendar mode="single" selected={expForm.endDate} onSelect={(date) => setExpForm({...expForm, endDate: date})} />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Description</Label>
                    <Textarea required value={expForm.description} onChange={e => setExpForm({...expForm, description: e.target.value})} className="bg-zinc-950/50 border-zinc-800 min-h-[100px]" placeholder="What did you do..." />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" /> Add Experience
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Existing Experiences</h2>
              {experiences.map(e => (
                <div key={e.id} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg flex justify-between items-start group">
                  <div>
                    <h3 className="font-bold text-white">{e.role}</h3>
                    <div className="text-sm text-blue-400">{e.company} <span className="text-zinc-500">| {e.startDate} - {e.endDate || "Present"}</span></div>
                    <p className="text-sm text-zinc-400 mt-2 line-clamp-2">{e.description}</p>
                  </div>
                  <button onClick={() => handleDelete(e.id, "experience")} className="p-2 text-zinc-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              {experiences.length === 0 && <p className="text-zinc-500 text-sm">No experiences found.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
