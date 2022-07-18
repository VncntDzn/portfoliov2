import { CssBaseline } from "@mui/material";
import { AnimationProvider } from "contexts/AnimationContext";
import type { AppProps } from "next/app";
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
