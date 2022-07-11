import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            light: "",
            main: "#15133C",
            dark: "#15133C",
        },
        secondary: {
            main: "#73777B",
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
