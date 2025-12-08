import type { Config } from 'tailwindcss';
const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",
                accent: "#9333ea",
                background: "#f9fafb",
                text: "#111827",
                muted: "#6b7280",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Geist_Mono', 'monospace'],
            }, 
            boxShadow: {
                soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
                card: '0 4px 12px rgba(0, 0, 0, 0.8)',
            },
            borderRadius: {
                xl: "1rem",
            },
        },
    },
    plugins: [],
};

export default config;
