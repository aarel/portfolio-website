import Link from "next/link";
import React from "react";

interface Project {
    id: string;
    name: string;
    slug: string;
    description: string;
    tech: string[];
    link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                    <span key={t} className="text-sm bg-gray-100 px-2 py-1 rounded">{t}</span>
                ))}
            </div>
            <a href={`/projects/${project.slug}`} className="text-blue-600 hover:underline">
                View Project →
            </a>
        </div>
    );
}