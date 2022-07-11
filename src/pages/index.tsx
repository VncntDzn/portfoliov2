import type { NextPage } from "next";
import PageContainer from "../layouts";
import { Navbar } from "../components";
const Home: NextPage = () => {
    return (
        <PageContainer title="Home">
            <Navbar />
        </PageContainer>
    );
};

export default Home;
