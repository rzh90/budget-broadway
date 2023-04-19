/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "node_modules/flowbite/**/*.{vue,js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            "bbblue": "#00a3dd",
            "bbdarkblue": "#132554"
        },
        extend: {
            fontFamily: {
                sans: [
                    "Golos Text"
                ]
            }
        },
    },
    plugins: [require('flowbite/plugin')],
}