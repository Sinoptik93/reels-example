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
            }
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
                "xs": ["0.625rem", {lineHeight: "auto"}],
                "2xl": ["1.625rem", {lineHeight: "auto"}],
                "3xl": ["1.688rem", {lineHeight: "auto"}],
                "4xl": ["2.5rem", {lineHeight: "auto"}],
                "5xl": ["2.875rem", {lineHeight: "auto"}],
                "7xl": ["5rem", {lineHeight: "auto"}],
                "8xl": ["6.25rem", {lineHeight: "auto"}],
                "10xl": ["7.5rem", {lineHeight: "auto"}],
            },
            screens: {
                mobile: {'min': '320px', 'max': '767px'},
                tablet: {'min': '768px', 'max': '1023px'},
                desktop: {'min': '1024px'},
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
