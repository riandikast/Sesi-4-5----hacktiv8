/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'github-blue': '#161b22',
        'github-darker-blue': '#0d1117',
        'github-light-blue': '#394c5d',
        'github-grey': '#8b9095',
        'github-darker-grey': '#21262c',
        'github-another-grey': '#c9d1d9',
        'github-other-blue': '#58a6ff',
        'search' : '#0d1117',
        'github-border' : '#30363d',
        
       
        

      
      },
    },

    width: {
      'w' : '18rem',
      'mid' : '23rem',
      'mid1' : '20rem',
      'mid2' : '24rem',
      'short': '2.6rem',
      'long': '3rem',
      'mid-button' : '100px',
    },

   

    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'heavy': '200px',
      'large': '12px',
    },

    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      'xxl': '1.35rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.45rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },

  
  plugins: [],
}