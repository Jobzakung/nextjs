import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: 
    {
      translate:{

      },
      rotate:{
        '30': '30deg',
        '45': '45deg',
        '60': '60deg',
        '225': '225deg',
      },
      width:{
        "165per": '165%',
        "15px": '15px',
        "60px": '60px',
        "200px": '200px',
      },
      height: {
        "1px": "1px",
        "15px": "15px",
        "60px": "60px",
        "200px": "200px",
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      top:{

      },
      left:{

      },
      right:{

      },
      gap:{
        "10px" : "10px",
        "20px" : "20px",
        "30px" : "30px",
        "40px" : "40px",
        "50px" : "50px",
        "60px" : "60px",
        "70px" : "70px",
        "80px" : "80px",
        "90px" : "90px",
        "100px" : "100px",
      },
      fontFamily: {
        'kanit': ['kanit', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
    require('autoprefixer'),

  ],
}
export default config
