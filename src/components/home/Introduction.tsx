import { Box, Button, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

const Introduction = () => {
    const controls = useAnimation();
    const menuControls = useAnimation();

    const sequence = async () => {
        await menuControls.start({ x: "150%" });
        return await controls.start({
            x: "-150%",
        });
    };

    return (
        <>
            <Box
                zIndex={1000}
                display="flex"
                flexDirection="column"
                position="fixed"
                height="100vh"
                top={0}
                bottom={0}
            >
                <Box
                    animate={menuControls}
                    sx={{
                        backgroundColor: "red",
                        width: "100%",
                        height: "100vh",
                    }}
                    component={motion.div}
                    position="fixed"
                    initial={false}
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                    <Typography>Hi, I am</Typography>
                </Box>
                <Box
                    animate={controls}
                    sx={{
                        backgroundColor: "green",
                        width: "100%",
                        height: "100vh",
                        marginTop: 40,
                    }}
                    component={motion.div}
                    position="fixed"
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                    <Typography>Vincent Dizon</Typography>
                    <Button onClick={sequence} sx={{ color: "white" }}>
                        CLICK
                    </Button>
                </Box>
            </Box>
            <Box height="100vh" />
        </>
    );
};
export default Introduction;
