const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const customPlugin = plugin(({ matchUtilities, theme }) => {
    matchUtilities(
          {
              'translate-z': (value) => ({
                  '--tw-translate-z': value,
                  transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
              }),
          },
          { values: theme('translate'), supportsNegativeValues: true }
    )
})

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
                sm: '560px',
                md: '640px',
                lg: '768px',
                xl: '900px',
                '2xl': '1150px',
            },
            padding: {
                DEFAULT: '1.25rem',
                sm: '1rem',
                lg: '1rem',
                xl: '1rem',
                '2xl': '4rem',
            },
        },
        borderRadius: {
            ...defaultTheme.borderRadius,
            "4xl": "1.625rem",
            "5xl": "2.5rem",
        },
        extend: {
            fontFamily: {
                regular: ["Factor A Light", ...defaultTheme.fontFamily.sans],
                bold: ["Factor A Regular", ...defaultTheme.fontFamily.sans],
                "regular-2": ["Factor A Regular", ...defaultTheme.fontFamily.sans],
                light: ["Factor A Light", ...defaultTheme.fontFamily.sans],
            },
            objectPosition: {
                'video-frame': '0 30px',
                'video-frame-mobile': '0 -50px',
            },
            lineHeight: {
                'custom': '1.1',
            },
            letterSpacing: {
                tightest: "-0.04em",
                widest: "0.2em",
            },
            fontSize: {
                "xs": ["0.625rem", {lineHeight: "normal"}], // 10px
                "sm": ["0.75rem", {lineHeight: "normal"}], // 12px
                "md": ["1rem", {lineHeight: "normal"}], // 14px
                "2xl": ["1.625rem", {lineHeight: "normal"}], // 26px
                "3xl": ["1.688rem", {lineHeight: "normal"}], // 27px
                "4xl": ["2.5rem", {lineHeight: "normal"}], // 40px
                "5xl": ["2.875rem", {lineHeight: "normal"}], // 46px
                "6xl": ["4.375rem", {lineHeight: "normal"}], // 70px
                "7xl": ["5rem", {lineHeight: "normal"}], // 80px
                "8xl": ["6.25rem", {lineHeight: "normal"}], // 100px
                "10xl": ["7.5rem", {lineHeight: "normal"}], // 120px
                "20xl": ["10.625rem", {lineHeight: "normal"}], // 170px
            },
            screens: {
                mobile: {'min': '320px', 'max': '654px'},
                tablet: {'min': '655px', 'max': '1255px'},
                desktop: {'min': '1256px'},
                tall: {'min': '1256px', 'max': '1440px'},
                "extra-mobile": {'min': '420px', 'max': '480px'}
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
    plugins: [customPlugin],
}
