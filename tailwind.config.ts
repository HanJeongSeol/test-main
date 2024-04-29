/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'prime-blue': '#333465',
        'gray-subtitle': '#334050',
        'light-gray': '#999999',
        'off-white': '#FAFAFA',
      },
      screens: {
        mobile: { max: '599px' },
        tablet: { min: '600px', max: '899px' },
        laptop: { min: '900px', max: '1199px' },
        desktop: { min: '1200px' },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
