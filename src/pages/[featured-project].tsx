import { Box } from "@mui/material";
import MyPic from "assets/pic.jpg";
import { ReturnToHome, SectionTitle } from "common";
import SelectedProjectDescription from "features/projects/selected-project/SelectedProjectDescription";
import { motion } from "framer-motion";
import { PageContainer } from "layouts";
import Image from "next/image";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";
const FeaturedProject: NextPageWithLayout = () => {
    return (
        <>
            <Box>
                <ReturnToHome />
                <SectionTitle title="My Project" />
                <SelectedProjectDescription />
            </Box>
            <Box
                marginX={-20}
                bgcolor="#F4F4F4"
                sx={{ padding: { xs: "1rem 1rem", md: "5rem 10rem" } }}
            >
                <Box
                    sx={{
                        boxShadow: "-30px 30px 10px gray",
                        borderRadius: "20px",
                        height: { xs: 250, lg: "fit-content" },
                        width: { xs: 250, lg: "100%" },
                    }}
                    component={motion.div}
                    whileHover={{
                        boxShadow: "-60px 60px 10px gray",
                        margin: "1rem",
                    }}
                >
                    <Image
                        src={MyPic}
                        alt="Vincent"
                        layout="responsive"
                        style={{ borderRadius: "20px" }}
                        height={300}
                        width={500}
                    />
                </Box>
            </Box>
        </>
    );
};

FeaturedProject.getLayout = function getLayout(page: ReactNode) {
    return (
        <PageContainer title="My Project" description="Showcase of my projects">
            {page}
        </PageContainer>
    );
};

export default FeaturedProject;
