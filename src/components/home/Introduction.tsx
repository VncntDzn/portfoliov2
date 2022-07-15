import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Typography } from "@mui/material";
import { useAnimationContext } from "contexts/AnimationContext";
import { motion, useAnimation } from "framer-motion";

const Introduction = () => {
    const { dispatch } = useAnimationContext();
    const controls = useAnimation();

    const handleAnimate = () => {
        dispatch({ type: "START_ANIMATION" });
        controls.start({
            y: "-150%",
        });
    };

    return (
        <Box
            component={motion.div}
            animate={controls}
            transition={{ ease: "easeOut", duration: 1 }}
            position="fixed"
            initial={false}
            top={0}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
            sx={{ backgroundColor: "green" }}
        >
            <Typography variant="h3" textAlign="center" color="white">
                Hello World, I am Vincent Dizon
            </Typography>
            <Typography>Know More</Typography>
            <Box
                component={motion.div}
                animate={{
                    y: "15%",
                }}
                transition={{
                    repeat: Infinity,
                    type: "spring",
                    bounce: 0.8,
                    duration: 1,
                }}
                onClick={handleAnimate}
            >
                <ArrowDownwardIcon
                    fontSize="large"
                    sx={{ fontSize: 70, color: "white" }}
                />
            </Box>
        </Box>
    );
};
export default Introduction;
