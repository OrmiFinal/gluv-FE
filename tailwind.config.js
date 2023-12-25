/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spoqa Han Sans Neo', 'Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Inconsolata', 'monospace'],
        custom: ['YourSelectedFont', 'sans'],
        montserrat: ['Montserrat', 'sans'],
        lato: ['Lato', 'sans'],
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans'],
        nunito: ['Nunito', 'sans'],
        poppins: ['Poppins', 'sans'],
        raleway: ['Raleway', 'sans'],
        oswald: ['Oswald', 'sans'],
        source: ['Source Sans Pro', 'sans'],
        quick: ['Quicksand', 'sans'],
        noto: ['Noto Sans', 'sans'],
        ubuntu: ['Ubuntu', 'sans'],
        crimson: ['Crimson Text', 'serif'],
        karla: ['Karla', 'sans'],
        inter: ['Inter', 'sans'],
        josefin: ['Josefin Sans', 'sans'],
        comfortaa: ['Comfortaa', 'cursive'],
        anton: ['Anton', 'sans'],
        cormorant: ['Cormorant Garamond', 'serif'],
        fantasy: ['Fantasy', 'cursive'],
        indie: ['Indie Flower', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        merienda: ['Merienda', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        yanone: ['Yanone Kaffeesatz', 'sans'],
      },
    },
  },
  plugins: [],
}