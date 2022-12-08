import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

import { motion } from "framer-motion";
const SocialLinks = () => {
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
            name: "Blogs",
            link: "",
        },
    ];
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            component={motion.div}
            transition={{
                duration: 1,
                ease: "linear",
                delay: 3,
            }}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            sx={{
                display: { xs: "none", md: "flex" },
                position: "absolute",
                right: "8.5%",
                bottom: 100,
                writingMode: "vertical-lr",
                height: 250,
            }}
        >
            {LINKS.map(({ name }) => (
                <Fragment key={name}>
                    <Typography
                        component={motion.p}
                        color="#8c8c8c"
                        whileHover={{
                            color: "black",
                            cursor: "pointer",
                            letterSpacing: "2px",
                            textDecoration: "underline",
                        }}
                    >
                        {name}
                    </Typography>
                    {name !== "Blogs" && (
                        <Typography color="#8c8c8c">/</Typography>
                    )}
                </Fragment>
            ))}
        </Box>
    );
};

export default SocialLinks;
