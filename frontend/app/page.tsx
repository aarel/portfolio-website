import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../lib/api';
import React = require('react');

export const dynamic = "force-dynamic";

export default async function Home() {
    const projects = await getProjects();
    return (
        <main className="min-h-screen bg-gray-50 text-black">
            <section className="max-w-5xl mx-auto p-8">
                <h1 className="text-4xl font-bold mb-8">My Projects</h1>
                <p className="mb-12 text-lg text-gray-600">I build modular AI frameworks and intelligent systems.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project: any) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </main>
    );
}