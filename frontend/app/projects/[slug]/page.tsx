import React = require("react");
import { getProjects } from "../../../lib/api";

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const projects = await getProjects();
  const project = projects.find((project: { id: string; title: string; description: string; tech: string[]; link: string }) => project.id === params.slug);
  if (!project) return <p className="p-8">Project not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech: string) => (
          <span key={tech} className="bg-gray-200 px-2 py-1 rounded text-sm">{tech}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" className="text-blue-600 hover:underline">View on GitHub</a>
    </div>
  );
}
