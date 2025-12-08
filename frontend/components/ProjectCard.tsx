import Link from "next/link";
import React from "react";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-slate-200 shadow-lg shadow-slate-900/40 transition-transform duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-primary/20">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                {project.active && (
                    <span className="inline-flex items-center justify-center rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">
                        Active
                    </span>
                )}
            </div>
            <p className="leading-relaxed text-slate-300">{project.description}</p>
            <div className="flex flex-wrap items-center gap-2">
                {(project.tech ?? []).map((tech) => (
                    <span
                        key={tech}
                        className="inline-flex items-center justify-center rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="mt-auto flex items-center justify-between gap-4">
                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-slate-950"
                >
                    Explore build
                    <span aria-hidden="true">→</span>
                </Link>
                <a
                    href={project.link}
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    GitHub
                    <span aria-hidden="true">↗</span>
                </a>
            </div>
        </article>
    );
}
