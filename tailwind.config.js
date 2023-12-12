/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
		"./node_modules/preline/preline.js",
	],
	theme: {
		extend: {
			colors: {
				"custom-black": "#333333",
				"custom-yellow": "#FFCC00",
				"custom-dark-yellow": "#FFCC00",
				"custom-gray": "#DEDEDE",
				"custom-blue": "#008FFF",
				"custom-light-gray": "#B8B8B8",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
