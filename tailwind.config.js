/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        nh: {
          blue: '#1f3be6',
          teal: '#0abf9c',
          red: '#e23d3d',
          orange: '#ff7a00',
          purple: '#6b21a8',
          magenta: '#a10f6a',
          graybg: '#f6f7fb'
        }
      },
      maxWidth: {
        'screen-xl-custom': '1200px'
      }
    }
  },
  plugins: []
}
