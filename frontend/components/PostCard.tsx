import Link from "next/link";
import React = require("react");

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold mb-2">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-500 text-sm mb-3">{post.date}</p>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
        Read more →
      </Link>
    </article>
  );
}
