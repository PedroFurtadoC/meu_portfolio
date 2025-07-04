import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
				muted: "var(--muted)",
				nav: "var(--nav)",
				"nav-hover": "var(--nav-hover)",
				"primary-button": "var(--primary-button)",
				"primary-button-hover": "var(--primary-button-hover)",
				"secondary-button": "var(--secondary-button)",
				"secondary-button-hover": "var(--secondary-button-hover)",
				"light-blue": "var(--light-blue)",
				"extra-blue": "var(--extra-blue)",
				"blue-hover": "var(--blue-hover)",
				"light-contrast": "var(--light-contrast)",
				"fixed-button": "var(--fixed-button)",
				"fixed-button-hover": "var(--fixed-button-hover)",
			},
			fontFamily: {
				inter: "var(--font-inter)",
			},
		},
	},
	plugins: [],
} satisfies Config;
