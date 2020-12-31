const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  purge: ["./src/**/*.js*", "./packages/**/src/**/*.js*"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      black: "#1C1C23",
      white: "#ffffff",
      gray: {
        100: "#C7C7C7",
        300: "#A5A5A5",
        500: "#838383",
        700: "#616161",
        900: "#1D1D1D"
      },
      accent: "#3A1B53",
      pink: {
        light: "#DF7280",
        DEFAULT: "#DF7280",
        dark: "#DA4759"
      },
      blue: {
        light: "#7096C7",
        DEFAULT: "#7096C7",
        dark: "#2E66B1"
      },
      teal: {
        light: "#3AA197",
        DEFAULT: "#3AA197",
        dark: "#23A499"
      },
      purple: {
        light: "#A074A7",
        DEFAULT: "#A074A7",
        medium: "#70297B",
        dark: "#3A1B53"
      },
      yellow: {
        light: "#FEE4A1",
        DEFAULT: "#FEE4A1",
        dark: "#FFD768"
      },
      red: "#C70000",
      orange: "#F46C0B",
      green: "#008600",
      cobalt: "#184C8B"
    },
    fontFamily: {
      sans: ['"Rubik", sans-serif'],
      serif: ['"Merriweather", serif'],
      mono: ['"Roboto Mono", mono'],
      rubik: ['"Rubik", sans-serif'],
      roboto: ['"Roboto", sans-serif'],
      delius: ['"Delius", fantasy']
    },
    extend: {
      typography: theme => ({
        sm: { css: { fontFamily: theme("fontFamily.roboto") } },
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            fontFamily: theme("fontFamily.serif"),
            a: {
              color: theme("colors.black"),
              fontFamily: theme("fontFamily.rubik"),
              fontWeight: 500,
              "&:hover": {
                color: theme("colors.accent")
              }
            },
            h1: {
              fontFamily: theme("fontFamily.rubik"),
              fontWeight: 300,
              fontSize: "60px"
            },
            h2: {
              fontFamily: theme("fontFamily.rubik"),
              fontWeight: 700,
              fontSize: "40px"
            },
            h3: {
              fontFamily: theme("fontFamily.rubik"),
              fontWeight: 900,
              fontSize: "28px"
            },
            h4: {
              fontFamily: theme("fontFamily.rubik"),
              fontWeight: 900,
              fontSize: "18px"
            },
            h5: {
              fontFamily: theme("fontFamily.rubik"),
              fontWeight: 700,
              fontSize: "14px"
            },
            h6: {
              fontFamily: theme("fontFamily.rubik"),
              fontWeight: 700,
              fontSize: "12px"
            },
            table: {
              fontFamily: theme("fontFamily.roboto")
            }
          }
        }
      }),
      zIndex: {
        "-1": "-1",
        "-10": "-10"
      }
    }
  },
  variants: {
    extend: {}
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")]
});
