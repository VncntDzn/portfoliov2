import { Box } from "@mui/material";
import { LandingPage } from "components";
import AboutMe from "components/home/AboutMe";
import Introduction from "components/home/Introduction";

import type { NextPage } from "next";

import PageContainer from "../layouts";
const Home: NextPage = () => {
    return (
        <>
            <PageContainer title="Home">
                {/*  <Navbar /> */}
                <Box sx={{ paddingX: { xs: 5, lg: 20 } }}>
                    <LandingPage />
                    {/*   <AboutMe /> */}
                </Box>
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
