import Link from "next/link";
import React from "react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  // Date in ISO 8601 format (e.g., "2024-06-01T12:00:00Z")
  date: string;
}
/**
 * Renders a card displaying a blog post's title, date, excerpt, and links to the full post.
 * @param post - The post object containing id, title, slug, excerpt, and date.
 */
export default function PostCard({ post }: { post: Post }) {
  return (
      <><p className="text-gray-500 text-sm mb-3">
      {new Date(post.date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p><h2 className="text-2xl font-semibold mb-2">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2><p className="text-gray-700 mb-4">{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
        Read more →
      </Link></>
  );
}
