import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { AnimationProvider } from "contexts/AnimationContext";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <CssBaseline />
            <AnimationProvider>
                <Component {...pageProps} />
            </AnimationProvider>
        </>
    );
}

export default MyApp;
