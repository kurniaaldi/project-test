import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3E2E83",
      contrastText: "#fff",
    },
    secondary: {
      main: "#7C51FF",
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Helvetica",
  },
});

export default theme;
