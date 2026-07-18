const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({ matchComponents, matchUtilities, theme }) {
            matchComponents(
                {
                    icon: (value) => ({
                        height: value,
                        width: value,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }),
                },
                { values: theme('iconSize') },
            );

            matchUtilities(
                {
                    'font-size': (value) => ({
                        fontSize: `${value / 16}rem`,
                    }),
                },
                { values: theme('fontSize') },
            );
        }),
    ],
};
