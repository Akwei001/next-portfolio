module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Oswald: ['Oswald', 'sans-serif'],
    },
    boxShadow: {
      'custom-light': ' 0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c',
      'custom-neushadow':
        'inset   2px 4px 8px #b1b4b6, inset  -2px -4px 8px #ffffff  ',
      'custom-neubutton':
        '4px 4px 4px 0px #d1d9e6 , -4px -2px 4px 0px #ffffff ',
      'custom-neubutton-dark':
        '-14px -14px 40px #1d2024, 14px 14px 40px #353a41',
      'custom-neushadow-dark':
        ' inset 10px 10px  10px #1d2024, inset -6px -6px  15px #353a41',
      'custom-neushadow-dark2':
        ' inset 10px 10px  10px #1d2024, inset -4px -4px  10px #353a41',
    },

    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },

  plugins: [],
};
