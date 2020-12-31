module.exports = {
  purge: ["./src/**/*.jsx"],
  plugins: [require("tailwindcss")('./tailwind.config.js'), require("autoprefixer")]
};
