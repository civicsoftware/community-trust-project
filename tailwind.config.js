const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  purge: ["./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '-10': '-10',
      },
    }
  },
  variants: {
    extend: {}
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")]
});
