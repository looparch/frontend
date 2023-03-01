/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./gatsby-ssr.tsx",
  ],
  theme: {
    fontFeatureSettings: {
      numeric: ['tnum', 'salt', 'ss02']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '36px',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {
      colors: {
        loop: {
          '50':  '#fafaf7',
          '100': '#f5f1e5',
          '200': '#e8ddc6',
          '300': '#ccb997',
          '400': '#a78f66',
          '500': '#876e41',
          '600': '#6c532c',
          '700': '#523e23',
          '800': '#372a1a',
          '900': '#221a11',
        },
        indigo: {
          '50':  '#fafaf7',
          '100': '#f5f1e5',
          '200': '#e8ddc6',
          '300': '#ccb997',
          '400': '#a78f66',
          '500': '#876e41',
          '600': '#6c532c',
          '700': '#523e23',
          '800': '#372a1a',
          '900': '#221a11',
        },
        gray: {
          '50':  '#fafaf7',
          '100': '#f5f1e5',
          '200': '#e8ddc6',
          '300': '#ccb997',
          '400': '#a78f66',
          '500': '#876e41',
          '600': '#6c532c',
          '700': '#523e23',
          '800': '#372a1a',
          '900': '#221a11',
        },
        white: '#fafaf7',
        black: '#221a11',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-font-inter'),
  ],
}
