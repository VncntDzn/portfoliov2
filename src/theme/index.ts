import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

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
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1024,
            lg: 1680,
            xl: 1920,
        },
    },
});

export default theme;
