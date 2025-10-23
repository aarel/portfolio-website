const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function getProjects() {
    try {
        const res = await fetch(`${API_URL}/api/projects`, {
            cache: 'no-store' // Prevents Next.js caching issues
        });
        if (!res.ok) {
            throw new Error('Failed to fetch projects');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return []; // Return empty array instead of crashing
    }
}

export async function getPosts() {
    try {
        const res = await fetch(`${API_URL}/api/posts`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}