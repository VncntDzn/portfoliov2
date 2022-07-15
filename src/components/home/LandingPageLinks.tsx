import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

import { motion } from "framer-motion";
const LandingPageLinks = props => {
    const LINKS = [
        {
            name: "LinkedIn",
            link: "",
        },
        {
            name: "Github",
            link: "",
        },
        {
            name: "Instagram",
            link: "",
        },
    ];
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            marginTop={40}
            width="15rem"
        >
            {LINKS.map(({ name }) => (
                <Fragment key={name}>
                    <Typography
                        component={motion.p}
                        whileHover={{
                            color: "#8c8c8c",
                            cursor: "pointer"
                        }}
                    >
                        {name}
                    </Typography>
                    {name !== "Instagram" && <Typography>/</Typography>}
                </Fragment>
            ))}
        </Box>
    );
};

LandingPageLinks.propTypes = {};

export default LandingPageLinks;
