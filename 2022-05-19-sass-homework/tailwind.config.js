module.exports = {
  content: [
    './src/**/*.{html,js,css}',
    './index.html'
  ],
  theme:
  {
    screens: 
    {
      sm: '640px',
      md: '820px', //overrides tailwind default 768px
      lg: '1024px',
      xl: '1280px',
    },
    extend: 
    {
      colors: 
      {
        mygrey: 
        {
          '600': '#e0e0e0',
          '700': '#212121',
        },
        myteal: 
        {
          '300': '#008080',
          '600': '#00bcd4',
        },
        myblue:
        {
          '300': '#00bcd4',
        }
      },
      borderRadius: 
      {
        'default': '2px',
      },
    }
  },
  plugins: [],
}
