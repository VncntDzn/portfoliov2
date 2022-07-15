import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";

import Pic from "../../assets/pic.jpg";
import { useAnimationContext } from "contexts/AnimationContext";
import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
const LandingPage = () => {
    const { state } = useAnimationContext();
    const controls = useAnimation();
    useEffect(() => {
        if (state.start) {
            (function handleStartAnimation() {
                controls.start({
                    transition: { duration: 3 },
                    boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                    backgroundColor: "rgba(255,255,255)",
                    borderRadius: 20,
                    y: "-75vh",
                });
            })();
        }
    }, [state.start, controls]);
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginY={5}
            padding={3}
            component={motion.div}
            animate={controls}
            initial={false}
            transition={{ ease: "easeOut", duration: 1 }}
            marginTop={"80vh"}
        >
            <Image
                src={Pic}
                alt="Vincent"
                height={200}
                width={200}
                style={{ borderRadius: "50%", zIndex: -1 }}
            />
            <Box alignSelf="flex-start" marginY={2}>
                <Typography variant="h6">Hello my name is,</Typography>
                <Divider sx={{ width: "50%" }} />
                <Typography variant="h4">Vincent Dizon</Typography>
                <Typography>Web Developer</Typography>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#F87537", marginY: 2 }}
                >
                    Download CV
                </Button>
            </Box>
        </Box>
    );
};
export default LandingPage;
