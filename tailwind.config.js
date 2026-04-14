/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage-deep': '#051F20',
        'sage-dark': '#173831',
        'sage-card': '#235347',
        'sage-muted': '#8CB79B',
        'sage-light': '#DBF0DD',
        'bg-deep': '#DBF0DD',
        'bg-dark': '#173831',
      },
    },
  },
  plugins: [],
}
