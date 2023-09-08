import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: "media",
	content: [
		"./pages/**/*.{ts,tsx,mdx}",
		"./components/**/*.{ts,tsx,mdx}",
		"./app/**/*.{ts,tsx,mdx}",
	],
	theme: {
		extend: {
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
