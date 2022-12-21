import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

import { SOCIAL_LINKS } from "assets/data";
import { motion } from "framer-motion";
import Link from "next/link";
const SocialLinks = () => {
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
                zIndex: 1,
            }}
        >
            {SOCIAL_LINKS.map(({ name, path }) => (
                <Fragment key={name}>
                    <Link href={path}>
                        <Typography
                            component={motion.p}
                            color="#8c8c8c"
                            whileHover={{
                                color: "#1d1d1d",
                                cursor: "pointer",
                                letterSpacing: "2px",
                                textDecoration: "underline",
                            }}
                        >
                            {name}
                        </Typography>
                    </Link>
                    {name !== "Instagram" && (
                        <Typography color="#8c8c8c">/</Typography>
                    )}
                </Fragment>
            ))}
        </Box>
    );
};

export default SocialLinks;
