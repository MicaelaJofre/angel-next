/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        gray1: "#333333",
        gray2: "#a39999",
        gray3: "#d6d4d1",
        graySelect:"#F1F1F1",
        brownLigth:"#9D8F8F",
        white: "#f9f9f9"
      },
      minHeight: {
        '1/2': '70%',
      }
    },
  },
  plugins: [],
}
