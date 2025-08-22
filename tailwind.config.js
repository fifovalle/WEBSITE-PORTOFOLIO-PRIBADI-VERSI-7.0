/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: "true",
            padding: "15px",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
        },
        fontFamily: {
            utama: "var(--huruf-bebas-neue)",
            kedua: "var(--huruf-inter)",
        },
        extend: {
            colors: {
                utama: "#10151f",
                kedua: "#475467",
                aksen: {
                    DEFAULT: "#847566",
                    melayang: "#D0CAC1",
                },
            },
            boxShadow: {
                kebiasaan: "0px 14px 54px rgba(0, 0, 0, 0.1)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
