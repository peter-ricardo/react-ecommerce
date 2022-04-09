module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '440px',
      md: '640px',
      lg: '1024px',
      xl: '1240px',
    },
    colors: {
      grey: {
        ligther: '#F7F7F7',
        light: '#E5E5E5',
        normal: '#707070',
        dark: '#404040',
      },
      smoke: '#202020',
      blue: {
        normal: '#47AFFF',
        dark: '##4978E8',
      },
      white: '#FFF',
    },
  },
  plugins: [],
};
