export const dynamic = "force-dynamic";

import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { getProjects } from "../../lib/api";
import type { Project } from "../../types";

export default async function ProjectsPage() {
    let projects: Project[] = [];
    let loadFailed = false;

    try {
        projects = await getProjects();
    } catch (error) {
        console.error("Failed to load projects list:", error);
        loadFailed = true;
    }

    return (
        <section className="max-w-6xl px-6 py-24 mx-auto">
            <div className="flex flex-col gap-4 text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">Projects</span>
                <h1 className="text-4xl font-semibold sm:text-5xl">Every system starts with a story.</h1>
                <p className="max-w-3xl text-base leading-relaxed text-slate-300">
                    From rapid prototypes to multi-team launches, these builds show how modular architecture and thoughtful
                    experience design can unlock the next wave of intelligent products.
                </p>
            </div>
            {loadFailed ? (
                <div className="mt-14 rounded-3xl border border-red-500/30 bg-red-500/10 px-6 py-5 text-red-100">
                    Projects are temporarily unavailable. Refresh the page or check back soon.
                </div>
            ) : (
                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </section>
    );
}
