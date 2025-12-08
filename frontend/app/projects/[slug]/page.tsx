import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { getProjects } from "../../../lib/api";
import type { Project } from "../../../types";

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
    let projects: Project[] = [];

    try {
        projects = await getProjects();
    } catch (error) {
        console.error("Failed to load project detail:", error);
        return (
            <section className="max-w-5xl px-6 py-20 mx-auto text-slate-200">
                <div className="rounded-3xl border border-red-500/30 bg-red-500/10 px-6 py-5 text-red-100">
                    This project story is temporarily unavailable. Please refresh or come back later.
                </div>
            </section>
        );
    }

    const project = projects.find((item) => item.slug === params.slug) ?? notFound();

    return (
        <article className="max-w-5xl px-6 py-20 mx-auto text-slate-200">
            <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 transition-colors duration-200 hover:bg-white/10"
            >
                <span aria-hidden="true">←</span>
                Back to projects
            </Link>
            <header className="mt-10 flex flex-col gap-6 border-b border-white/10 pb-10">
                <div className="flex flex-wrap items-center gap-4">
                    <h1 className="text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
                    {project.active && (
                        <span className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                            Active
                        </span>
                    )}
                </div>
                <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{project.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                    {(project.tech ?? []).map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </header>
            <section className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
                <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/50 p-8 leading-relaxed text-slate-200 shadow-lg shadow-slate-900/40">
                    <h2 className="text-xl font-semibold text-white">What I delivered</h2>
                    <p>
                        This project blends modular architecture, purposeful automation, and a multi-disciplinary delivery
                        approach. The core focus is pairing reliable AI behavior with the guardrails product teams need to ship
                        at speed.
                    </p>
                    <p>
                        Want a deeper walkthrough or demo of the implementation details? Reach out and I can share architecture
                        diagrams, agent evaluation harnesses, or hands-on lessons learned.
                    </p>
                </div>
                <aside className="flex h-fit flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Links</span>
                        <a
                            href={project.link}
                            className="inline-flex items-center justify-start gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            View on GitHub
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Highlights</span>
                        <ul className="flex list-disc flex-col gap-2 pl-6 text-slate-300 marker:text-primary">
                            <li>Modular service boundaries with typed contracts.</li>
                            <li>Automated evaluation harness for every deploy.</li>
                            <li>Human-in-the-loop review flow for sensitive actions.</li>
                        </ul>
                    </div>
                </aside>
            </section>
        </article>
    );
}
