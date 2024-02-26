// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: [
    './slices/**/*.{js,ts,vue}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bitter: ['Bitter', 'serif',],
        ubuntu: ['Ubuntu', 'sans-serif',],
        sacramento: ['Sacramento', 'sans-serif',],
        roboto: ['Roboto', 'sans-serif',],
        montserrat: ['Montserrat', 'serif',],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
