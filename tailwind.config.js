const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['index.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                inter:  ['Inter', ...defaultTheme.fontFamily.sans],
            },
           maxWidth: {
               '125' : '125px'
           },
           colors: {
               'steel' : '#F2F2F2',
               'gold' : '#F1B71C'
           }
        }
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
