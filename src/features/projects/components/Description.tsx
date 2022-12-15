import ArrowRightIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const CONTAINER = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: "10%",
    },
};
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
                position: "relative",
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

            <Box
                onClick={handleNavigateToProject}
                display="flex"
                alignItems="center"
                component={motion.div}
                variants={CONTAINER}
                initial="initial"
                animate="animate"
                whileHover={{
                    width: 135,
                    height: 50,
                    borderRadius: "10px",
                    y: "-20%",
                    x: "35%",
                    transition: {
                        duration: 1,
                    },
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                }}
                sx={{
                    backgroundColor: "#1d1d1d",
                    borderRadius: "50%",
                    padding: "0.8rem",

                    position: "absolute",
                    bottom: "-40%",
                    right: "85%",
                    zIndex: 1,
                    cursor: "pointer",
                    display: { xs: "none", lg: "block" },
                    height: 70,
                    width: 70,
                }}
            >
                <Typography
                    fontWeight={700}
                    color="white"
                    sx={{
                        fontSize: { xs: 13, md: 15 },

                        display: "flex",
                        alignItems: "center",
                        width: { xs: 150, lg: 200 },
                        position: "absolute",
                    }}
                >
                    View Project
                    <ArrowRightIcon />
                </Typography>
            </Box>
        </Box>
    );
};

Description.propTypes = {};

export default Description;
