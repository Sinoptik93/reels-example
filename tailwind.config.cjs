const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,md,mdx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1400px',
            },
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '1rem',
                xl: '1rem',
                '2xl': '1rem',
            },
        },
        extend: {
            fontFamily: {
                regular: ["Factor A Regular", ...defaultTheme.fontFamily.sans],
                light: ["Factor A Light", ...defaultTheme.fontFamily.sans],
            },
            letterSpacing: {
                tightest: "-0.05em",
                widest: "0.2em",
            },
            fontSize: {
                "xs": ["0.625rem", {lineHeight: "normal"}],
                "2xl": ["1.625rem", {lineHeight: "normal"}],
                "3xl": ["1.688rem", {lineHeight: "normal"}],
                "4xl": ["2.5rem", {lineHeight: "normal"}],
                "5xl": ["2.875rem", {lineHeight: "normal"}],
                "6xl": ["4.375rem", {lineHeight: "normal"}],
                "7xl": ["5rem", {lineHeight: "normal"}],
                "8xl": ["6.25rem", {lineHeight: "normal"}],
                "10xl": ["7.5rem", {lineHeight: "normal"}],
                "20xl": ["10.625rem", {lineHeight: "normal"}],
            },
            screens: {
                mobile: {'min': '320px', 'max': '767px'},
                tablet: {'min': '768px', 'max': '1399px'},
                desktop: {'min': '1400px'},
            },
            colors: {
                "white": "hsl(0,0%,100%)",
                "gray": "hsl(0,8%,95%)",
                "dark-gray": "hsl(0,0%,75%)",
                "black": "hsl(0,0%,0%)",
                "accent-orange": "hsl(25,100%,50%)",
                "accent-red": "hsl(0,79%,63%)",
                "accent-violet": "hsl(264,82%,62%)",
            }
        },
    },
    plugins: [],
}
