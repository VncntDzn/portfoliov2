import { Box, Button, Typography } from "@mui/material";
import MyPic from "assets/pic.jpg";
import { SectionTitle } from "common";
import SelectedProjectDescription from "features/projects/selected-project/SelectedProjectDescription";
import SelectedProjectHeader from "features/projects/selected-project/SelectedProjectHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";
const FeaturedProject: NextPageWithLayout = () => {
    return (
        <>
            <Box sx={{ padding: { xs: "1rem 1rem", md: "2rem 10rem" } }}>
                <SelectedProjectHeader />
                <SectionTitle title="My Project" />
                <SelectedProjectDescription />
            </Box>
            <Box
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
    return <>{page}</>;
};

export default FeaturedProject;
