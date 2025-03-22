/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFDD15",
        "primary-dark": "#E6C700",
        secondary: "#003559",
        "secondary-light": "#004B7A",
        "text-light": "#F3F4F6",
      },
    },
  },
  plugins: [],
}

