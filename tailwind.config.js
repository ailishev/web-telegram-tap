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
					background: '#1C1F30',
					circle: '#26AFF3',
					card: '#0A0710',
				},
			},
			backgroundImage: {
				'blue-gradient': 'linear-gradient(135deg, #26AFF3, #3177EA)',
			},
			borderColor: {
				custom: {
					border: '#FFBC23',

					card: '#15131C',
				},
			},
		},
	},
	plugins: [],
}
