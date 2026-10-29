import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, CircleHelp, Lightbulb, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.name, description: project.summary, openGraph: { title: `${project.name} | Mahim Islam`, description: project.summary, type: "article" } };
}
export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="min-h-screen pb-20 pt-24"><div className="container"><Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><ArrowLeft size={16}/> Back to all projects</Link><div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.1fr_.9fr]"><div><p className="kicker">Project {project.number} · {project.eyebrow}</p><h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">{project.name}<span className="text-[#8bb3ff]">.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{project.description}</p><div className="mt-8 flex flex-wrap gap-3"><a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">View live project <ExternalLink size={16}/></a><a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> Client repository <ArrowUpRight size={14}/></a></div></div><div className={`project-art ${project.accent} min-h-[280px] rounded-2xl border border-white/10`}><div className="art-window"><div className="art-top"><span className="art-dot"/><span className="art-dot"/><span className="art-dot"/></div><div className="art-lines"><div className="art-line"/><div className="art-line"/><div className="art-line"/><div className="art-line"/><div className="art-line"/><div className="art-line"/></div></div><span className="absolute bottom-5 left-5 text-xs tracking-[.2em] text-white/55">MAHIM.DEV / {project.number}</span></div></div>
      <section className="mt-16 grid gap-5 md:grid-cols-2"><div className="glass rounded-2xl p-6 sm:p-8"><h2 className="flex items-center gap-2 text-xl font-semibold"><CheckCircle2 className="text-[#8bb3ff]" size={20}/> Key features</h2><ul className="mt-5 space-y-3">{project.features.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8bb3ff]"/>{item}</li>)}</ul></div><div className="glass rounded-2xl p-6 sm:p-8"><h2 className="flex items-center gap-2 text-xl font-semibold"><CircleHelp className="text-[#8bb3ff]" size={20}/> Challenges & learnings</h2><ul className="mt-5 space-y-3">{project.challenges.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8bb3ff]"/>{item}</li>)}</ul></div></section>
      <section className="mt-5 grid gap-5 md:grid-cols-[.8fr_1.2fr]"><div className="glass rounded-2xl p-6 sm:p-8"><h2 className="text-xl font-semibold">Technology stack</h2><div className="mt-5 flex flex-wrap gap-2">{project.stack.map(tech=><span key={tech} className="skill-pill">{tech}</span>)}</div></div><div className="glass rounded-2xl p-6 sm:p-8"><h2 className="flex items-center gap-2 text-xl font-semibold"><Lightbulb className="text-[#8bb3ff]" size={20}/> Future improvements</h2><ul className="mt-5 space-y-3">{project.future.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8bb3ff]"/>{item}</li>)}</ul></div></section>
      <div className="mt-12 border-t border-white/10 pt-7"><Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"><ArrowLeft size={15}/> Explore more projects</Link></div>
    </div></main>;
}
