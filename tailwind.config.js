/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-IRANSans)']
            },
            backgroundImage: {
                'footer-texture': "url('../public/images/Footer.png')",
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("daisyui")
    ],

}
