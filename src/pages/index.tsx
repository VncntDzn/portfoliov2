import { LandingPage } from "components";
import Footer from "components/Footer";
import Projects from "components/home/Projects";

import type { NextPage } from "next";

import PageContainer from "../layouts";
const Home: NextPage = () => {
    return (
        <PageContainer title="Home">
            <LandingPage />
            {/*  <AboutMe /> */}
            <Projects />
            <Footer />
        </PageContainer>
    );
};

export default Home;
