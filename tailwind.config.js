/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'THEME': {
          'black': {
            '03': 'rgba(0, 0, 0, 0.03)',
            '05': 'rgba(0, 0, 0, 0.05)',
            '10': 'rgba(0, 0, 0, 0.1)',
            '15': 'rgba(0, 0, 0, 0.15)',
            '20': 'rgba(0, 0, 0, 0.2)',
            '30': 'rgba(0, 0, 0, 0.3)',
            '40': 'rgba(0, 0, 0, 0.4)',
            '50': 'rgba(0, 0, 0, 0.5)',
            '60': 'rgba(0, 0, 0, 0.6)',
            '70': 'rgba(0, 0, 0, 0.7)',
            '80': 'rgba(0, 0, 0, 0.8)',
            '90': 'rgba(0, 0, 0, 0.8)',
            '100': '#000000',
          },
          'white': {
            '03': 'rgba(255, 255, 255, 0.03)',
            '05': 'rgba(255, 255, 255, 0.05)',
            '10': 'rgba(255, 255, 255, 0.1)',
            '15': 'rgba(255, 255, 255, 0.15)',
            '20': 'rgba(255, 255, 255, 0.2)',
            '30': 'rgba(255, 255, 255, 0.3)',
            '40': 'rgba(255, 255, 255, 0.4)',
            '50': 'rgba(255, 255, 255, 0.5)',
            '60': 'rgba(255, 255, 255, 0.6)',
            '70': 'rgba(255, 255, 255, 0.7)',
            '80': 'rgba(255, 255, 255, 0.8)',
            '90': 'rgba(255, 255, 255, 0.8)',
            '100': '#FFFFFF',
          },

          'main': {
            '10': 'rgba(180, 100, 200, 0.1)',
            '20': 'rgba(180, 100, 200, 0.2)',
            '40': 'rgba(180, 100, 200, 0.4)',
            '50': 'rgba(180, 100, 200, 0.5)',
            '90': 'rgba(180, 100, 200, 0.9)',
            '100': '#B464C8',
          },
          'sub': '#906EFF',

          'line': '#E6E6E6',
          'info': '#03A9F4',
          'success': '#00BFA5',
          'warning': '#FFA800',
          'error': '#EF5350',
          'error-tooltip': 'rgba(239, 83, 80, 0.9)',
          'facebook': '#4080FF',
          'naver': '#03C75A',
          'primary-guide1': '#00FFE0',
          'primary-guide2': '#FA00FF',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      dropShadow: {
        'table': ['0px 0px 4px rgba(0,0,0,0.1)', '0px 5px 10px rgba(0,0,0,0.1)'],
      }
    },
  },
  plugins: [],
}
