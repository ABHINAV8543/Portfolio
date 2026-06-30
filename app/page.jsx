"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  ExternalLink,
  ArrowRight,
  FileText,
  ChevronUp,
  Code2,
  Swords,
  Send,
  MapPin,
  GraduationCap,
  Crown,
  Phone,
} from "lucide-react";

function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── data ─── */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["C++", "Python", "C", "SQL", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    items: ["Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub"],
  },
  {
    title: "Concepts",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "REST APIs",
      "Authentication",
      "Debugging",
    ],
  },
];

const PROJECTS = [
  {
    title: "BillFlow",
    tagline: "E-Billing & Invoice Platform",
    desc: [
      "Full-stack SaaS platform for invoice generation, client management, and revenue tracking built on a modern serverless architecture.",
      "Features a dynamic invoice engine with custom fields, automated tax calculations, custom charges, and round-off handling. Migrated from SQLite to Turso/libSQL for Vercel serverless deployment.",
    ],
    stack: ["JavaScript", "Node.js", "Turso/libSQL", "Vercel"],
    liveUrl: "https://project.abhinavanand.me/",
    repoUrl: "https://github.com/ABHINAV8543/BillFlow",
  },
  {
    title: "Zerodesk",
    tagline: "Agentic Customer Support SaaS",
    desc: [
      "SaaS platform that automates customer support workflows using AI-driven task handling for faster resolution times.",
      "Implemented authentication and tenant-based access control to ensure secure, isolated multi-tenant interactions.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "AI/LLM"],
    liveUrl: null,
    repoUrl: null,
  },
];

const ACHIEVEMENTS = [
  {
    icon: Crown,
    title: "CONVOKE CP Contest Winner",
    detail: "Cluster Innovation Center, University of Delhi — April 2026",
    accent: true,
  },
  {
    icon: Code2,
    title: "LeetCode Knight Badge",
    detail: "850+ problems solved",
    link: "https://leetcode.com/u/Abhinav_0810/",
    accent: false,
  },
  {
    icon: Swords,
    title: "CodeChef 3★ Rated",
    detail: "Consistent competitive programming",
    link: "https://www.codechef.com/users/abhinavanandsh",
    accent: false,
  },
];

const SOCIALS = {
  github: "https://github.com/ABHINAV8543",
  linkedin: "https://linkedin.com/in/abhinav-anand-software-developer",
  email: "abhinavanandshg@gmail.com",
  phone: "+91 9935422944",
};

/* ─── helpers ─── */

function SectionHeading({ children, id }) {
  return (
    <div className="mb-10" id={id}>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
        {children}
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
    </div>
  );
}

/* ─── component ─── */

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="lg:flex lg:min-h-screen">
      {/* ─── SIDEBAR ─── */}
      <aside className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[280px] xl:w-[300px] bg-surface border-r border-border p-8 flex flex-col items-center lg:overflow-y-auto">
        {/* photo */}
        <img
          src="/photo.jpg"
          alt="Abhinav Anand"
          className="w-28 h-28 rounded-2xl border border-border object-cover mt-4"
        />

        <h1 className="mt-5 text-xl font-bold tracking-tight text-center">
          Abhinav Anand
        </h1>
        <span className="mt-2 text-xs font-medium text-text-muted bg-surface-light px-4 py-1.5 rounded-full">
          Software Developer
        </span>

        <div className="w-full h-px bg-border my-6" />

        {/* contact details */}
        <div className="w-full space-y-1">
          <a href={`mailto:${SOCIALS.email}`} className="flex items-start gap-3 rounded-lg px-2 py-2.5 -mx-2 hover:bg-surface-light transition-colors group">
            <Mail size={16} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-dim">Email</p>
              <p className="text-xs text-text-muted group-hover:text-accent transition-colors break-all">
                {SOCIALS.email}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-3 px-2 py-2.5 -mx-2">
            <Phone size={16} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-dim">Phone</p>
              <p className="text-xs text-text-muted">{SOCIALS.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 px-2 py-2.5 -mx-2">
            <GraduationCap size={16} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-dim">Education</p>
              <p className="text-xs text-text-muted">B.Tech CSE, ABES EC</p>
              <p className="text-[10px] text-text-dim">Expected July 2027</p>
            </div>
          </div>

          <div className="flex items-start gap-3 px-2 py-2.5 -mx-2">
            <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-dim">Location</p>
              <p className="text-xs text-text-muted">Ghaziabad, India</p>
            </div>
          </div>

          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg px-2 py-2.5 -mx-2 hover:bg-surface-light transition-colors group">
            <GithubIcon size={16} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-dim">GitHub</p>
              <p className="text-xs text-text-muted group-hover:text-accent transition-colors">
                ABHINAV8543
              </p>
            </div>
          </a>

          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg px-2 py-2.5 -mx-2 hover:bg-surface-light transition-colors group">
            <LinkedinIcon size={16} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-dim">LinkedIn</p>
              <p className="text-xs text-text-muted group-hover:text-accent transition-colors">
                abhinav-anand
              </p>
            </div>
          </a>

          <a href="https://leetcode.com/u/Abhinav_0810/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg px-2 py-2.5 -mx-2 hover:bg-surface-light transition-colors group">
            <Code2 size={16} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-dim">LeetCode</p>
              <p className="text-xs text-text-muted group-hover:text-accent transition-colors">
                Abhinav_0810
              </p>
            </div>
          </a>

          <a href="https://www.codechef.com/users/abhinavanandsh" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg px-2 py-2.5 -mx-2 hover:bg-surface-light transition-colors group">
            <Swords size={16} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-text-dim">CodeChef</p>
              <p className="text-xs text-text-muted group-hover:text-accent transition-colors">
                abhinavanandsh
              </p>
            </div>
          </a>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <main className="lg:ml-[280px] xl:ml-[300px] flex-1 min-h-screen">
        {/* top nav */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-end px-6 md:px-10 py-4">
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setMobileNav(!mobileNav)}
              className="md:hidden text-text-muted hover:text-accent transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileNav ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {mobileNav && (
            <div className="md:hidden border-t border-border">
              <ul className="flex flex-col px-6 py-4 gap-4">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMobileNav(false)}
                      className="text-sm text-text-muted hover:text-accent transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* ─── ABOUT ─── */}
        <section className="px-6 md:px-10 pt-10 pb-16">
          <SectionHeading id="about">About Me</SectionHeading>

          <div className="space-y-4 text-text-muted leading-relaxed max-w-3xl">
            <p>
              I&#39;m Abhinav Anand, a Computer Science undergraduate at ABES Engineering
              College, Ghaziabad, currently pursuing my B.Tech with an 85.27% aggregate.
              My sweet spot lives at the intersection of competitive programming and
              shipping real products — I thrive on the clarity that algorithmic thinking
              brings to full-stack architecture decisions.
            </p>
            <p>
              On the competitive side, I won the CONVOKE CP contest at the University
              of Delhi, hold a LeetCode Knight badge with 850+ problems under my belt,
              and maintain a 3-star rating on CodeChef. These aren&#39;t just contest
              stats — they&#39;ve shaped how I reason about performance, edge cases, and
              data modeling in every project I build.
            </p>
            <p>
              On the product side, I&#39;ve built BillFlow, a SaaS invoicing platform
              deployed on Vercel&#39;s serverless stack, and contributed to Zerodesk, an
              AI-driven customer support automation tool. Outside code, I lead the Chess
              Forum at my college and served as a Chess.com Campus Ambassador, combining
              strategic thinking with community building.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent text-background font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all duration-200"
            >
              View Work <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-text-muted font-medium text-sm px-6 py-3 rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
            >
              <FileText size={16} /> Resume
            </a>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section className="px-6 md:px-10 py-16 bg-surface/50">
          <SectionHeading id="skills">Skills</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border bg-surface p-5 hover:border-border-hover transition-colors duration-200"
              >
                <h3 className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-text-muted bg-accent-dim px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section className="px-6 md:px-10 py-16">
          <SectionHeading id="projects">Projects</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((proj) => (
              <article
                key={proj.title}
                className="group rounded-xl border border-border bg-surface p-6 flex flex-col hover:border-border-hover transition-all duration-200"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold">{proj.title}</h3>
                  <p className="text-xs text-accent font-medium mt-0.5">
                    {proj.tagline}
                  </p>
                </div>

                <div className="space-y-2 text-sm text-text-muted leading-relaxed flex-1">
                  {proj.desc.map((d, idx) => (
                    <p key={idx}>{d}</p>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {proj.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-text-dim border border-border rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:brightness-110 transition-all"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-dim cursor-not-allowed">
                      <ExternalLink size={14} /> Live Demo
                    </span>
                  )}

                  {proj.repoUrl ? (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent transition-colors"
                    >
                      <GithubIcon size={14} /> Source
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-dim cursor-not-allowed">
                      <GithubIcon size={14} /> Source
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── ACHIEVEMENTS ─── */}
        <section className="px-6 md:px-10 py-16 bg-surface/50">
          <SectionHeading id="achievements">Achievements</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((a, idx) => {
              const Icon = a.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border p-6 transition-all duration-200 ${
                    a.accent
                      ? "border-accent/40 bg-accent-dim"
                      : "border-border bg-surface hover:border-border-hover"
                  }`}
                >
                  <Icon
                    size={28}
                    className={a.accent ? "text-accent mb-3" : "text-text-dim mb-3"}
                  />
                  <h3 className="font-bold text-sm">{a.title}</h3>
                  <p className="text-xs text-text-muted mt-1">{a.detail}</p>
                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent mt-2 hover:brightness-110"
                    >
                      View Profile <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* leadership strip */}
          <div className="mt-10 rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">
              Leadership
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="text-text-dim mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">
                    Community Head, Chess Forum — ABES Engineering College
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    2025 – Present &middot; Leading chess community activities, events, and workshops.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Crown size={18} className="text-text-dim mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">
                    College Ambassador, Chess.com
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    Sep 2024 – Nov 2025 &middot; Promoted platform engagement and coordinated student participation in online chess events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section className="px-6 md:px-10 py-16">
          <SectionHeading id="contact">Get in Touch</SectionHeading>

          <div className="max-w-xl">
            <p className="text-text-muted leading-relaxed mb-8">
              I&#39;m always open to conversations about competitive programming,
              full-stack projects, or anything at the intersection of engineering
              and strategy. Drop a line.
            </p>

            <a
              href={`mailto:${SOCIALS.email}`}
              className="inline-flex items-center gap-2 bg-accent text-background font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all duration-200"
            >
              <Send size={16} /> Say Hello
            </a>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="border-t border-border py-6 px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-text-dim">
              &copy; {new Date().getFullYear()} Abhinav Anand
            </p>
            <p className="text-xs text-text-dim">
              Built with Next.js &amp; Tailwind CSS
            </p>
          </div>
        </footer>
      </main>

      {/* scroll-to-top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-accent text-background p-2.5 rounded-full shadow-lg hover:brightness-110 transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
}
