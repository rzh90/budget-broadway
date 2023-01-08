/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        colors: {
            "bbblue": "#00a3dd",
            "bbdarkblue": "#132554"
        },
        extend: {
            fontFamily: {
                sans: [
                    "Montserrat"
                ]
            }
        },
    },
    plugins: [require('flowbite/plugin')],
}
