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
const SeeWorks = () => {
    const router = useRouter();
    const handleNavigateToProjects = () => {
        router.push("#projects");
    };
    return (
        <Box
            display="flex"
            alignItems="center"
            component={motion.div}
            variants={CONTAINER}
            initial="initial"
            animate="animate"
            whileHover={{
                width: 160,
                height: 50,
                borderRadius: "10px",
                y: "-60%",
                transition: {
                    duration: 1,
                },
            }}
            transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: 1
            }}
            sx={{
                backgroundColor: "#1d1d1d",
                borderRadius: "50%",
                padding: "0.8rem",

                position: "absolute",
                bottom: "27%",
                left: "22%",
                zIndex: 1,
                cursor: "pointer",
                display: { xs: "none", lg: "block" },
                height: 70,
                width: 70,
            }}
            onClick={handleNavigateToProjects}
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
                SEE MY WORKS
                <ArrowRightIcon />
            </Typography>
        </Box>
    );
};

SeeWorks.propTypes = {};

export default SeeWorks;
