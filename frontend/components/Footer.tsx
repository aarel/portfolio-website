import React from "react";

const links = [
    { href: "https://github.com/aarel", label: "GitHub" },
    { href: "https://www.linkedin.com/in/adam-arellano", label: "LinkedIn" },
    { href: "mailto:adam@arellano.ai", label: "Email" }
];

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-white/10 bg-slate-900/70">
            <div className="max-w-6xl px-6 py-12 mx-auto text-sm text-slate-400">
                <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                    <div className="max-w-md">
                        <h3 className="text-lg font-semibold text-white">Let&apos;s build what&apos;s next.</h3>
                        <p className="mt-3 leading-relaxed text-slate-400">
                            I design and ship resilient AI systems, from prototype to production.
                            Reach out if you&apos;re exploring automation, intelligent workflows, or immersive experiences.
                        </p>
                    </div>
                    <div className="flex items-start justify-start gap-4 md:justify-end">
                        {links.map(({ href, label }) => (
                            <a
                                key={label}
                                href={href}
                                className="inline-flex items-center justify-center px-4 py-2 text-slate-200 transition-colors duration-200 hover:text-white"
                                rel="noreferrer noopener"
                                target={href.startsWith("http") ? "_blank" : undefined}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Adam Arellano. All rights reserved.</p>
                    <p>Built with Next.js, Tailwind CSS, and an Express API.</p>
                </div>
            </div>
        </footer>
    );
}
