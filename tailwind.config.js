/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        colors: {
            ...colors,
            "bbblue": "#00a3dd",
            "bbdarkblue": "#132554",
            "bblightblue": "#00bcff",
        },
        extend: {
            fontFamily: {
                sans: [
                    "Golos Text"
                ]
            }
        },
    },
    plugins: [],
}

