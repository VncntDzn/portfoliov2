import { Box, Typography } from "@mui/material";
import Counter from "components/Counter";

const Projects = () => {
    return (
        <>
            <Box
                sx={{
                    background: "white",
                    paddingY: { xs: 5, lg: 10 },
                    paddingX: { xs: 5, lg: 20, xl: 50 },
                    height: "100vh",
                }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="relative"
                zIndex={1}
            >
                <Typography variant="h3">Featured Projects</Typography>
                <Typography>Take a look on our projects.</Typography>
                <Counter count={2} />
            </Box>
        </>
    );
};

Projects.propTypes = {};

export default Projects;
