import React = require("react");
import { getPosts } from "../../../lib/api";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const posts = await getPosts();
  const post = posts.find((project: any) => project.slug === params.slug);
  if (!post) return <p className="p-8">Post not found.</p>;

  return (
    <article className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>
      <div className="text-gray-700 leading-relaxed">{post.content}</div>
    </article>
  );
}
