// frontend/app/layout.tsx
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Adam Arellano | AI Systems Architect",
    description: "Full-stack engineer crafting modular AI frameworks, automation pipelines, and immersive product experiences."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="relative min-h-screen bg-transparent text-slate-100 antialiased">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_65%)]" />
                <div className="flex min-h-screen flex-col">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
