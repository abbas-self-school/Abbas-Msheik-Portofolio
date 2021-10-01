module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        animeColor: {
          "0%": { color: "#fff"},
          "100%": { color: "#ead014"}
        },
        animeWidth: {
          "0%": { width: "1%", borderColor: "#fff"},
          "100%": { width: "40%", borderColor: "#ead014"}
        },
        animeScroll: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-2px)"},
        }
      },
      animation: {
        animeColor: "animeColor .7s ease-in-out infinite normal",
        animeWidth: "animeWidth 3s ease-in-out infinite normal",
        animeScroll: "animeScroll 0.5s ease-in-out infinite normal",
      },
      colors: {
        mainCol: '#ead014'
      },
      fontFamily: {
        StickNoBills: ["StickNoBills", "sans-serif"],
        ubunutu: ["ubunutu", "sans-serif"],
        Bodoni: ["BodoniXT", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
