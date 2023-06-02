/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "**/*.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Plus Jakarta Sans', 'sans-serif'],
                body: ['SVN-Mark Pro']
            },

            colors: {
                primary: 'rgb(254,51,137)',
            },

            fontSize: {
                1: '4px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '20px',
                6: '24px',
                7: '28px',
                8: '32px',
                9: '36px',
                10: '40px',
                11: '44px',
                12: '48px',
                14: '56px',
                16: '64px',
                20: '80px',
                24: '96px',
            },

            lineHeight: {
                1: '4px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '20px',
                6: '24px',
                7: '28px',
                8: '32px',
                9: '36px',
                10: '40px',
                11: '44px',
                12: '48px',
                14: '56px',
                16: '64px',
                20: '80px',
                24: '96px',
            },

            container: {
                padding: {
                    DEFAULT: '1rem',
                    md: '5rem',
                    xl: '60px',
                },
                margin: 'auto',
                center: true,
                screens: {
                    'sxm': '480px',
                    'sm': '640px',
                    'md': '768px',
                    'lg': '1024px',
                    'xl': '1280px',
                    'xsl': '1366px',
                    'xxl': '1440px',
                    '3xl': '1536px',
                }
            },

            screens: {
                'sxm': '480px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                'xsl': '1366px',
                'xxl': '1440px',
                '3xl': '1536px',
            },

            backgroundPosition: {
                'center-bottom': 'center bottom'
            },

            borderWidth: {
                1: '1px',
            },

            animation: {
                ripple: 'ripple 1s linear infinite',
                arrow: 'arrowDown 2s linear infinite',
            },
        },
    },
    plugins: [],
}

