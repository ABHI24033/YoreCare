// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    // colors:{
    //   primaryColor:"rgb(77, 49, 215)",
    // },
    // fontFamily:{

    // },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')
  ],
}

