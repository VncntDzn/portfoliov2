import { Box } from "@mui/material";

import { motion, useAnimation } from "framer-motion";
const AboutMe = () => {
    return (
        <Box
            component={motion.div}
            whileInView={{ y: "-75vh" }}
            height="100vh"
            animate={{
                boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                backgroundColor: "rgba(255,255,255)",
                borderRadius: 20,
            }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            AboutMe
        </Box>
    );
};

export default AboutMe;
