module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      link: "#34c",
      gray: "gray",
      pokemontype: {
        grass: "lightgreen",
        fire: "orange",
        water: "#6af",
        bug: "#ff6",
        poison: "purple",
        flying: "silver",
        normal: "salmon",
        electric: "gold",
        psychic: "pink",
        ghost: "#606",
        fighting: "darkred",
        rock: "#a60",
        ground: "#da0",
        ice: "lightblue",
        dragon: "blue",
        steel: "silver",
        fairy: "pink",
      },
    },
  },
  plugins: [],
};
