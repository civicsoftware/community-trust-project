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
      // updated with gray
      gray: {
        100: "#F3F4F6",
        300: "#D1D5DB",
        500: "#6B7280",
        700: "#374151",
        900: "#111827"
      },
      accent: "#4C1D95",
      // updated -- pink 200 700
      pink: {
        light: "#FBCFE8",
        DEFAULT: "#FBCFE8",
        dark: "#BE185D"
      },
      // updated -- blue 200 700
      blue: {
        light: "#BFDBFE",
        DEFAULT: "#BFDBFE",
        dark: "#1D4ED8"
      },
      // updated -- indigo 200 700
      teal: {
        light: "#C7D2FE",
        DEFAULT: "#C7D2FE",
        dark: "#4338CA"
      },
      // updated -- purple 200 700 900
      purple: {
        light: "#DDD6FE",
        DEFAULT: "#DDD6FE",
        medium: "#6D28D9",
        dark: "#4C1D95"
      },
      // updated -- yellow 200 700
      yellow: {
        light: "#FDE68A",
        DEFAULT: "#FDE68A",
        dark: "#B45309"
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
    200: "#F3F4F6",
    300: "#D1D5DB",
    400: "#D1D5DB",
    500: "#6B7280",
    600: "#6B7280",
    700: "#374151",
    800: "#374151",
    900: "#111827"
  },
  pink: {
    light: "#FBCFE8",
    DEFAULT: "#FBCFE8",
    dark: "#BE185D",
    // windmill
    50: "#FBCFE8",
    100: "#FBCFE8",
    200: "#FBCFE8",
    300: "#FBCFE8",
    400: "#FBCFE8",
    500: "#FBCFE8",
    600: "#BE185D",
    700: "#BE185D",
    800: "#BE185D",
    900: "#BE185D"
  },
  blue: {
    light: "#BFDBFE",
    DEFAULT: "#BFDBFE",
    dark: "#1D4ED8",
    // windmill
    50: "#BFDBFE",
    100: "#BFDBFE",
    200: "#BFDBFE",
    300: "#BFDBFE",
    400: "#BFDBFE",
    500: "#BFDBFE",
    600: "#1D4ED8",
    700: "#1D4ED8",
    800: "#1D4ED8",
    900: "#1D4ED8"
  },
  teal: {
    light: "#C7D2FE",
    DEFAULT: "#C7D2FE",
    dark: "#4338CA",
    // windmill
    50: "#C7D2FE",
    100: "#C7D2FE",
    200: "#C7D2FE",
    300: "#C7D2FE",
    400: "#C7D2FE",
    500: "#C7D2FE",
    600: "#4338CA",
    700: "#4338CA",
    800: "#4338CA",
    900: "#4338CA"
  },
  purple: {
    light: "#DDD6FE",
    DEFAULT: "#DDD6FE",
    medium: "#6D28D9",
    dark: "#4C1D95",
    50: "#DDD6FE",
    100: "#DDD6FE",
    200: "#DDD6FE",
    300: "#DDD6FE",
    400: "#6D28D9",
    500: "#6D28D9",
    600: "#6D28D9",
    700: "#4C1D95",
    800: "#4C1D95",
    900: "#4C1D95"
  },
  yellow: {
    light: "#FDE68A",
    DEFAULT: "#FDE68A",
    dark: "#B45309",
    50: "#FDE68A",
    100: "#FDE68A",
    200: "#FDE68A",
    300: "#FDE68A",
    400: "#FDE68A",
    500: "#FDE68A",
    600: "#B45309",
    700: "#B45309",
    800: "#B45309",
    900: "#B45309"
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
