import { Box, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box
            sx={{
                background: "white",
                paddingY: { xs: 5, lg: 10 },
                paddingX: { xs: 5, lg: 20, xl: 50 },
            }}
        >
            <Typography variant="h3">Featured Projects</Typography>
            <Typography>Take a look on our projects.</Typography>
        </Box>
    );
};

Projects.propTypes = {};

export default Projects;
