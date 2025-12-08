export const dynamic = "force-dynamic";

import Link from "next/link";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../lib/api";
import type { Project } from "../types";

const highlightItems = [
    {
        title: "LLM product architecture",
        description: "Designing role-based orchestration, evaluation harnesses, and observability so AI features scale with confidence."
    },
    {
        title: "Automation pipelines",
        description: "Connecting data, agents, and human review loops to streamline workflows for product and platform teams."
    },
    {
        title: "Immersive prototypes",
        description: "Rapidly building interactive experiences that blend storytelling, simulation, and adaptive systems."
    }
];

export default async function Home() {
    let projects: Project[] = [];
    let projectsError = false;

    try {
        projects = await getProjects();
    } catch (error) {
        console.error("Failed to load projects on Home page:", error);
        projectsError = true;
    }

    const featuredProjects = projects.slice(0, 4);

    return (
        <main className="relative">
            <section className="max-w-6xl px-6 py-24 mx-auto">
                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <span className="inline-flex items-center justify-start gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                                ADAM ARELLANO
                            </span>
                            <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                                Architecting modular AI systems from concept to production.
                            </h1>
                            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                                I pair deep engineering with product intuition to launch resilient automation, applied AI, and immersive storytelling experiences.
                                From startup experiments to enterprise platforms, I build the connective tissue that turns ideas into living systems.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Link
                                href="/projects"
                                className="inline-flex items-center justify-center gap-3 rounded-full border border-primary/40 bg-primary px-6 py-3 text-base font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
                            >
                                View featured work
                                <span aria-hidden="true">→</span>
                            </Link>
                            <Link
                                href="/blog"
                                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                            >
                                Read build notes
                            </Link>
                        </div>
                        <dl className="grid gap-6 sm:grid-cols-3">
                            {[
                                { label: "Production launches", value: "40+" },
                                { label: "Automation savings", value: "12k+ hrs" },
                                { label: "LLM evaluations", value: "5000+" }
                            ].map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                                >
                                    <span className="text-2xl font-semibold text-white">{value}</span>
                                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</span>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-slate-900/50 p-10 shadow-xl shadow-slate-900/40 lg:sticky lg:top-24 lg:h-fit">
                        <h2 className="text-xl font-semibold text-white">Focus areas</h2>
                        <div className="flex flex-col gap-6">
                            {highlightItems.map(({ title, description }) => (
                                <div key={title} className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-primary">{title}</h3>
                                    <p className="leading-relaxed text-slate-300">{description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="rounded-2xl border border-accent/30 bg-accent/10 px-6 py-5 text-sm text-accent">
                            Currently open to collaborations on agent strategy, narrative AI, and technical leadership engagements.
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl px-6 pb-24 mx-auto">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold text-white">Featured work</h2>
                        <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-300">
                            A sample of recent builds spanning applied AI, automation, and experiential design.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                    >
                        Browse all projects
                    </Link>
                </div>
                {projectsError ? (
                    <div className="mt-12 rounded-3xl border border-red-500/30 bg-red-500/10 px-6 py-5 text-red-100">
                        Featured work is temporarily unavailable. Please try again shortly.
                    </div>
                ) : (
                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
