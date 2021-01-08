const colors = require("tailwindcss/colors");
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
        50: "#F9FAFB",
        100: "#F3F4F6",
        300: "#D1D5DB",
        500: "#6B7280",
        700: "#374151",
        900: "#111827"
      },
      accent: "#6D28D9",
      // updated -- pink 100 600
      pink: {
        light: "#FCE7F3",
        DEFAULT: "#FCE7F3",
        dark: "#EC4899"
      },
      // updated -- blue 100 500
      blue: {
        light: "#DBEAFE",
        DEFAULT: "#DBEAFE",
        dark: "#3B82F6"
      },
      // updated -- indigo 100 500
      teal: {
        light: "#E0E7FF",
        DEFAULT: "#E0E7FF",
        dark: "#6366F1"
      },
      // updated -- purple 100 500 700
      purple: {
        light: "#EDE9FE",
        DEFAULT: "#EDE9FE",
        medium: "#8B5CF6",
        dark: "#6D28D9"
      },
      // updated -- green 100 200
      yellow: {
        light: "#A7F3D0",
        DEFAULT: "#A7F3D0",
        dark: "#047857"
      },
      red: "#C70000",
      orange: "#FEF3C7", // yellow 100
      green: "#008600",
      cobalt: "#184C8B"
    },
    cursor: {
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
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
    50: "#F9FAFB",
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
    light: "#FCE7F3",
    DEFAULT: "#FCE7F3",
    dark: "#EC4899",
    // windmill
    50: "#FCE7F3",
    100: "#FCE7F3",
    200: "#FCE7F3",
    300: "#FCE7F3",
    400: "#FCE7F3",
    500: "#FCE7F3",
    600: "#EC4899",
    700: "#EC4899",
    800: "#EC4899",
    900: "#EC4899"
  },
  blue: {
    light: "#DBEAFE",
    DEFAULT: "#DBEAFE",
    dark: "#3B82F6",
    // windmill
    50: "#DBEAFE",
    100: "#DBEAFE",
    200: "#DBEAFE",
    300: "#DBEAFE",
    400: "#DBEAFE",
    500: "#DBEAFE",
    600: "#3B82F6",
    700: "#3B82F6",
    800: "#3B82F6",
    900: "#3B82F6"
  },
  teal: {
    light: "#E0E7FF",
    DEFAULT: "#E0E7FF",
    dark: "#6366F1",
    // windmill
    50: "#E0E7FF",
    100: "#E0E7FF",
    200: "#E0E7FF",
    300: "#E0E7FF",
    400: "#E0E7FF",
    500: "#E0E7FF",
    600: "#6366F1",
    700: "#6366F1",
    800: "#6366F1",
    900: "#6366F1"
  },
  purple: {
    light: "#EDE9FE",
    DEFAULT: "#EDE9FE",
    medium: "#8B5CF6",
    dark: "#6D28D9",
    50: "#EDE9FE",
    100: "#EDE9FE",
    200: "#EDE9FE",
    300: "#EDE9FE",
    400: "#8B5CF6",
    500: "#8B5CF6",
    600: "#8B5CF6",
    700: "#6D28D9",
    800: "#6D28D9",
    900: "#6D28D9"
  },
  yellow: {
    light: "#A7F3D0",
    DEFAULT: "#A7F3D0",
    dark: "#047857",
    50: "#A7F3D0",
    100: "#A7F3D0",
    200: "#A7F3D0",
    300: "#A7F3D0",
    400: "#A7F3D0",
    500: "#A7F3D0",
    600: "#047857",
    700: "#047857",
    800: "#047857",
    900: "#047857"
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
    DEFAULT: "#FEF3C7",
    50: "#FEF3C7",
    100: "#FEF3C7",
    200: "#FEF3C7",
    300: "#FEF3C7",
    400: "#FEF3C7",
    500: "#FEF3C7",
    600: "#F59E0B",
    700: "#F59E0B",
    800: "#F59E0B",
    900: "#F59E0B"
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
