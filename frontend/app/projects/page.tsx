export const dynamic = "force-dynamic";

import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { getProjects } from "../../lib/api";
import type { Project } from "../../types";

export default async function ProjectsPage() {
    const projects: Project[] = await getProjects();

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
            <div className="mt-14 grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
