/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      fontSize: {
        xxs: '8px',
      },
      colors: {
        dark: '#1e293b',
        light: '#f1f5f9',
        orange: '#FFA800',
        yellow: '#FFCC27'
      },
      fontFamily: {
        'poppins': ['Poppins', 'serif'],
        'lobster': ['Lobster Two', 'serif'],
        'montserrat': ['Montserrat', 'serif'],
        // 'balltimore': ['BalltimoreSans', 'serif'],
        // 'gochi': ['Gochi Hand', 'serif'],
      },
      letterSpacing: {
        morewidest: '.08em',
      },
      animation: {
        'bounce1': 'bounce 1.5s infinite',
        'bounce2': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite', 
      },
      
    },
  },
  plugins: [],
};
