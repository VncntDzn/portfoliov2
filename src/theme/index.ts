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
            light: "#e1e1e1",
            main: "#F4F4F4",
        },
        secondary: {
            main: "#1d1d1d",
        },
    },
});

export default theme;
