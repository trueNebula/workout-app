import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lumasima: ["Lumasima", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        "th-background": "var(--color-bkg)",
        "th-text": "var(--color-text)",
        "th-text-secondary": "var(--color-text-secondary)",
        "th-primary": "var(--color-primary)",
        "th-secondary": "var(--color-secondary)",
        "th-accent": "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
export default config
