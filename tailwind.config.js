module.exports = {
    purge: {
      enabled: true,
      content: ['./**/*.html', './**/*.js' ],
    },
    darkMode: false, 
    theme: {
      container: {
        padding: {
          '2xl': '6rem',
          DEFAULT: '1rem',
          lg: '4rem',
          sm: '2rem',
          xl: '5rem',
        },
      },
      extend: {
        backgroundImage: () => ({
          'hero-lg': "url('/dist/assets/images/bg-hero-lg.jpg')",
          'hero-sm': "url('/dist/assets/images/bg-hero-sm.jpg')",
        }),
        fontFamily: {
          display: ['Roboto', 'sans-serif']
        }, 
        minHeight:{
          '1/2': '50vh',
          '7/20': '35vh'
        },
      },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  }