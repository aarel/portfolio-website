export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    tech: string[];
    link: string;
    active: boolean;
}
export interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
}
