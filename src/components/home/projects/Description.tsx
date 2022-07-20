import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

import { motion, useAnimation } from "framer-motion";
const Description = props => {
    return (
        <Box
            component={motion.div}
            whileHover={{
                backgroundColor: "white",
                bottom: 0,
                width: "13rem",
                height: "8rem",
            }}
            position="absolute"
            initial={{
                bottom: 0,
                width: "13rem",
                height: "8rem",
            }}
        >
            <Typography
                textAlign="center"
                initial={{
                    opacity: 0,
                }}
                whileHover={{
                    opacity: 1,
                }}
                component={motion.p}
            >
                Description
            </Typography>
        </Box>
    );
};

Description.propTypes = {};

export default Description;
