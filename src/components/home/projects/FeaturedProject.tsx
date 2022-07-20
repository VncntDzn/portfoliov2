import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import Description from "./Description";
import { useAnimation, motion } from "framer-motion";

const FeaturedProject = ({ show }) => {
    const controls2 = useAnimation();

    const LINKS = [
        {
            bgColor: "green",
            name: "LinkedIn",
            link: "",
            height: 500,

            margin: "0 0 0 0",
        },
        {
            bgColor: "red",
            name: "Github",
            link: "",
            height: 300,
            margin: "2.5rem 0 15rem 0",
        },
        {
            bgColor: "yellow",
            name: "Instagram",
            link: "",
            height: 300,

            margin: "-2.5rem 0 0 0",
        },
        {
            bgColor: "blue",
            name: "Facebook",
            link: "",
            height: 500,
            margin: `-15rem 0 0 0`,
        },
    ];

    const EASE_OUT_TRANSITION = { ease: "easeIn", duration: 1.5 };
    useEffect(() => {
        if (show) {
            controls2.start({
                display: "flex",
                opacity: 1,
                transition: { duration: 2 },
            });
        }
    }, [show, controls2]);
    return (
        <Grid
            component={motion.div}
            initial={{
                opacity: 0,
                display: "none",
            }}
            transition={EASE_OUT_TRANSITION}
            animate={controls2}
            container
            gap={2}
            justifyContent="center"
            alignItems="center" 
            sx={{border:"3px solid red"}}
        >
            {LINKS.map(({ name, bgColor, height, margin }, i) => (
                <Box
                    component={motion.div}
                    whileHover={{
                        x: i % 2 === 0 ? "-20%" : "20%",
                        scale: 1.1,
                    }}
                    transition={{ ease: "linear" }}
                    position="relative"
                    width={500}
                    key={name}
                    sx={{
                        backgroundColor: bgColor,
                        height,
                        margin,
                        zIndex: 1,
                    }}
                >
                    <Typography textAlign="center">{name} </Typography>
                    <Description />
                </Box>
            ))}
        </Grid>
    );
};

FeaturedProject.propTypes = {};

export default FeaturedProject;
