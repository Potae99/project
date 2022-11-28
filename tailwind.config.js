/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
  
      backgroundImage: theme =>({
        'image': "url('/orange.jpg')"
        
      })
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}


