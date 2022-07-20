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
import FeaturedProject from "./projects/FeaturedProject";
const Projects = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("xl"));
    const controls = useAnimation();
    const textAnimation = useAnimation();
    const [showProjects, setShowProjects] = useState(false);
    const handleStartProjectShowcase = async () => {
        controls.start({
            y: "-10%",
            x: matches ? "-21rem" : "-15rem",
            transition: { duration: 2 },
            display: "block",
        });
        await textAnimation.start({
            x: "-28%",
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
                height: { lg: "100vh" },
                border: "3px solid green"
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            <Box component={motion.div} animate={controls} zIndex={1} sx={{border:"3px solid red"}}>
                <Typography variant="h2">Featured Projects</Typography>
                <Typography
                    component={motion.p}
                    animate={textAnimation}
                    onClick={handleStartProjectShowcase}
                    sx={{ cursor: "pointer", textAlign: "center" }}
                >
                    Take a look on my projects.
                </Typography>
            </Box>

            <FeaturedProject show={showProjects} />
            <Counter count={2} />
        </Box>
    );
};

Projects.propTypes = {};

export default Projects;
