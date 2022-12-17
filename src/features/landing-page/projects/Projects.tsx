import { Box, Typography } from "@mui/material";

import { motion } from "framer-motion";
import { EASE_OUT_TRANSITION } from "helpers";
import FeaturedCarousel from "./components/FeaturedCarousel";
const Projects = () => {
    return (
        <Box bgcolor="#F4F4F4">
            <Box>
                <Typography
                    sx={{
                        fontSize: { xs: 35, lg: 55 },
                    }}
                >
                    Featured Projects
                </Typography>
                <hr />
            </Box>
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
