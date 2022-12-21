import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { EASE_OUT_TRANSITION } from "helpers";

const Slogan = ({ mediaQuery }: { mediaQuery: boolean }) => {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                gap={1}
                component={motion.div}
                transition={EASE_OUT_TRANSITION}
                initial={{
                    x: "-10%",
                    opacity: 0,
                }}
                whileInView={{
                    x: mediaQuery ? "10vw" : "5vw",
                    opacity: 1,
                }}
                whileHover={{
                    x: "-2%",
                }}
                zIndex={1}
                sx={{
                    width: { xs: "95%", sm: "90%", lg: "100%" },
                    marginRight: { xs: "1rem", md: 0 },
                }}
            >
                <Typography
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: 30, sm: 50, lg: 70, xl: 80 },
                        textAlign: "center",
                    }}
                >
                    Vincent Dizon
                </Typography>
                <Divider
                    sx={{
                        width: { xs: "20%", md: "30%" },
                    }}
                />
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                alignItems={"flex-start"}
                component={motion.div}
                transition={EASE_OUT_TRANSITION}
                initial={{
                    x: "5vw",
                    opacity: 0,
                }}
                whileInView={{
                    x: "10vw",
                    opacity: 1,
                }}
                zIndex={1}
                sx={{
                    width: { xs: "95%", sm: "90%", lg: "100%" },
                    marginLeft: { xs: -5, md: 0 },
                }}
            >
                <Box
                    display="flex"
                    width="100%"
                    alignItems="center"
                    component={motion.div}
                    transition={EASE_OUT_TRANSITION}
                    whileHover={{
                        x: "10%",
                    }}
                >
                    <Divider
                        sx={{
                            width: { xs: "20%", md: "15%" },
                        }}
                    />
                    <Typography
                        marginLeft={2}
                        fontWeight={700}
                        color="#8c8c8c"
                        sx={{
                            fontSize: { xs: 20, md: 30, lg: 45 },
                        }}
                    >
                        front-end developer
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Slogan;
