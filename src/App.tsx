import {
  ArrowRight,
  Braces,
  BriefcaseBusiness,
  Code2,
  Database,
  GitFork,
  GraduationCap,
  MapPin,
  ServerCog,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { Component as ProfileCard } from "@/components/ui/profile-card-1";

const skills = [
  {
    icon: Code2,
    title: "Problem solving",
    stack: "C++ · DSA · Algorithms",
    note: "The foundation I return to every day.",
  },
  {
    icon: Database,
    title: "Data & databases",
    stack: "Python · SQL · MySQL · MongoDB",
    note: "From structured schemas to useful insights.",
  },
  {
    icon: Braces,
    title: "Web development",
    stack: "React · Vite · JavaScript · CSS",
    note: "Building interfaces that make ideas tangible.",
  },
  {
    icon: ServerCog,
    title: "Backend systems",
    stack: "Node.js · Express · REST APIs · JWT",
    note: "Connecting products, users, and data.",
  },
];

const projects = [
  {
    number: "01",
    title: "FindIt",
    subtitle: "Lost & found for college communities",
    description:
      "A full-stack platform where students can report, discover, and claim lost items. Built around authenticated users, item records, and a practical claim workflow.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    highlight: true,
  },
  {
    number: "02",
    title: "Skill-to-Career Guide",
    subtitle: "A clearer route from skills to roles",
    description:
      "An evolving guidance product that maps what a learner knows to a realistic career path, focused learning plan, and useful resources.",
    tags: ["FastAPI", "PostgreSQL", "JavaScript", "Product thinking"],
    status: "In progress",
  },
  {
    number: "03",
    title: "Bank Management Database",
    subtitle: "Relational design with real constraints",
    description:
      "A MySQL system covering customers, branches, accounts, loans, and transactions—with keys, checks, cascading relationships, and query practice.",
    tags: ["MySQL", "ER modelling", "DDL", "Queries"],
  },
  {
    number: "04",
    title: "Student Manager",
    subtitle: "My first complete C++ project",
    description:
      "A console application with CRUD operations, duplicate checks, structured records, and file persistence—the project that made OOP feel practical.",
    tags: ["C++", "OOP", "File I/O", "CRUD"],
  },
];

function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-start gap-4 sm:mb-14">
      <span className="mt-1 font-mono text-xs font-bold tracking-[0.2em] text-lime-300">
        {index}
      </span>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.045em] text-white sm:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b14] text-[#e7edf7]">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-md bg-lime-300 px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.07] bg-[#070b14]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" className="group flex items-center gap-3 font-mono text-sm font-bold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 transition group-hover:rotate-3">
              NG
            </span>
            <span className="hidden sm:inline">naman.dev</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Now", "#now"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-400 transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <a
            href="https://www.linkedin.com/in/naman-gupta-983b8b369/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white transition hover:border-lime-300/40 hover:bg-lime-300/10"
          >
            Connect
            <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      <section id="home" className="hero-grid relative isolate min-h-screen border-b border-white/[0.07] pt-[4.75rem]">
        <div className="pointer-events-none absolute left-[12%] top-32 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[110px]" />
        <div className="pointer-events-none absolute bottom-20 right-[8%] h-80 w-80 rounded-full bg-lime-400/[0.07] blur-[120px]" />

        <div
          id="main-content"
          className="mx-auto grid min-h-[calc(100vh-4.75rem)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-20"
        >
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_14px_#bef264]" />
              B.Tech CSE (AI & ML) · 2029
            </div>

            <h1 className="max-w-4xl text-[clamp(3.4rem,8vw,7.6rem)] font-black leading-[0.88] tracking-[-0.075em] text-white">
              I learn by
              <span className="block text-stroke">building.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              I&apos;m Naman, a computer science student moving from strong programming fundamentals toward
              full-stack products and applied AI—one honest project at a time.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
                Explore my work
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/Namangupta6023"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/25 hover:bg-white/[0.08]"
              >
                <GitFork size={18} /> GitHub profile
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7 text-sm text-slate-400">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-cyan-300" /> Ghaziabad, India</span>
              <span className="flex items-center gap-2"><GraduationCap size={17} className="text-cyan-300" /> ABES Engineering College</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end"><ProfileCard /></div>
        </div>
      </section>

      <section id="about" className="section-shell border-b border-white/[0.07]">
        <SectionHeading index="01" eyebrow="About" title="Curiosity first. Consistency always." />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 sm:p-10">
            <p className="max-w-3xl text-2xl font-bold leading-[1.45] tracking-[-0.025em] text-white sm:text-3xl">
              I started with C++ and DSA. Then I wanted to see what those ideas could become outside a problem statement.
            </p>
            <div className="mt-8 grid gap-6 text-base leading-8 text-slate-400 sm:grid-cols-2">
              <p>That curiosity led me to build console systems, design relational databases, connect APIs, and ship a full-stack lost-and-found app.</p>
              <p>My direction is AI and data science, but my approach stays grounded: understand the fundamentals, build something useful, then improve it.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.055] p-7 sm:p-10">
            <span className="absolute right-5 top-2 font-mono text-[5.5rem] font-black leading-none text-white/[0.035]">29</span>
            <GraduationCap size={30} className="text-lime-300" />
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">Education</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-white">B.Tech in Computer Science</h3>
            <p className="mt-2 text-base font-semibold text-lime-300">Artificial Intelligence & Machine Learning</p>
            <p className="mt-6 text-slate-400">ABES Engineering College<br />2025 — 2029</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell border-b border-white/[0.07]">
        <SectionHeading index="02" eyebrow="Toolkit" title="Skills I’m sharpening through real work." />
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article key={skill.title} className="group bg-[#090e19] p-7 transition duration-300 hover:bg-[#0d1524] sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200 transition group-hover:rotate-3">
                    <Icon size={23} />
                  </span>
                  <span className="font-mono text-xs text-slate-600">&lt;/&gt;</span>
                </div>
                <h3 className="mt-7 text-xl font-black text-white">{skill.title}</h3>
                <p className="mt-2 font-mono text-sm font-semibold text-lime-300">{skill.stack}</p>
                <p className="mt-4 text-base leading-7 text-slate-400">{skill.note}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="section-shell border-b border-white/[0.07]">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading index="03" eyebrow="Selected projects" title="Proof of work, not just a list of tools." />
          <a href="https://github.com/Namangupta6023" target="_blank" rel="noreferrer" className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-cyan-100 sm:mb-14">
            See all code <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-card group relative overflow-hidden rounded-[2rem] border p-7 sm:p-9 ${
                project.highlight ? "border-lime-300/20 bg-lime-300/[0.045] lg:col-span-2" : "border-white/[0.09] bg-white/[0.035]"
              }`}
            >
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-cyan-300">PROJECT / {project.number}</span>
                {project.status && <span className="rounded-full border border-lime-300/20 bg-lime-300/[0.07] px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-lime-300">{project.status}</span>}
              </div>
              <div className={project.highlight ? "max-w-4xl" : ""}>
                <h3 className="mt-12 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">{project.title}</h3>
                <p className="mt-2 text-base font-bold text-lime-300">{project.subtitle}</p>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">{project.description}</p>
              </div>
              <div className="mt-9 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 font-mono text-xs text-slate-300">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="now" className="section-shell">
        <SectionHeading index="04" eyebrow="Right now" title="Learning with a destination in mind." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["01", "Deepening DSA", "Practising consistently in C++ and strengthening graphs, dynamic programming, recursion, and problem patterns."],
            ["02", "Building end-to-end", "Moving beyond isolated code into products with interfaces, APIs, databases, authentication, and deployment."],
            ["03", "Growing into AI/ML", "Building the mathematics, Python, data, and model-development skills needed for meaningful applied AI work."],
          ].map(([number, title, body]) => (
            <article key={number} className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-7 sm:p-8">
              <span className="font-mono text-xs font-bold text-cyan-300">{number}</span>
              <h3 className="mt-8 text-xl font-black text-white">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-cyan-300/15 bg-cyan-300/[0.055] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-300/10 blur-3xl" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime-300"><Sparkles size={15} /> Let&apos;s build something useful</div>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl">Good ideas get better when they’re shared.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/naman-gupta-983b8b369/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-lime-200"><BriefcaseBusiness size={17} /> LinkedIn</a>
              <a href="https://github.com/Namangupta6023" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"><GitFork size={17} /> GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-9 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>Designed around curiosity. Built by Naman Gupta.</p>
        <p className="flex items-center gap-2 font-mono text-xs"><TerminalSquare size={14} /> Keep learning. Keep shipping.</p>
      </footer>
    </main>
  );
}
