/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
   return ({ opacityValue }) => {
      if (opacityValue !== undefined) {
         return `rgba(var(${variableName}), ${opacityValue})`
      } else {
         return `rgba(var(${variableName}))`
      }
   }
}

module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         screens: {
            xsPhone: '320px',
            smPhone: '360px',
            lgPhone: '400px',
            xlPhone: '440px',
            smTablet: '540px',
            baseTablet: '760px',
            lgTablet: '980px',
            baseLaptop: '1020px',
            desktop: '1440px',
         },
         colors: {
            primary: {
               50: withOpacity('--theme-50'),
               100: withOpacity('--theme-100'),
               200: withOpacity('--theme-200'),
               300: withOpacity('--theme-300'),
               400: withOpacity('--theme-400'),
               500: withOpacity('--theme-500'),
               600: withOpacity('--theme-600'),
               700: withOpacity('--theme-700'),
               800: withOpacity('--theme-800'),
               900: withOpacity('--theme-900'),
               950: withOpacity('--theme-950'),
            },
         },
         fontFamily: {
            openSans: ['Open Sans', 'sans-serif'],
            plexSerif: ['IBM Plex Serif', 'serif'],
         },
      },
   },
   plugins: [],
}
