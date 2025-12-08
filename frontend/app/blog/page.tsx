export const dynamic = "force-dynamic";

import React from "react";
import PostCard from "../../components/PostCard";
import { getPosts } from "../../lib/api";
import type { Post } from "../../types";

export default async function BlogPage() {
    let posts: Post[] = [];
    let loadFailed = false;

    try {
        posts = await getPosts();
    } catch (error) {
        console.error("Failed to load posts list:", error);
        loadFailed = true;
    }

    return (
        <section className="max-w-6xl px-6 py-24 mx-auto">
            <div className="flex flex-col gap-4 text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">Journal</span>
                <h1 className="text-4xl font-semibold sm:text-5xl">Notes from the build process.</h1>
                <p className="max-w-3xl text-base leading-relaxed text-slate-300">
                    Deep dives, post-mortems, and observations on crafting intelligent products, with a bias toward shipping.
                </p>
            </div>
            {loadFailed ? (
                <div className="mt-14 rounded-3xl border border-red-500/30 bg-red-500/10 px-6 py-5 text-red-100">
                    Blog posts are temporarily unavailable. Please try again shortly.
                </div>
            ) : (
                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </section>
    );
}
