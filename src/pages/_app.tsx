import { CssBaseline } from "@mui/material";
import { AnimationProvider } from "contexts/AnimationContext";
import type { AppProps } from "next/app";

import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page);
    return getLayout(
        <>
            <CssBaseline />
            <AnimationProvider>
                <Component {...pageProps} />
            </AnimationProvider>
        </>
    );
}

export default MyApp;
