import { notFound } from "next/navigation";
import React from "react";
import { getPosts } from "../../../lib/api";
import type { Post } from "../../../types";

const formatDate = (value: string) =>
    new Date(value).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const posts: Post[] = await getPosts();
    const post = posts.find((item) => item.slug === params.slug) ?? notFound();

    return (
        <article className="max-w-4xl px-6 py-20 mx-auto text-slate-200">
            <header className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">
                    {formatDate(post.date)}
                </p>
                <h1 className="text-4xl font-semibold text-white sm:text-5xl">{post.title}</h1>
                <p className="max-w-2xl text-base leading-relaxed text-slate-300">{post.excerpt}</p>
            </header>
            <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/40 p-10 text-lg leading-relaxed text-slate-100 shadow-lg shadow-slate-900/30">
                {post.content}
            </div>
        </article>
    );
}
