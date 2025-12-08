"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import React from "react";

const links: Array<{ href: Route; label: string }> = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" }
];

export default function Navbar() {
    const pathname = usePathname();

    const linkClass = (path: string) => {
        const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
        return [
            "inline-flex items-center justify-center gap-2",
            "px-4 py-2",
            isActive
                ? "bg-primary text-slate-950 shadow-lg shadow-primary/30"
                : "text-slate-300 hover:text-white hover:bg-white/10",
            "rounded-full border border-white/10 transition-colors duration-200"
        ].join(" ");
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur">
            <div className="flex items-center justify-between gap-6 max-w-6xl px-6 py-4 mx-auto rounded-full border border-white/10 bg-slate-900/60 text-slate-100 shadow-lg shadow-slate-900/40">
                <Link
                    href="/"
                    className="inline-flex items-center gap-3 px-4 py-2 text-lg font-semibold tracking-tight text-white"
                >
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                        <span className="absolute h-5 w-5 rounded-full bg-primary blur-sm" />
                        <span className="relative text-base font-bold text-white">AA</span>
                    </span>
                    <span>Adam Arellano</span>
                </Link>
                <div className="flex items-center gap-2">
                    {links.map(({ href, label }) => (
                        <Link key={href} href={href} className={linkClass(href)}>
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
