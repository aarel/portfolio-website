export const dynamic = "force-dynamic";

import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { getProjects } from "../../lib/api";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project: any) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}