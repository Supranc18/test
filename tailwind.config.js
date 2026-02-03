/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate-left': 'rotate-left 10s linear infinite', 
        "marquee": 'marquee 10s linear infinite',
       'fade-down': 'fade-down 1s ease-out forwards',
       'fade-up': 'fade-up 1s ease-out forwards',
       'fade-left': 'fade-left 1s ease-out forwards',
      },
      keyframes: {
        'fade-down': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-50px)',
            clipPath: 'inset(0 0 100% 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
            clipPath: 'inset(0 0 0 0)', 
          },
        },
        'fade-left': {
          '0%': {
            opacity: 0,
            clipPath: 'inset(0 0 0 100%)',
          },
          '100%': {
            opacity: 1,
            clipPath: 'inset(0 0 0 0)', 
          },
        },
        'fade-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(0px)',
            clipPath: 'inset(0 0 100% 0)', 
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(-50px)',
            clipPath: 'inset(0 0 0 0)'
          },
        },
        'rotate-left': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(1%)' }, 
          '100%': { transform: 'translateX(-100%)' }, 
        }, 
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Arial', 'sans-serif'], 
      },
    },
  },
  plugins: [require('daisyui')], 
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1E799A",
          
        },
      },
    ],
  },
};
