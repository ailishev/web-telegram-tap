/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				custom: {
					primary: '#FFE24C',
					secondary: '#FFFFFF',
					accent: '#FF0000',
					progress: '#FED33D',
					bottombar: '#151623',
				},
			},
			borderColor: {
				custom: {
					border: '#FFBC23',
				},
			},
		},
	},
	plugins: [],
}
