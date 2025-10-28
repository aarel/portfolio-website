"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const linkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === path ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-gray-900">Adam Arellano</Link>
        <div className="flex space-x-2">
          <Link href="/projects" className={linkClass("/projects")}>Projects</Link>
          <Link href="/blog" className={linkClass("/blog")}>Blog</Link>
        </div>
      </div>
    </nav>
  );
}
