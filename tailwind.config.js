/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark Gravity Theme - Bright Text
                gravity: {
                    bg: '#030712',           // Near black
                    surface: '#0f172a',      // Dark blue-gray
                    'surface-light': '#1e293b',
                    primary: '#818CF8',      // Bright Indigo
                    accent: '#22D3EE',       // Bright Cyan
                    text: '#FFFFFF',         // Pure white
                    'text-muted': '#CBD5E1', // Light gray (brighter)
                    border: '#334155',       // Visible border
                },
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                display: ['"Space Grotesk"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
