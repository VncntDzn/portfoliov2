import ContactMe from "features/contact-me";
import LandingPage from "features/landing-page";
import AboutMe from "features/landing-page/about-vincent/AboutMe";
import Projects from "features/projects";
import PageContainer from "layouts/PageContainer";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
    return (
        <>
            <LandingPage />
            <AboutMe /> <Projects />
            {/*    
           
            <ContactMe /> */}
        </>
    );
};

Home.getLayout = function getLayout(page: ReactNode) {
    return <PageContainer description="My portfolio">{page}</PageContainer>;
};

export default Home;
