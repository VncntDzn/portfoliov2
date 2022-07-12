import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

const Introduction = () => {
    const controls = useAnimation();

    const sequence = () => {
        return controls.start({
            y: "-150%",
        });
    };

    return (
        <>
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
                    onClick={sequence}
                >
                    <ArrowDownwardIcon
                        fontSize="large"
                        sx={{ fontSize: 70, color: "white" }}
                    />
                </Box>
            </Box>
            <Box height="100vh" />
        </>
    );
};
export default Introduction;
