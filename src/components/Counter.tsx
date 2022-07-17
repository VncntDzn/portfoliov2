import { Box, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Counter = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <Box
            ref={ref}
            component={motion.div}
            animate={{
                opacity: 1,
            }}
            sx={{
                zIndex: -1,
                position: "absolute",
                top: { xs: 30 },
                right: { xs: 70, lg: 120 },
            }}
        >
            <Typography
                component={motion.p}
                whileHover={{
                    textShadow: "-20px 40px 1px rgba(177, 177, 177,0.25)",
                }}
                sx={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
                    fontSize: { xs: 40, lg: 150 },
                    textShadow: {
                        xs: "-5px 10px 1px rgba(177, 177, 177,0.25)",
                        lg: "-10px 30px 1px rgba(177, 177, 177,0.25)",
                    },
                    position: "absolute",
                }}
                color="#8c8c8c"
            >
                01
            </Typography>
        </Box>
    );
};

export default Counter;
