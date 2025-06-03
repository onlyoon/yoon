/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/**/*.{html,js,ts,astro}"
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        hg: ['Hanken Grotesk', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
        gmart: ['GmartSansMedium', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('@tailwindcss/aspect-ratio')],
}