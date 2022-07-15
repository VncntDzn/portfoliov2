import { Box, Divider, IconButton, Typography } from "@mui/material";

import SouthIcon from "@mui/icons-material/South";
import { motion } from "framer-motion";
import Circle from "./Circle";
import ArrowRightIcon from "@mui/icons-material/ArrowRightAlt";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LandingPageLinks from "./LandingPageLinks";
const VariantOne = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            position="relative"
            zIndex={1}
            sx={{
                backgroundColor: "#F4F4F4",
                paddingX: { xs: 5, lg: 20 },
                height: { xs: "70vh", sm: "40vh", lg: "80vh" },
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                component={motion.div}
                animate={{
                    x: "1.5rem",
                }}
                initial={{
                    x: "-110%",
                }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                <Typography
                    variant="h1"
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: 30, sm: 50, md: 80, lg: 90 },
                        marginRight: 1,
                    }}
                >
                    Vincent Dizon
                </Typography>
                <Divider
                    sx={{
                        width: { xs: "25%", lg: "40%" },
                    }}
                />
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                alignItems={"flex-start"}
                component={motion.div}
                animate={{
                    x: "5%",
                }}
                initial={{
                    x: "110%",
                }}
                sx={{
                    width: "100%",
                }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                <Box display="flex" width="100%" alignItems="center">
                    <Divider
                        sx={{
                            width: { xs: "20%", lg: "10%" },
                        }}
                    />
                    <Typography
                        marginLeft={2}
                        fontWeight={700}
                        color="#8c8c8c"
                        sx={{
                            fontSize: { xs: 20, lg: 40 },
                        }}
                    >
                        front-end developer
                    </Typography>
                </Box>

                {/*  <Box
                    sx={{
                        backgroundImage:
                            "radial-gradient(circle, #e1e1e1 20%, transparent 10%), radial-gradient(circle, #e1e1e1 20%, transparent 10%)",
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 50px 50px",
                        height: "15vh",
                        width: "20vw",
                        zIndex:-1,
                        position:"absolute",
                        bottom: -65
                    }}
                />
 */}

                <Box
                    component={motion.div}
                    transition={{
                        ease: "easeIn",
                        duration: 1,
                        delay: 2,
                        bounce: 0.5,
                        repeatType: "mirror",
                    }}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: "10%",
                    }}
                >
                    <Box
                        borderRadius={"50%"}
                        height={100}
                        width={100}
                        sx={{
                            backgroundColor: "#e1e1e1",
                            position: "absolute",
                            bottom: -40,
                            zIndex: -1,
                        }}
                    />
                    <Box
                        display="flex"
                        alignItems="center"
                        component={motion.div}
                        whileHover={{
                            x: "20%",
                        }}
                        transition={{
                            duration: 1,
                            ease: "linear",
                        }}
                    >
                        <Typography
                            marginLeft={2}
                            fontWeight={700}
                            fontSize={13}
                            color="black"
                        >
                            SEE MY WORKS
                        </Typography>
                        <IconButton>
                            <ArrowRightIcon color="black" />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <LandingPageLinks />
            <Box
                border="3px solid red"
                alignSelf={"flex-end"}
                component={motion.div}
                transition={{
                    ease: "easeIn",
                    duration: 1,
                    repeat: Infinity,
                    delay: 1,
                    bounce: 0.5,
                    repeatType: "mirror",
                }}
                animate={{
                    opacity: 1,
                    y: "10%",
                }}
                flexGrow="100%"
                position="absolute"
                sx={{
                    bottom: { xs: "3%" },
                }}
            >
                <Typography
                    sx={{
                        writingMode: " vertical-lr",
                        textAlign: "center",
                        paddingLeft: 1,
                        color: "#8c8c8c",
                        fontSize: 12,
                    }}
                >
                    SCROLL
                </Typography>
                <IconButton size="small" sx={{ paddingLeft: 1 }}>
                    <SouthIcon fontSize="15" color="#8c8c8c" />
                </IconButton>
            </Box>
            <Circle />
        </Box>
    );
};

VariantOne.propTypes = {};

export default VariantOne;
