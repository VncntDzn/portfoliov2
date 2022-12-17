import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { EASE_OUT_TRANSITION } from "helpers";
import Details from "./components/Details";
import Photo from "./components/Photo";

const Introduction = () => {
    return (
        <Grid
            container
            direction="row"
            sx={{
                marginY: { xs: 3, md: 5 },
                gap: { xs: 1, md: 0 },
            }}
        >
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
                transition={EASE_OUT_TRANSITION}
            >
                <Photo />
                <Details />
            </Box>
        </Grid>
    );
};
export default Introduction;
