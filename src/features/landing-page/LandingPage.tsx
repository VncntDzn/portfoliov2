import { Box, Divider, Typography } from "@mui/material";
import Counter from "components/Counter";

import { motion } from "framer-motion";
import { EASE_OUT_TRANSITION } from "helpers";
import Circle from "./components/Circle";
import ScrollArrow from "./components/ScrollArrow";
import SeeWorks from "./components/SeeWorks";
import SocialLinks from "./components/SocialLinks";

const LandingPage = () => {
    const TEN_PERCENT = "10%";
    const TEXT_TITLE_ANIMATION = {
        TEXT_ANIMATION: {
            x: "8%",
        },
        TEXT_INITIAL_ANIMATION: {
            x: "-110%",
        },
    };
    const TEXT_SUBTITLE_ANIMATION = {
        TEXT_ANIMATION: {
            x: TEN_PERCENT,
        },
        TEXT_INITIAL_ANIMATION: {
            x: "110%",
        },
    };

   
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            zIndex={1}
            sx={{
                backgroundColor: "#F4F4F4",
                height: { xs: "100vh", sm: "40vh", md: "100vh" },
                paddingX: { xs: 5, md: 20, lg: 30 },
            }}
        >
            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    display: { xs: "none", md: "flex" },
                    height: { xs: "none", md: "70%", lg: "80%", xl: "83%" },
                    position: "absolute",
                    left: "11%",
                }}
            />

            <Box
                display="flex"
                alignItems="center"
                width="100%"
                component={motion.div}
                variants={TEXT_TITLE_ANIMATION}
                transition={EASE_OUT_TRANSITION}
                initial="TEXT_INITIAL_ANIMATION"
                animate="TEXT_ANIMATION"
                whileHover={{
                    x: "-2%",
                }}
                zIndex={1}
            >
                <Typography
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: 30, sm: 50, md: 60, lg: 75, xl: 90 },
                        marginX: 1,
                    }}
                >
                    Vincent Dizon
                </Typography>
                <Divider
                    sx={{
                        width: { xs: "20%", md: "30%", lg: "40%", xl: "43%" },
                    }}
                />
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                alignItems={"flex-start"}
                width="100%"
                component={motion.div}
                variants={TEXT_SUBTITLE_ANIMATION}
                transition={EASE_OUT_TRANSITION}
                initial="TEXT_INITIAL_ANIMATION"
                animate="TEXT_ANIMATION"
                zIndex={1}
            >
                <Box
                    display="flex"
                    width="100%"
                    alignItems="center"
                    component={motion.div}
                    transition={EASE_OUT_TRANSITION}
                    whileHover={{
                        x: TEN_PERCENT,
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
                            fontSize: { xs: 20, md: 40, xl: 45 },
                        }}
                    >
                        front-end developer
                    </Typography>
                </Box>

                <SeeWorks />
            </Box>
            <SocialLinks />
            <ScrollArrow />
            <Circle />
            <Counter count={1} />
            <Divider
                flexItem
                sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    top: 10,
                    bottom: 80,
                    left: "11%",
                    width: "80%",
                }}
            />
        </Box>
    );
};

export default LandingPage;
