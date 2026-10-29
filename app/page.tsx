import Link from "next/link";
import Image from "next/image";

import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Github,
  Linkedin,
  Mail,
  MonitorSmartphone,
  Sparkles,
  CheckCircle2,
  Database,
  Globe,
  Layers,
  Terminal,
  Workflow,
  Zap,
  Phone,
  Facebook,
  Palette,
  BookOpen,
} from "lucide-react";

import Navbar from "@/components/navbar";
import { projects } from "@/lib/projects";

const skills = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "REST APIs", "MongoDB", "Better Auth"],
  },
  {
    title: "Tools & foundations",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Python",
      "OOP",
      "Data Structures & Algorithms",
      "Problem Solving",
    ],
  },
];

const techIcons: Record<string, React.ElementType> = {
  HTML5: Globe,
  CSS3: Layers,
  "JavaScript (ES6+)": Zap,
  TypeScript: Code2,
  React: Code2,
  "Next.js": Braces,
  "Tailwind CSS": Layers,
  "Responsive Design": MonitorSmartphone,
  "Node.js": Terminal,
  "REST APIs": Workflow,
  MongoDB: Database,
  "Better Auth": CheckCircle2,
  Git: Workflow,
  GitHub: Github,
  Vercel: Globe,
  Python: Terminal,
  OOP: Braces,
  "Data Structures & Algorithms": Workflow,
  "Problem Solving": Zap,
};

