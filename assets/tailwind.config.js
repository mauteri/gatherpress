module.exports = {
	purge: [
		// @todo figure out purge.
		false
	],
	theme: {
		extend: {},
	},
	variants: {
		display: ['group-hover']
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
	],
}
