import React = require("react");
import PostCard from "../../components/PostCard";
import { getPosts } from "../../lib/api";

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((project: any) => <PostCard key={project.id} post={project} />)}
      </div>
    </section>
  );
}
