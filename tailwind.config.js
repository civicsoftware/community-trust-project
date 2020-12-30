const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  purge: ["./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")]
});
