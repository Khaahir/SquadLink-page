/** @type {import('tailwindcss').Config} */
export default {
  // Här specificeras alla filer som ska skannas efter Tailwind-klasser
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Antag att du har importerat Inter i din huvud-CSS
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-cyan': '#22d3ee', // from-cyan-400
        'brand-amber': '#fbbf24', // to-amber-500
      },
    },
  },
  plugins: [],
}
