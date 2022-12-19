import { Box } from "@mui/material";
import { AboutHeader, Introduction as AboutIntroduction } from "features/about";
import LandingPage from "features/landing-page/LandingPage";
import Head from "next/head";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";
import Projects from "features/projects";
const Home: NextPageWithLayout = () => {
    return (
        <>
            <LandingPage />
            <Box
                sx={{ paddingX: { xs: 5, md: 20 }, paddingY: { xs: 2, md: 5 } }}
            >
                <AboutHeader />
                <AboutIntroduction />
            </Box>
            <Projects />
            {/*   <Projects /> */}
            {/* <ContactMe /> */}
        </>
    );
};

Home.getLayout = function getLayout(page: ReactNode) {
    return (
        <main>
            <Head>
                <title>Vincent Dizon</title>

                <meta name="description" content="My Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {page}
        </main>
    );
};

export default Home;
