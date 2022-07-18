module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: "gray",
      pokemontype: {
        grass: "lightgreen",
        poison: "purple",
        normal: "red",
      },
    },
  },
  plugins: [],
};
