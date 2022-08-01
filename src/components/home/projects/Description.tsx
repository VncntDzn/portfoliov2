import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

import { motion, useAnimation } from "framer-motion";
const Description = props => {
    const EASE_OUT_TRANSITION = { ease: "easeIn", duration: 1.5, delay: 1 };
    return (
        <Box
            sx={{
                bottom: 0,
                left: 0,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography
                textAlign="center"
                animate={{
                    opacity: 1,
                }}
                component={motion.p}
            >
                View Project
            </Typography>
        </Box>
    );
};

Description.propTypes = {};

export default Description;
