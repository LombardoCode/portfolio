module.exports = {
  purge: [
    // './components/**/*.{vue,js}',
    // './layouts/**/*.vue',
    // './pages/**/*.vue',
    // './plugins/**/*.{js,ts}',
    // './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      "blue-1000": "#012A69",
      "blue-1100": "#00183D",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "html-100": "#E56027",
      "html-200": "#943D18",

      "css-100": "#2760E5",
      "css-200": "#2449D8",

      "javascript-100": "#BfA021",
      "javascript-200": "#967E18",

      "gdscript-100": "#4385B5",
      "gdscript-200": "#2C5E82",

      "vuejs-100": "#3EAF7C",
      "vuejs-200": "#2A8059",

      "reactjs-100": "#05CDF1",
      "reactjs-200": "#029AB5",

      "laravel-100": "#F2281B",
      "laravel-200": "#A11910",

      "tailwindcss-100": "#06ADC9",
      "tailwindcss-200": "#03889E",

      "bootstrapcss-100": "#8452D4",
      "bootstrapcss-200": "#351460",

      "sass-100": "#CF649A",
      "sass-200": "#913D68",

      "pusher-100": "#300D4F",
      "pusher-200": "#170526",

      "project-portfolio": "#001C4F",
      "project-shortify": "#001151",
      "project-pomodoro": "#011230",
      "project-colorless": "#0083BD",
      "project-frontend_challenges": "#7513D6",
      "project-job_listings_with_filtering": "#50A5A6",
    }),
    extend: {
      width: {
        80: "23rem",
        "48rem": "48rem",
      },
      margin: {
        "-18": "-4.5rem",
        "-20": "-5rem",
        "-22": "-5.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
