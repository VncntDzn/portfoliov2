import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import NAV from "./data";
import { motion } from "framer-motion";

const MobileNavbar = () => {
    return (
        <Box
            position="fixed"
            top={0}
            right={0}
            height="100%"
            zIndex={1}
            width="70%"
            sx={{
                backgroundColor: "white",
            }}
            component={motion.div}
            animate={{ x: 5 }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            {NAV.map(({ name }) => (
                <Fragment key={name}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        component={motion.div}
                        sx={{
                            ":hover": {
                                backgroundColor: "#F87537",
                                color: "white",
                                marginX: 2,
                                borderRadius: 5,
                            },
                        }}
                        whileHover={{
                            scale: 1.1,
                            transition: { ease: "easeOut" },
                        }}
                        whileTap={{
                            scale: 1.2,
                            transition: { ease: "easeOut" },
                        }}
                    >
                        <Typography sx={{ paddingY: 5 }}>{name}</Typography>
                    </Box>
                </Fragment>
            ))}
        </Box>
    );
};

MobileNavbar.propTypes = {};

export default MobileNavbar;
