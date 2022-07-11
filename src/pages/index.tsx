import type { NextPage } from "next";
import { LandingPage, Navbar } from "../components";
import PageContainer from "../layouts";
const Home: NextPage = () => {
    return (
        <PageContainer title="Home">
            <Navbar />
            <LandingPage />
        </PageContainer>
    );
};

export default Home;
