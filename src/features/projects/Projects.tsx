import { Box, Typography } from "@mui/material";
import { SectionTitle } from "common";

import { motion } from "framer-motion";
import { EASE_OUT_TRANSITION } from "helpers";
import FeaturedCarousel from "./components/carousel";
const Projects = () => {
    return (
        <Box
            sx={{ paddingX: { xs: 5, md: 20 }, paddingY: { xs: 2, md: 5 } }}
            bgcolor="#F4F4F4"
        >
            <SectionTitle title="Featured Projects" />
            <Box
                component={motion.div}
                initial={{ opacity: 0, x: "-15rem" }}
                whileInView={{
                    x: "0%",

                    opacity: 1,
                }}
                transition={EASE_OUT_TRANSITION}
            >
                <FeaturedCarousel />
            </Box>
        </Box>
    );
};

export default Projects;
