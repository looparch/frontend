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
        gray: {
          "50": "rgb(247, 247, 247)",
          "100": "rgb(239, 239, 239)",
          "200": "rgb(223, 223, 223)",
          "300": "rgb(202, 202, 202)",
          "400": "rgb(168, 168, 168)",
          "500": "rgb(135, 135, 135)",
          "600": "rgb(109, 109, 109)",
          "700": "rgb(95, 95, 95)",
          "800": "rgb(74, 74, 74)",
          "900": "rgb(61, 61, 61)"
        },
        loop: {
          "50": "rgb(243, 248, 241)",
          "100": "rgb(233, 242, 228)",
          "200": "rgb(211, 229, 201)",
          "300": "rgb(180, 211, 164)",
          "400": "rgb(131, 182, 104)",
          "500": "rgb(98, 148, 72)",
          "600": "rgb(79, 119, 58)",
          "700": "rgb(69, 104, 50)",
          "800": "rgb(54, 82, 40)",
          "900": "rgb(45, 67, 32)"
        },
        indigo: {
          "50": "rgb(243, 248, 241)",
          "100": "rgb(233, 242, 228)",
          "200": "rgb(211, 229, 201)",
          "300": "rgb(180, 211, 164)",
          "400": "rgb(131, 182, 104)",
          "500": "rgb(98, 148, 72)",
          "600": "rgb(79, 119, 58)",
          "700": "rgb(69, 104, 50)",
          "800": "rgb(54, 82, 40)",
          "900": "rgb(45, 67, 32)"
        },
        white: 'rgb(243, 248, 241)',
        black: 'rgb(95, 95, 95)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-font-inter'),
  ],
}
