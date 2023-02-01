/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],  
  theme: {
    extend: {
    
    backgroundImage:{
      hero: "url('/bg-hero.jpg')"
      }
    },
  },
  plugins: [],
}
