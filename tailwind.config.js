/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                mainDark: {
                    "primary": "#0950c3",
                    "secondary": "#3908a8",
                    "accent": "#7DD3FC",
                    "neutral": "#162536",
                    "base-100": "#090f16",
                },
            },
        ],
    },
}