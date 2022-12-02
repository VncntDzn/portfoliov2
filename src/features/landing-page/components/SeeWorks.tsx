import { Box, IconButton, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const SeeWorks = () => {
    const router = useRouter();

    const CONTAINER = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            y: "10%",
        },
    };
    const SIZE = { xs: 70, lg: 100 };

    const handleNavigateToProjects = () => {
        router.push("#projects");
    };
    return (
        <Box
            component={motion.div}
            variants={CONTAINER}
            initial="initial"
            animate="animate"
            transition={{
                ease: "easeIn",
                duration: 1,
                delay: 2,
                bounce: 0.5,
                repeatType: "mirror",
            }}
            sx={{
                marginTop: { xs: 2, md: 3 },
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                component={motion.div}
                whileHover={{
                    x: "20%",
                }}
                transition={{
                    duration: 1,
                    ease: "linear",
                }}
                onClick={handleNavigateToProjects}
            >
                <Typography
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: 13, md: 15 },
                        marginLeft: { xs: 3, lg: 5 },
                        cursor: "pointer"
                    }}
                >
                    SEE MY WORKS
                </Typography>
                <IconButton>
                    <ArrowRightIcon />
                </IconButton>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#e1e1e1",
                    position: "absolute",
                    bottom: { xs: -20, lg: -35 },
                    left: { xs: 15 },
                    zIndex: -1,
                    height: SIZE,
                    width: SIZE,
                    borderRadius: "50%",
                }}
            />
        </Box>
    );
};

SeeWorks.propTypes = {};

export default SeeWorks;
