/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'card-pattern': 'linear-gradient(134deg, #09E 0%, rgba(235, 235, 235, 0.00) 100%);',
                'most-order': 'linear-gradient(180deg, rgba(0, 153, 238, 0.00) 0%, #3B97CB 100%);',
            },
            colors: {
                lightblue: {
                    400: '#0099EE',
                    300: '#2D9CDB',
                    200: '#CAECFF',
                    100: '#E7F5FD',
                    500: '#3B97CB',
                },
                lightgreen: {
                    500: '#56E4A0',
                },
                lightred: {
                    500: '#F36868',
                },
                stroke: '#535353',
                body: '#E7F5FD',
                neutral: '#838383',
                lightgray: '#C9C9C9',
            },
        },
    },
    plugins: [
        plugin(({ addComponents, theme }) => {
            addComponents({
                '.header-before': {
                    clipPath: 'ellipse(100% 100% at 50% 0%)',
                    content: "''",
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '80%',
                    background: theme('colors.lightred.500'),
                    zIndex: '-1',
                },
                '.heading-1': {
                    fontSize: '44px',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    letterSpacing: '3px',
                },
                '.heading-2': {
                    fontSize: '42px',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    letterSpacing: '3px',
                },
                '.heading-3': {
                    fontSize: '38px',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    letterSpacing: '2.814px',
                },
                '.heading-4': {
                    fontSize: '36px',
                    fontWeight: '700',
                    lineHeight: 'normal',
                },
                '.heading-5': {
                    fontSize: '30px',
                    fontWeight: '700',
                    lineHeight: 'normal',
                },
                '.heading-6': {
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    letterSpacing: '1.777px',
                },
                '.heading-section': {
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    letterSpacing: '1.206px',
                },
            })
        }),
    ],
}
