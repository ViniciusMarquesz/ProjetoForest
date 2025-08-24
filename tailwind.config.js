/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

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
      keyframes: {
        slideIn: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        ['slide-in']: 'slideIn .4s ease-in-out forwards',
        ['fade-in']: 'fadeIn .4s ease-in-out forwards',
      },
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
  plugins: [
    plugin(({ addUtilities }) => {
      function animationDelay() {
        const delays = {};
        for (let i = 0; i <= 12; i++) {
          delays[`.animate-${i}`] = {
            'animation-delay': `${i * 100}ms`,
          };
        }
        return delays;
      }

      addUtilities(animationDelay());
    }),
  ],
};
