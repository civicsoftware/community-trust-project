const windmill = require("@windmill/react-ui/config");

const merged = windmill({
  purge: {
    enabled: false,
    content: ["./src/**/*.js*", "./packages/**/src/**/*.js*"]
  },
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
      roboto: ['"Roboto", sans-serif']
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

merged.theme.colors = {
  // our config
  transparent: "transparent",
  white: "#ffffff",
  black: "#1C1C23",
  gray: {
    50: "#F3F2F3",
    100: "#F3F2F3",
    200: "#C7C7C7",
    300: "#A5A5A5",
    400: "#A5A5A5",
    500: "#838383",
    600: "#838383",
    700: "#616161",
    800: "#616161",
    900: "#1D1D1D"
  },
  pink: {
    light: "#DF7280",
    DEFAULT: "#DF7280",
    dark: "#DA4759",
    // windmill
    50: "#DF7280",
    100: "#DF7280",
    200: "#DF7280",
    300: "#DF7280",
    400: "#DF7280",
    500: "#DF7280",
    600: "#DA4759",
    700: "#DA4759",
    800: "#DA4759",
    900: "#DA4759"
  },
  blue: {
    light: "#7096C7",
    DEFAULT: "#7096C7",
    dark: "#2E66B1",
    // windmill
    50: "#7096C7",
    100: "#7096C7",
    200: "#7096C7",
    300: "#7096C7",
    400: "#7096C7",
    500: "#7096C7",
    600: "#2E66B1",
    700: "#2E66B1",
    800: "#2E66B1",
    900: "#2E66B1"
  },
  teal: {
    light: "#3AA197",
    DEFAULT: "#3AA197",
    dark: "#23A499",
    // windmill
    50: "#3AA197",
    100: "#3AA197",
    200: "#3AA197",
    300: "#3AA197",
    400: "#3AA197",
    500: "#3AA197",
    600: "#23A499",
    700: "#23A499",
    800: "#23A499",
    900: "#23A499"
  },
  purple: {
    light: "#A074A7",
    DEFAULT: "#A074A7",
    medium: "#70297B",
    dark: "#3A1B53",
    50: "#A074A7",
    100: "#A074A7",
    200: "#A074A7",
    300: "#A074A7",
    400: "#70297B",
    500: "#70297B",
    600: "#70297B",
    700: "#3A1B53",
    800: "#3A1B53",
    900: "#3A1B53"
  },
  yellow: {
    light: "#FEE4A1",
    DEFAULT: "#FEE4A1",
    dark: "#FFD768",
    50: "#FEE4A1",
    100: "#FEE4A1",
    200: "#FEE4A1",
    300: "#FEE4A1",
    400: "#FEE4A1",
    500: "#FEE4A1",
    600: "#FFD768",
    700: "#FFD768",
    800: "#FFD768",
    900: "#FFD768"
  },
  red: {
    DEFAULT: "#C70000",
    50: "#C70000",
    100: "#C70000",
    200: "#C70000",
    300: "#C70000",
    400: "#C70000",
    500: "#C70000",
    600: "#C70000",
    700: "#C70000",
    800: "#C70000",
    900: "#C70000"
  },
  orange: {
    DEFAULT: "#F46C0B",
    50: "#F46C0B",
    100: "#F46C0B",
    200: "#F46C0B",
    300: "#F46C0B",
    400: "#F46C0B",
    500: "#F46C0B",
    600: "#F46C0B",
    700: "#F46C0B",
    800: "#F46C0B",
    900: "#F46C0B"
  },
  green: {
    DEFAULT: "#008600",
    50: "#008600",
    100: "#008600",
    200: "#008600",
    300: "#008600",
    400: "#008600",
    500: "#008600",
    600: "#008600",
    700: "#008600",
    800: "#008600",
    900: "#008600"
  },
  cobalt: {
    DEFAULT: "#184C8B",
    50: "#184C8B",
    100: "#184C8B",
    200: "#184C8B",
    300: "#184C8B",
    400: "#184C8B",
    500: "#184C8B",
    600: "#184C8B",
    700: "#184C8B",
    800: "#184C8B",
    900: "#184C8B"
  }
};

module.exports = merged;
