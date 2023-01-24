/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'figma-yellow': '#ffc700',
        'figma-green': '#10a958',
      },
    },
  },
  plugins: [],
}
