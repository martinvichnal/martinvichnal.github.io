/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        // screens: {
        //     sm: "480px",
        //     md: "768px",
        //     lg: "976px",
        //     xl: "1440px",
        // },
        // fontSize: {
        //     xs: ["12px", "16px"],
        //     sm: ["14px", "20px"],
        //     base: ["16px", "19.5px"],
        //     lg: ["18px", "21.94px"],
        //     xl: ["20px", "24.38px"],
        //     "2xl": ["24px", "29.26px"],
        //     "3xl": ["28px", "50px"],
        //     "4xl": ["48px", "58px"],
        //     "8xl": ["96px", "106px"],
        // },
        extend: {
            fontFamily: {
                palanquin: ["Palanquin", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                sans: ["Graphik", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
            colors: {
                accent: {
                    1: "hsl(var(--color-accent1) / <alpha-value>)",
                    2: "hsl(var(--color-accent2) / <alpha-value>)",
                },
                bkg: "hsl(var(--color-bkg) / <alpha-value>)",
                content: "hsl(var(--color-content) / <alpha-value>)",

                cAccent: {
                    1: "hsl(var(--color-cAccent1) / <alpha-value>)",
                    2: "hsl(var(--color-cAccent2) / <alpha-value>)",
                },
                cBkg: "hsl(var(--color-cBkg) / <alpha-value>)",
                cContent: "hsl(var(--color-cContent) / <alpha-value>)",

                "coral-red": "#FF6452",
                "slate-gray": "#6D6D6D",
                "pale-blue": "#F5F6FF",
                "white-400": "rgba(255, 255, 255, 0.80)",
            },
            // boxShadow: {
            //     "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
            // },
            // screens: {
            //     wide: "1440px",
            // },
            // backgroundImage: {
            //     // hero: "url('assets/images/collection-background.svg')",
            //     // card: "url('assets/images/thumbnail-background.svg')",
            // },
        },
    },
    plugins: [],
}