function ProjectArtwork({
  image,
  accent,
  number,
}: {
  image?: string;
  accent: string;
  number: string;
}) {
  if (image) {
    return (
      <div className="relative h-52 w-full overflow-hidden border-b border-white/10 bg-[#0c111d]">
        <Image
          src={image}
          alt="Project preview"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c111d] via-transparent to-transparent opacity-80" />
        <span className="absolute bottom-3 left-4 rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-sky-300 backdrop-blur-md">
          PROJECT / {number}
        </span>
      </div>
    );
  }

  return (
    <div className={`project-art ${accent}`} aria-hidden="true">
      <div className="art-window">
        <div className="art-top">
          <span className="art-dot" />
          <span className="art-dot" />
          <span className="art-dot" />
        </div>

        <div className="art-lines">
          <div className="art-line" />
          <div className="art-line" />
          <div className="art-line" />
          <div className="art-line" />
          <div className="art-line" />
          <div className="art-line" />
        </div>
      </div>

      <span className="absolute bottom-4 left-5 text-xs tracking-[.2em] text-white/45">
        PROJECT / {number}
      </span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-[760px] items-center overflow-hidden pb-16 pt-32 sm:min-h-[800px]"
      >
        <div className="hero-grid absolute inset-0" />

        <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-sky-300/[.10] blur-[110px]" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-pink-300/[.08] blur-[100px]" />

        <div className="container relative grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            {/* Status Badge with Radar Pulse Effect */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md transition-all hover:border-emerald-500/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Open to Collaboration & New Opportunities
            </div>

            {/* Kicker Text with Animated Letters */}
            <p className="kicker mb-4 font-semibold tracking-widest text-sky-400">
              {"HELLO, I’M MOYNOL ISLAM MAHIM".split("").map((char, index) => (
                <span
                  key={index}
                  className="animated-letter"
                  style={{
                    animationDelay: `${index * 0.04}s, ${1 + index * 0.05}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-6xl lg:text-[4.5rem]">
              Building modern
              <br className="hidden sm:block" />
              web applications{" "}
              <span className="bg-gradient-to-r from-[#b9e9fa] via-[#cdbdff] to-[#f0b8df] bg-clip-text text-transparent">
                with purpose.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Full-Stack Web Developer and CSE student passionate about building
              responsive, user-friendly web applications and practical software
              solutions. Interested in AI-driven applications and data-informed
              market forecasting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                Explore My Work <ArrowDown size={16} />
              </a>

              <a href="/resume.pdf" download className="btn btn-secondary">
                <ArrowDownToLine size={16} />
                Download Résumé
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-sky-300"
                href="https://github.com/mahim157"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
                <ArrowUpRight size={13} />
              </a>

              <a
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-sky-300"
                href="https://www.linkedin.com/in/md-moynol-islam-mahim"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
                <ArrowUpRight size={13} />
              </a>

              <a
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-sky-300"
                href="https://www.facebook.com/ma.him.3040"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size={18} />
                Facebook
                <ArrowUpRight size={13} />
              </a>

              <a
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-pink-300"
                href="mailto:moynolmahim58@gmail.com"
              >
                <Mail size={17} />
                Email
              </a>
            </div>
          </div>

          {/* Profile card */}

          <div className="mx-auto w-full max-w-[370px] lg:ml-auto">
            <div className="profile-ring rounded-[34px]">
              <div className="relative flex aspect-[4/4.6] flex-col items-center justify-center overflow-hidden rounded-[33px] bg-[#0c111d] p-8 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(135,206,235,.16),transparent_48%)]" />

                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-pink-400/[.07] blur-[70px]" />

                {/* Profile photo */}
                <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border border-sky-200/30 bg-[#111B2E] shadow-[0_0_40px_rgba(130,169,232,0.16)] ring-4 ring-white/[.04]">
                  <Image
                    src="/images/profile1.png"
                    alt="Moynol Islam Mahim"
                    fill
                    priority
                    sizes="144px"
                    className="object-cover object-center"
                  />
                </div>

                <p className="relative mt-6 text-xl font-semibold">
                  Moynol Islam Mahim
                </p>

                <p className="relative mt-2 text-sm text-slate-400">
                  Full-Stack Web Developer
                </p>

                <div className="relative mt-7 flex items-center gap-2 rounded-full border border-white/10 bg-white/[.025] px-4 py-2 text-xs text-slate-300">
                  <Sparkles size={14} className="text-[#cdbdff]" />
                  Turning ideas into digital solutions
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <MonitorSmartphone size={14} />
              Responsive by design
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section border-t border-white/[.05]">
        <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="kicker">A little about me</p>

            <h2 className="section-title">
              Curious mind.
              <br />
              Practical builder.
            </h2>

            <div className="mt-7 flex items-center gap-3 text-sm text-slate-400">
              <span className="h-px w-10 bg-[#b9e9fa]" />
              Based in Bangladesh
            </div>
          </div>

          <div className="space-y-5 text-[1.02rem] leading-8 text-slate-400">
            <p>
              I’m a Full-Stack Developer and Computer Science and Engineering
              student at Daffodil International University. My programming journey
              started out of pure curiosity for how websites work, which quickly
              turned into a deep passion for software development and building
              interactive digital experiences.
            </p>

            <p>
              My development work spans frontend interfaces, APIs, authentication,
              and data-driven features. I value readable code, thoughtful user
              experiences, responsive layouts, and maintainable software architecture.
            </p>

            
        <p>
                  Beyond technology, I love expressing my creativity through drawing and
                    painting  as well as experimenting with cooking .
                I also have a passion for planting trees and gardening ,
                 along with being an avid reader of technology and literature.
                   These diverse interests keep my mind balanced, fresh, and sharp for
                            problem-solving in code.
</p>
            
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section bg-white/[.018]">
        <div className="container">
          <p className="kicker">What I work with</p>

          <h2 className="section-title">Skills & technologies</h2>

          <p className="section-copy">
            A growing toolkit for designing, building, and shipping modern web
            applications.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {skills.map((group, i) => (
              <div key={group.title} className="glass rounded-2xl p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#b9e9fa]/10 text-[#b9e9fa]">
                  {i === 0 ? (
                    <Code2 size={21} />
                  ) : i === 1 ? (
                    <Braces size={21} />
                  ) : (
                    <MonitorSmartphone size={21} />
                  )}
                </div>

                <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const TechIcon = techIcons[item] ?? Code2;

                    return (
                      <span
                        key={item}
                        className="skill-pill inline-flex items-center gap-2"
                      >
                        <TechIcon size={15} aria-hidden="true" />
                        <span>{item}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section">
        <div className="container grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="kicker">The foundation</p>

            <h2 className="section-title">Education & growth</h2>

            <p className="section-copy">
              Building a strong foundation in computing while applying what I
              learn through practical projects.
            </p>
          </div>

          <div className="glass space-y-8 rounded-2xl p-6 sm:p-8">
            {/* Undergraduate */}
            <div className="flex gap-4">
              <span className="timeline-dot" />

              <div>
                <p className="text-sm text-[#b9e9fa]">
                  Undergraduate · In progress
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  B.Sc. in Computer Science & Engineering
                </h3>

                <p className="mt-2 text-slate-300">
                  Daffodil International University
                </p>

                <p className="mt-1 text-sm text-slate-500">CGPA: 3.22</p>

                <p className="mt-4 leading-7 text-slate-400">
                  Coursework and hands-on practice have helped me develop a
                  foundation in programming, object-oriented concepts, data
                  structures, algorithms, and software development.
                </p>
              </div>
            </div>

            {/* HSC */}
            <div className="flex gap-4 border-t border-white/10 pt-6">
              <span className="timeline-dot" />

              <div>
                <p className="text-sm text-[#b9e9fa]">
                  Higher Secondary Certificate (HSC) · 2021
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Palash Thana Central College, Bangladesh
                </h3>

                <p className="mt-1 text-sm text-slate-500">GPA: 4.92 / 5.00</p>
              </div>
            </div>

            {/* SSC */}
            <div className="flex gap-4 border-t border-white/10 pt-6">
              <span className="timeline-dot" />

              <div>
                <p className="text-sm text-[#b9e9fa]">
                  Secondary School Certificate (SSC) · 2019
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Charsindur Govt. High School, Bangladesh
                </h3>

                <p className="mt-1 text-sm text-slate-500">GPA: 4.39 / 5.00</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-semibold text-slate-200">
                Certifications
              </p>

              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-400">
                <li>
                  • AWS Academy Graduate · AWS Academy Cloud Foundations
                </li>
                <li>• AI-Pro Aptitude Hacks · Grameenphone Academy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section border-y border-white/[.05] bg-white/[.018]"
      >
        <div className="container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="kicker">Selected work</p>

              <h2 className="section-title mb-0">Projects I’ve built.</h2>
            </div>

            <a
              href="https://github.com/mahim157"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-sky-300"
            >
              More on GitHub <ArrowUpRight size={15} />
            </a>
          </div>

          <p className="section-copy mt-4">
            Practical projects exploring real-world problems, user experiences,
            and modern web technologies.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="glass project-card group overflow-hidden rounded-2xl"
              >
                <ProjectArtwork
                  image={project.image}
                  accent={project.accent}
                  number={project.number}
                />

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#b9e9fa]">
                    {project.eyebrow}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>

                  <p className="mt-3 min-h-[76px] text-sm leading-6 text-slate-400">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                    <Link
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white"
                      href={`/projects/${project.slug}`}
                    >
                      View details
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} live website`}
                      className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-sky-200/40 hover:text-sky-200"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section">
        <div className="container">
          <div className="glass flex flex-col gap-5 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <p className="kicker">Professional development</p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Learning through building.
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                I’m developing my practical experience through personal projects,
                hands-on experimentation, and continuous learning. My focus is on
                improving software design, problem-solving, and modern development
                workflows.
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#b9e9fa]/10 text-[#b9e9fa]">
              <Code2 size={25} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section pt-10">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101521] px-6 py-12 text-center sm:px-12 sm:py-16">
            {/* Animated Background Glowing Orbs */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-80 -translate-x-1/2 animate-pulse rounded-full bg-sky-300/[.15] blur-[90px]" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 animate-pulse rounded-full bg-pink-300/[.12] blur-[70px] [animation-delay:1s]" />

            <div className="relative">
              <p className="kicker animate-pulse">Have a project in mind?</p>

              <h2 className="section-title text-shimmer mx-auto mt-4 max-w-2xl font-bold">
                Let’s build something useful together.
              </h2>

              <p className="section-copy mx-auto">
                I’m happy to connect about web development, project ideas,
                learning, and collaboration.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a className="btn btn-primary" href="mailto:moynolmahim58@gmail.com">
                  <Mail size={16} />
                  Email me
                </a>

                <a className="btn btn-secondary" href="tel:+8801965206699">
                  <Phone size={16} />
                  Call Me
                </a>

                <a
                  className="btn btn-secondary"
                  href="https://www.linkedin.com/in/md-moynol-islam-mahim"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                  <ArrowUpRight size={14} />
                </a>

                <a
                  className="btn btn-secondary"
                  href="https://www.facebook.com/ma.him.3040"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook size={16} />
                  Facebook
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
                <span>📧 moynolmahim58@gmail.com</span>
                <span>•</span>
                <span>📞 +880 1965-206699</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/[.07] py-7">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <Link href="#home" className="font-semibold text-slate-300">
            mahim<span className="text-[#b9e9fa]">.dev</span>
          </Link>

          <p>Designed and built with care by Mahim Islam.</p>

          <div className="flex gap-4">
            <a
              className="footer-link"
              href="https://github.com/mahim157"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="footer-link"
              href="https://www.linkedin.com/in/md-moynol-islam-mahim"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="footer-link"
              href="https://www.facebook.com/ma.him.3040"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}