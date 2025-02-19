import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#133E87",
      main: "#0079FF",
      light: "#CBDCEB",
    },
    secondary: {
      dark: "#3D8D7A",
      main: "#00DFA2",
      light: "#B3D8A8",
    },
    tertiary: {
      dark: "#C30E59",
      main: "#FF0060",
      light: "#FF8383",
    },
    neutrals: {
      black: "#000000",
      white: "#FFFFFF",
      darkBlue: "#141E46",
    },

    gradient: "linear-gradient(to left, primary.main, secondary.main)",

    success: {
      dark: "#387d39",
      main: "#4fa150",
      light: "#84c283",
    },
    error: {
      dark: "#a53e39",
      main: "#d15a56",
      light: "#e9918f",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "40px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "30px",
      fontWeight: "bold",
    },
    breadcrumbLink: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "tertiary.main",
    },
    largeText: {
      fontSize: "18px",
      fontWeight: 400,
    },
  },
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Theme;
