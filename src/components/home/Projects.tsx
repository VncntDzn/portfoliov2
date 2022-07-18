import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Counter from "components/Counter";

import { motion, useAnimation } from "framer-motion";
import FeaturedProject from "./projects/FeaturedProject";
const Projects = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("xl"));
    const controls = useAnimation();
    const textAnimation = useAnimation();
    const controls2 = useAnimation();
    const handleStartProjectShowcase = async () => {
        controls.start({
            y: "-50%",
            x: matches ? "-21rem" : "-7rem",
            transition: { duration: 2 },
        });
        await textAnimation.start({
            x: "-28%",
            transition: { duration: 2, delay: 2 },

            textDecoration: "underline",
        });

        return await controls2.start({
            x: "-28%",
            transition: { duration: 2,  },

            textDecoration: "underline",
        });
    };
    return (
        <Box
            sx={{
                background: "white",
                paddingY: { xs: 5, lg: 10 },
                paddingX: { xs: 5, lg: 20, xl: 40 },
                height: { lg: "100vh" },
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            zIndex={1}
        >
            <Box component={motion.div} animate={controls}>
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
            <Box component={motion.div} animate={controls2}>
                <FeaturedProject />
            </Box>
            <Counter count={2} />
        </Box>
    );
};

Projects.propTypes = {};

export default Projects;
