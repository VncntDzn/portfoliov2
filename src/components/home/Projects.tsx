import { Box, Typography, useMediaQuery } from "@mui/material";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import theme from "theme";
import FeaturedCarousel from "./projects/FeaturedCarousel";
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
        <Box height="100vh">
            <Box
                component={motion.div}
                animate={whileInViewLocation}
                transition={{
                    duration: 1,
                    delay: 1,
                }}
                textAlign="center"
                initial={{
                    y: "30rem",
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: 35, lg: 55 },
                    }}
                >
                    Featured Projects
                </Typography>
            </Box>
            <Box
                component={motion.div}
                initial={{ opacity: 0, x: "-20rem" }}
                whileInView={{
                    x: "13%",
                    y: "5%",
                    width: "80vw",
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                }}
            >
                <FeaturedCarousel />
            </Box>
        </Box>
    );
};

export default Projects;
