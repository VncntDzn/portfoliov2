import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";

import Pic from "../../assets/pic.jpg";

import { motion, useAnimation } from "framer-motion";

const LandingPage = () => {
    const controls = useAnimation();

    const handleStartAnimation = () => {
        console.log("working");
        controls.start({
            y: "-100vh",
            transition: { duration: 3 },
            boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
            backgroundColor: "rgba(255,255,255)",
            borderRadius: 20,
        });
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginY={5}
            component={motion.div}
            animate={controls}
            initial={false}
            transition={{ ease: "easeOut", duration: 1, delay: 1 }}
            padding={3}
        >
            <Image
                src={Pic}
                alt="Vincent"
                height={200}
                width={200}
                style={{ borderRadius: "50%", zIndex: -1 }}
            />
            <Box alignSelf="flex-start" marginY={2}>
                <Typography variant="h6" onClick={handleStartAnimation}>
                    Hello my name is,
                </Typography>
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
