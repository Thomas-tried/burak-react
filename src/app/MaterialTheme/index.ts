import { createTheme } from "@mui/material/styles";
import shadow from "./shadow";
import typography from "./typography";

/**
 * BURAK THEME
 * espresso #3b2418 · cream #f2e8da · paprika #b3451f (new accent)
 */
const espresso = "#3b2418";
const cream = "#f2e8da";
const creamDeep = "#e4d3bb";
const paper = "#faf4ea";
const paprika = "#b3451f";
const paprikaDark = "#963818";

const light = {
  palette: {
    type: "light",
    background: {
      default: cream,
      paper: paper,
    },
    primary: {
      contrastText: cream,
      main: paprika,
      dark: paprikaDark,
    },
    secondary: {
      contrastText: espresso,
      main: creamDeep,
    },
    text: {
      primary: espresso,
      secondary: "#7d6150",
      dark: espresso,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: { height: "100%" },
        body: { background: cream, height: "100%", minHeight: "100%" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          letterSpacing: "0.02em",
          borderRadius: 999,
          padding: "8px 22px",
          boxShadow: "none",
          transition: "all 0.25s ease",
          "&:hover": { boxShadow: "none", transform: "translateY(-2px)" },
        },
        containedPrimary: {
          boxShadow: "0 12px 24px -12px rgba(179, 69, 31, 0.8)",
          "&:hover": {
            backgroundColor: paprikaDark,
            boxShadow: "0 14px 26px -12px rgba(179, 69, 31, 0.9)",
          },
        },
        containedSecondary: {
          "&:hover": { backgroundColor: "#d8c3a4" },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 700, boxShadow: "none" },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: 3,
          backgroundColor: paprika,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "#5a3a2a",
          "&.Mui-selected": { color: paprika },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
          backgroundColor: paper,
          border: "1px solid rgba(59, 36, 24, 0.1)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 10,
          margin: "2px 6px",
          "&:hover": { backgroundColor: "rgba(179, 69, 31, 0.1)" },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginBottom: 14,
          borderRadius: 16,
          backgroundColor: paper,
          border: "1px solid rgba(59, 36, 24, 0.1)",
          boxShadow: "0 8px 24px -14px rgba(59, 36, 24, 0.35)",
          "&:before": { display: "none" },
          "&:first-of-type": { borderRadius: 16 },
          "&:last-of-type": { borderRadius: 16 },
          "&.Mui-expanded": { margin: "0 0 14px" },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: { padding: "4px 22px", fontWeight: 600 },
        expandIconWrapper: { color: paprika },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          color: espresso,
          "&.Mui-selected": {
            backgroundColor: espresso,
            color: cream,
            "&:hover": { backgroundColor: "#5a3a2a" },
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorSecondary: { backgroundColor: paprika, color: cream },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: { color: paprika },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 14, backgroundColor: "#fffaf2" },
      },
    },
  },
  shadow,
  typography,
};

// A custom theme for this app
let theme = createTheme(light as any);
theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1300px",
          },
        },
      },
    },
  },
});

export default theme;
