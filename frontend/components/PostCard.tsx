import Link from "next/link";
import React from "react";
import type { Post } from "../types";

const formatDate = (value: string) =>
    new Date(value).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

export default function PostCard({ post }: { post: Post }) {
    return (
        <article className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-slate-200 shadow-lg shadow-slate-900/30 transition-transform duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-accent/20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">
                {formatDate(post.date)}
            </p>
            <h2 className="text-2xl font-semibold text-white">
                <Link href={`/blog/${post.slug}`} className="transition-colors duration-200 hover:text-primary">
                    {post.title}
                </Link>
            </h2>
            <p className="flex-1 leading-relaxed text-slate-300">{post.excerpt}</p>
            <div className="flex items-center justify-between gap-4">
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-sm font-semibold text-accent transition-colors duration-200 hover:bg-accent hover:text-slate-950"
                >
                    Read full story
                    <span aria-hidden="true">→</span>
                </Link>
                <span className="text-xs uppercase tracking-[0.35em] text-slate-500">Insights</span>
            </div>
        </article>
    );
}
