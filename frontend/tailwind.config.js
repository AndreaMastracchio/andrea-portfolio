/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                developerBlue: '#4D5BCE',
                developerGreen: '#43D9AD',
                borderLightGray: '#1E2D3D',
                textLightGray: '#607B96',
                backgroundPrimary: '#010C15',
                backgroundPage: '#011627',
                borderPrimary: '#1E2D3D',
                borderHover: '#FEA55F'
            }
        },
    },
    plugins: [],
}
