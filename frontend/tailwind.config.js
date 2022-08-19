/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            gridTemplateRows: {
                'layout': 'auto minmax(400px, 1fr) auto',
            },
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                developerBlue: '#4D5BCE',
                developerGreen: '#43D9AD',
                developerComment: '#607B96',
                developerString: '#E99287',
                borderLightGray: '#1E2D3D',
                textLightGray: '#607B96',
                username: '#5565E8',
                backgroundPrimary: '#010C15',
                backgroundPage: '#011627',
                backgroundTerminal : '#011221',
                borderPrimary: '#1E2D3D',
                borderHover: '#FEA55F',
                backgroundAccordionMobile: '#1E2D3D',
                none: 'unset'
            }
        },
    },
    plugins: [],
}
