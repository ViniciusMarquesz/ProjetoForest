/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // garante build em tempo real (Tailwind 3 já vem, mas não custa)
  content: ['./src/**/*.{html,js}'],
  safelist: [
    'sm:gap-8',
    'sm:py-1',
    'sm:pl-4',
    'sm:pr-1',
    'p-4',
    'gap-2',
    'py-2',
    'px-4'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
      },
    },
    extend: {
      colors: {
        verde: {
          200: '#ACEF75',
          300: '#91EE77',
          400: '#17E880',
          700: '#2E482C',
          800: '#16281F',
          900: '#0F1C15',
          950: '#030504',
        },
      },
    },
  },
  plugins: [],
};
