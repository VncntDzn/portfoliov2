import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Counter from "components/Counter";

import { motion, useAnimation } from "framer-motion";
const Projects = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("xl"));
    const controls = useAnimation();
    const textAnimation = useAnimation();
    const handleStartProjectShowcase = async () => {
        controls.start({
            y: "-200%",
            x: matches ? "-21rem" : "-13rem",
            transition: { duration: 2 },
        });
        return await textAnimation.start({
            x: "-28%",
            transition: { duration: 2 },
            textDecoration: "underline",
        });
    };
    return (
        <Box
            sx={{
                background: "white",
                paddingY: { xs: 5, lg: 10 },
                paddingX: { xs: 5, lg: 20, xl: 40 },
                height: "105vh",
                border: { lg: "3px solid red", xl: "3px solid blue" },
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            zIndex={1}
        >
            <Box component={motion.div} animate={controls}>
                <Typography
                    variant="h2"
                    onClick={() => alert(window.innerWidth)}
                >
                    Featured Projects
                </Typography>
                <Typography
                    component={motion.p}
                    animate={textAnimation}
                    onClick={handleStartProjectShowcase}
                    sx={{ cursor: "pointer", textAlign: "center" }}
                >
                    Take a look on our projects.
                </Typography>
            </Box>
            <Counter count={2} />
        </Box>
    );
};

Projects.propTypes = {};

export default Projects;
