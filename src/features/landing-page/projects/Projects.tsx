import { Box, Typography, useMediaQuery } from "@mui/material";

import { motion } from "framer-motion";
import { EASE_OUT_TRANSITION } from "helpers";
import { useEffect, useState } from "react";
import theme from "theme";
import FeaturedCarousel from "./components/FeaturedCarousel";
const Projects = () => {
    const smMatch = useMediaQuery(theme.breakpoints.down("sm"));
    const [whileInViewLocation, setWhileInViewLocation] = useState({});

    useEffect(() => {
        if (smMatch) {
            setWhileInViewLocation({ y: "10%", x: "-5%" });
        } else {
            setWhileInViewLocation({ y: "10%", x: "-26%" });
        }
    }, [smMatch]);
    return (
        <Box
            height="100vh"
            sx={{
                backgroundColor: "#F4F4F4",
                paddingX: { xs: 5, md: 20, lg: 23 },
                paddingY: { xs: 2, md: 5 },
            }}
        >
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
