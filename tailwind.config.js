/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            boxShadow: {},
            fontFamily: {
                "Source Sans Pro": ["Source Sans Pro"]
            },
            keyframes: {
                enterFromRight: {
                    from: { opacity: 0, transform: "translateX(200px)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                },
                enterFromLeft: {
                    from: { opacity: 0, transform: "translateX(-200px)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                },
                exitToRight: {
                    from: { opacity: 1, transform: "translateX(0)" },
                    to: { opacity: 0, transform: "translateX(200px)" },
                },
                exitToLeft: {
                    from: { opacity: 1, transform: "translateX(0)" },
                    to: { opacity: 0, transform: "translateX(-200px)" },
                },
                scaleIn: {
                    from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
                    to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
                },
                scaleOut: {
                    from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
                    to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                fadeOut: {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                }
            },
            animation: {
                scaleIn: "scaleIn 200ms ease",
                scaleOut: "scaleOut 200ms ease",
                fadeIn: "fadeIn 200ms ease",
                fadeOut: "fadeOut 200ms ease",
                enterFromLeft: "enterFromLeft 250ms ease",
                enterFromRight: "enterFromRight 250ms ease",
                exitToLeft: "exitToLeft 250ms ease",
                exitToRight: "exitToRight 250ms ease",
            },

            screens: {
                phone: { min: "300px", max: "767px" },
                tablet: { min: "1024px", max: "1280px" },
                desktop: { min: "1280px" },
                largeDesktop: { min: "1536px" }
            },
            fontSize: {
                "heading-3": ["32px"],
                "heading-4": ["24px"],
                "heading-5": ["20px"],
            },
            colors: {
                primary: {
                    "600": "#F94355",
                    "700": "#F5333F"
                },
                grey: {
                    "100": "#F1F1F1",
                    "200": "#E6E6E6",
                    "500": "#999999",
                    "600": "#808080",
                    "700": "#666666",
                    "800": "#4D4D4D",
                },
                dark: "#1A1A1A",
                navy: "#012846"
            }
        }
    },
    plugins: [],
}