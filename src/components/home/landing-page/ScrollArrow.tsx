import React from "react";
import { Box, IconButton, Typography } from "@mui/material";

import SouthIcon from "@mui/icons-material/South";
import { motion } from "framer-motion";
const ScrollArrow = () => {
    return (
        <Box
            component={motion.div}
            transition={{
                ease: "easeIn",
                duration: 1,
                repeat: Infinity,
                delay: 3.5,
                bounce: 0.5,
                repeatType: "mirror",
            }}
            animate={{
                opacity: 1,
                y: "15%",
            }}
            initial={{
                opacity: 0
            }}
            position="absolute"
            sx={{
                bottom: { xs: "0" },
                right: { xs: "40%", lg: "45%" },
                display: "flex",
                flexDirection: "column",
            }}
        >
            <IconButton size="large">
                <SouthIcon />
            </IconButton>
        </Box>
    );
};

ScrollArrow.propTypes = {};

export default ScrollArrow;
