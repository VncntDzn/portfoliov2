import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Description = () => {
    const router = useRouter();

    const handleNavigateToProject = () => {
        router.push("/featured-project");
    };
    return (
        <Box
            sx={{
                bottom: 0,
                left: 0,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Typography
                sx={{
                    display: {
                        xs: "none",
                        lg: "inline-block",
                        textAlign: "justify",
                        textIndent: "2rem",
                        lineHeight: "2.2rem",
                    },
                }}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
            </Typography>
            <Typography
                textAlign="left"
                alignSelf="flex-start"
                component={motion.p}
                color="green"
                whileHover={{
                    color: "#8c8c8c",
                    cursor: "pointer",
                    letterSpacing: "1px",
                    textDecoration: "underline",
                }}
                onClick={handleNavigateToProject}
            >
                View Project
            </Typography>
        </Box>
    );
};

Description.propTypes = {};

export default Description;
