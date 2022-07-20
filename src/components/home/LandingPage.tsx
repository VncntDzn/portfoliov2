import { Box, Divider, Typography } from "@mui/material";
import Counter from "components/Counter";

import { motion } from "framer-motion";
import Circle from "./landing-page/Circle";
import ScrollArrow from "./landing-page/ScrollArrow";
import SeeWorks from "./landing-page/SeeWorks";
import SocialLinks from "./landing-page/SocialLinks";

const EASE_OUT_TRANSITION = { ease: "easeOut", duration: 1.5 };
const X_ANIMATE = {
    TEXT_ANIMATE: {
        x: "5%",
    },
};
const TEXT_TITLE = {
    ...X_ANIMATE,
    TEXT_INITIAL: { x: "-110%" },
};
const TEXT_SUBTITLE = {
    ...X_ANIMATE,
    TEXT_INITIAL: { x: "110%" },
};

const LandingPage = () => {
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
                paddingX: { xs: 5, md: 20, lg: 40 },
            }}
        >
            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    display: { xs: "none", md: "flex" },
                    height: { xs: "none", md: "70%", lg: "80%", xl: "83%" },
                    position: "absolute",
                    left: "15%",
                }}
            />

            <Box
                display="flex"
                alignItems="center"
                width="100%"
                component={motion.div}
                variants={TEXT_TITLE}
                transition={EASE_OUT_TRANSITION}
                initial="TEXT_INITIAL"
                animate="TEXT_ANIMATE"
                whileHover={{
                    x: "-10%",
                }}
                zIndex={1}
            >
                <Typography
                    variant="h1"
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: 30, sm: 50, md: 60, lg: 70, xl: 80 },
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
                variants={TEXT_SUBTITLE}
                transition={EASE_OUT_TRANSITION}
                initial="TEXT_INITIAL"
                animate="TEXT_ANIMATE"
                zIndex={1}
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
                            fontSize: { xs: 20, md: 40 },
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
                    left: "15%",
                    width: "70%",
                }}
            />
        </Box>
    );
};

export default LandingPage;
