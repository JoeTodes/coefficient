module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.vue"],
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
