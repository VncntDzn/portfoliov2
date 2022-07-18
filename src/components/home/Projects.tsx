import { Box, Typography } from "@mui/material";
import Counter from "components/Counter";

import { motion, useAnimation } from "framer-motion";
const Projects = () => {
    const controls = useAnimation();
    const textAnimation = useAnimation();
    const handleStartProjectShowcase = async () => {
        await controls.start({
            y: "-200%",
            x: "-60%",
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
                paddingX: { xs: 5, lg: 20, xl: 50 },
                height: "105vh",
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
                    Take a look on our projects.
                </Typography>
            </Box>
            <Counter count={2} />
        </Box>
    );
};

Projects.propTypes = {};

export default Projects;
