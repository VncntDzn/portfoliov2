import { CssBaseline, ThemeProvider } from "@mui/material";
import { AnimationProvider } from "contexts/AnimationContext";
import type { AppProps } from "next/app";
import theme from "theme";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <CssBaseline />
            <AnimationProvider>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </AnimationProvider>
        </>
    );
}

export default MyApp;
