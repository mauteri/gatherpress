module.exports = {
	purge: [
		// false
		// '../*.php',
		// '../template-parts/*.php'
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
