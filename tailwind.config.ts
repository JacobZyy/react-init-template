/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '432px',
      lg: '1025px',
    },
    extend: {
      maxWidth: {
        'container': '75rem',
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },
      borderRadius: {
        4: '0.25rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        1: '1px',
      },
      leading: {
        '9/10': '0.9',
      },
      zIndex: {
        'top-more-5': '10005',
        'top': '10000',
        'top-less-5': '9995',
        'top-less-10': '9990',
      },
      spacing: {
        '11': '2.75rem',
        '12.5': '3.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '75': '18.75rem',
        '176': '44rem',
        'design-base': '90rem',
      },
      colors: {
        'primary': {
          1000: 'rgba(77, 30, 37, 1)',
          900: 'rgba(128, 49, 61, 1)',
          800: 'rgba(179, 69, 85, 1)',
          700: 'rgba(204, 79, 98, 1)',
          600: 'rgba(230, 89, 110, 1)',
          500: 'rgba(255, 99, 122, 1)',
          400: 'rgba(255, 115, 135, 1)',
          300: 'rgba(255, 146, 162, 1)',
          200: 'rgba(255, 177, 188, 1)',
          100: 'rgba(255, 239, 242, 1)',
        },
        'second': {
          100: 'rgba(255, 168, 65, 0.1)',
          600: 'rgba(255, 168, 65, 1)',
        },
        'third': {
          DEFAULT: 'rgba(255, 139, 71, 1)',
          600: 'rgba(255, 109, 130, 1)',
        },
        'black': {
          1000: 'rgba(0, 0, 0, 1)',
          900: 'rgba(25, 25, 25, 1)',
          850: 'rgb(29,29,29, 1)',
          825: 'rgb(41,41,41, 1)',
          800: 'rgba(76, 76, 76, 1)',
          700: 'rgba(128, 128, 128, 1)',
          600: 'rgba(229, 229, 229, 1)',
          100: 'rgba(255, 255, 255, 1)',
        },

        'op-black': {
          1000: 'rgba(0, 0, 0, 1)',
          900: 'rgba(0, 0, 0, 0.9)',
          800: 'rgba(0, 0, 0, 0.8)',
          700: 'rgba(0, 0, 0, 0.7)',
          600: 'rgba(0, 0, 0, 0.6)',
          500: 'rgba(0, 0, 0, 0.5)',
          400: 'rgba(0, 0, 0, 0.4)',
          300: 'rgba(0, 0, 0, 0.3)',
          200: 'rgba(0, 0, 0, 0.2)',
          150: 'rgba(0, 0, 0, 0.15)',
          100: 'rgba(0, 0, 0, 0.1)',
          80: 'rgba(0, 0, 0, 0.08)',
          40: 'rgba(0, 0, 0, 0.04)',
        },
        'op-white': {
          1000: 'rgba(255, 255, 255, 1)',
          900: 'rgba(255, 255, 255, 0.9)',
          800: 'rgba(255, 255, 255, 0.8)',
          700: 'rgba(255, 255, 255, 0.7)',
          600: 'rgba(255, 255, 255, 0.6)',
          500: 'rgba(255, 255, 255, 0.5)',
          400: 'rgba(255, 255, 255, 0.4)',
          300: 'rgba(255, 255, 255, 0.3)',
          200: 'rgba(255, 255, 255, 0.2)',
          100: 'rgba(255, 255, 255, 0.1)',
          80: 'rgba(255, 255, 255, 0.08)',
          50: 'rgba(255, 255, 255, 0.05)',
        },
        'error': {
          DEFAULT: '#c44444',
          1000: 'rgba(73, 6, 14, 1)',
          900: 'rgba(122, 11, 24, 1)',
          800: 'rgba(171, 15, 33, 1)',
          700: 'rgba(220, 19, 42, 1)',
          600: 'rgba(229, 20, 44, 1)',
          500: 'rgba(244, 21, 47, 1)',
          400: 'rgba(249, 138, 151, 1)',
          300: 'rgba(252, 185, 193, 1)',
          200: 'rgba(253, 208, 213, 1)',
          100: 'rgba(254, 232, 234, 1)',
        },
        'success': {
          DEFAULT: '#71CB6F',
        },

      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        soundWave: {
          '0%': {
            transform: 'scaleY(0.2)',
          },
          '50%': {
            transform: 'scaleY(1)',
          },
          '100%': {
            transform: 'scaleY(0.2)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out 1',
        'sound-wave': 'soundWave 0.3s linear infinite',
      },
    },
  },
  plugins: [],
}
