/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
   
    extend: { 
      colors: {
      Orange: '#FC6736',
      blue: '#0C2D57',
      lightOrange: '#FFB0B0',
      Gray: '#EFECEC',
      current: '#fff',
    },
    height:{
      
       
          '100': '32rem',
        
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')

  ],
  important: true,
}
