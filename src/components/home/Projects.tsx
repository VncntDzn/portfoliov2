import {
    Box,
    Card,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Counter from "components/Counter";

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import FeaturedCarousel from "./projects/FeaturedCarousel";
import FeaturedProject from "./projects/FeaturedProject";
import Creativ from "assets/projects/creativ.jpeg";
import Description from "./projects/Description";
const Projects = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("xl"));
    const smMatch = useMediaQuery(theme.breakpoints.down("sm"));
    const controls = useAnimation();
    const textAnimation = useAnimation();
    const [showProjects, setShowProjects] = useState(false);

    const handleStartProjectShowcase = async () => {
        controls.start({
            y: "-50%",
            x: matches ? "-20rem" : "-15rem",
            transition: { duration: 2 },
            display: "block",
        });
        await textAnimation.start({
            x: "-13rem",
            transition: { duration: 2, delay: 2 },

            textDecoration: "underline",
        });
        return setShowProjects(!showProjects);
    };
    return (
        <Box
            zIndex={1}
            sx={{
                background: "white",
                paddingY: { xs: 5, lg: 10 },
                paddingX: { xs: 5, lg: 20, xl: 40 },
                height: { lg: !showProjects ? "100vh" : "120vh" },
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            <Box component={motion.div} animate={controls} zIndex={1}>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: 30, lg: 80 },
                    }}
                >
                    Featured Projects
                </Typography>
                <Typography
                    component={motion.p}
                    animate={textAnimation}
                    onClick={handleStartProjectShowcase}
                    sx={{ cursor: "pointer", textAlign: "center" }}
                >
                    Take a look on my projects.
                </Typography>
            </Box>

            {smMatch ? (
                <FeaturedCarousel />
            ) : (
                <FeaturedProject show={showProjects} />
            )}

            <Counter count={2} />
        </Box>
    );
};

Projects.propTypes = {};

export default Projects;
