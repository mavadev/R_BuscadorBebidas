/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				header: "url('/bg.jpg')",
			},
			colors: {
				black: '#141414',
				primary: colors.orange[600],
				primary_hover: colors.orange[800],
			},
		},
	},
	plugins: [],
};
