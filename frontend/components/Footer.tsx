import React = require("react");

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Adam Arellano. All rights reserved.</p>
        <p className="text-gray-500 mt-1">
          Built with Next.js, Tailwind, and Node.js.
        </p>
      </div>
    </footer>
  );
}
