import { Box, useTheme } from "@mui/material";
const ProjectDemo = () => {
    const theme = useTheme();
    return (
        <Box
            bgcolor={theme.palette.primary.main}
            sx={{
                padding: { xs: "1rem 1rem", sm: "3rem", md: "5rem 10rem" },
                margin: {
                    xs: "-2vh -10vw",
                    sm: "-3vh -5vw",
                    md: "-5vh -17vw",
                    lg: "-5vh -10rem",
                },
            }}
        >
            <Box borderRadius="20px" component="video" controls width="100%">
                <Box component="source" src="/demo/hmi.webm" />
            </Box>
        </Box>
    );
};

export default ProjectDemo;
