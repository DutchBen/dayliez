import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    theme: {
        extend: {
            colors: {
                dayliezPurple: "#5e20ff",
                dayliezOrange: "#ff5e20",
                dayliezOffWhite: "rgba(255, 255, 255, 0.7)",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
            },
            backgroundImage: () => ({
                dayliezOrangeLinear:
                    "linear-gradient(180deg,#ff5e20 0%,hsl(24,100%,58%) 100%)",
            }),
            letterSpacing: {
                tighter: "-0.6px",
            },
            animation: {
                "slide-in-bottom": "slideInFromBottom 120ms ease-out",
            },
        },
    },
    plugins: [typography, aspectRatio],
};
