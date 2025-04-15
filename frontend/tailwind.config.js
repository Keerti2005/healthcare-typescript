/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- Important
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-react-aria-components'),  // Add your plugin here
  ],
}