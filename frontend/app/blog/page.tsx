export const dynamic = "force-dynamic";

import React from "react";
import PostCard from "../../components/PostCard";
import { getPosts } from "../../lib/api";
import type { Post } from "../../types";

export default async function BlogPage() {
    const posts: Post[] = await getPosts();

    return (
        <section className="max-w-6xl px-6 py-24 mx-auto">
            <div className="flex flex-col gap-4 text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">Journal</span>
                <h1 className="text-4xl font-semibold sm:text-5xl">Notes from the build process.</h1>
                <p className="max-w-3xl text-base leading-relaxed text-slate-300">
                    Deep dives, post-mortems, and observations on crafting intelligent products, with a bias toward shipping.
                </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
