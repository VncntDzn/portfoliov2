import { Box } from "@mui/material";
import type { NextPage } from "next";
import { LandingPage, Navbar } from "../components";
import PageContainer from "../layouts";
import Circle from "../svg/circle.svg";
const Home: NextPage = () => {
    return (
        <PageContainer title="Home">
            <Navbar />
            <Box padding={3}>
                <LandingPage />
            </Box>
            <Box
                position="fixed"
                height={300}
                width={300}
                top={-100}
                right={-70}
                zIndex={-1}
            >
                <Circle />
            </Box>
        </PageContainer>
    );
};

export default Home;
