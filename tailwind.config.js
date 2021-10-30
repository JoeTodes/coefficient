module.exports = {
	purge: {
		content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.vue"],
		safelist: [
			/enter$/,
			/enter-to$/,
			/leave$/,
			/leave-to$/,
			/leave-active$/,
			/enter-active$/,
			/move$/,
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				display: ['"Nunito Sans"'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
