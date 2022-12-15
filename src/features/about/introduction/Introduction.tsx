import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Details from "./components/Details";
import Photo from "./components/Photo";

const Introduction = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            gap={5}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            component={motion.div}
            initial={{ opacity: 0, y: "20%" }}
            animate={{ y: "20%" }}
            whileInView={{
                y: "0%",
                opacity: 1,
                transition: { duration: 1.7, ease: "easeOut" },
            }}
        >
            <Box>
                <Photo />
            </Box>
            <Box>
                <Details />
            </Box>
        </Box>
    );
};
export default Introduction;
