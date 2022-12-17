import { AboutHeader, Introduction } from "features/about";
import PageContainer from "layouts/PageContainer";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
    return (
        <>
            {/* <LandingPage /> */}
            <AboutHeader />
            <Introduction />
            {/*   <Projects /> */}
            {/* <ContactMe /> */}
        </>
    );
};

Home.getLayout = function getLayout(page: ReactNode) {
    return <PageContainer description="My portfolio">{page}</PageContainer>;
};

export default Home;
