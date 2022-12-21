import { About } from "features/about";
import LandingPage from "features/landing-page/LandingPage";
import { Projects } from "features/projects";
import Head from "next/head";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";
import Contact from "features/contact";
import { Footer } from "layouts";
const Home: NextPageWithLayout = () => {
    return (
        <>
            <LandingPage />
            <About isPaddedContent />
            <Projects isPaddedContent isPrimaryColorContent />
            <Contact />
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
            <Footer />
        </main>
    );
};

export default Home;
