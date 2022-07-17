import { Box } from "@mui/material";
import { LandingPage } from "components";
import Footer from "components/Footer";

import type { NextPage } from "next";

import PageContainer from "../layouts";
const Home: NextPage = () => {
    return (
        <PageContainer title="Home">
            <Box sx={{ paddingX: { xs: 5, lg: 20 } }}>
                <LandingPage />
            </Box>
            <Footer />
        </PageContainer>
    );
};

export default Home;
