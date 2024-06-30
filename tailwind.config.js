/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        PrimaryTitile: "#9395D3",
        PrimaryContent: "#B3B7EE",
        PrimaryBase: "#A2A3BB",
        PrimaryBg: "#FBF9FF",
        PrimaryHover: "#f3f0f9",
      }
    },
  },
  plugins: [],
}

