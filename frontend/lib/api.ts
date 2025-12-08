import type { Post, Project } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

async function fetchJson<T>(path: string): Promise<T> {
    try {
        const response = await fetch(`${API_URL}${path}`, { cache: "no-store" });
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        return (await response.json()) as T;
    } catch (error) {
        console.error(`Error fetching ${path}:`, error);
        throw error instanceof Error ? error : new Error("Unknown fetch error");
    }
}

export function getProjects(): Promise<Project[]> {
    return fetchJson<Project[]>("/api/projects");
}

export function getPosts(): Promise<Post[]> {
    return fetchJson<Post[]>("/api/posts");
}
