export async function getProjects() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }
    return res.json();
}

export async function getPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}