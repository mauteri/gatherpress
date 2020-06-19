const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
		// tailwindcss('./css/tailwind.config.js'),
		tailwindcss('./css/tailwind.js'),
        require('autoprefixer'),
    ],
};
