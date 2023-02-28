/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./public/**/*.html",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [
        require("flowbite/plugin")
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
  };