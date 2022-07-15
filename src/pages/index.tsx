import { Box } from "@mui/material";
import AboutMe from "components/home/AboutMe";
import Introduction from "components/home/Introduction";
import VariantOne from "components/home/VariantOne";

import type { NextPage } from "next";
import { LandingPage, Navbar } from "../components";
import PageContainer from "../layouts";
import Circle from "../svg/circle.svg";
const Home: NextPage = () => {
    return (
        <>
            <PageContainer title="Home">
                <Navbar />
                <VariantOne />
              {/*   <AboutMe /> */}
                {/* 
                <Introduction />

                <Box paddingX={3}>
                    <LandingPage />
                    <AboutMe />
                </Box>
                <Box
                    position="fixed"
                    height={400}
                    width={400}
                    top={-100}
                    right={-150}
                    zIndex={-10}
                >
                    <Circle />
                </Box> */}
            </PageContainer>
        </>
    );
};

export default Home;
