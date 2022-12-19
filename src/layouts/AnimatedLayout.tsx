import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { EASE_OUT_TRANSITION } from "helpers";
import { ChildrenType } from "types";

interface AnimatedLayoutProps extends ChildrenType {
    isPadded: boolean;
    isPrimaryColor: boolean;
}
const AnimatedLayout = ({
    children,
    isPadded,
    isPrimaryColor,
}: AnimatedLayoutProps) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            gap={5}
            bgcolor={isPrimaryColor ? "#F4F4F4" : ""}
            sx={{
                flexDirection: { xs: "column", md: "row" },
                padding: isPadded ? { xs: "1rem 1rem", md: "2rem 10rem" } : {},
            }}
            component={motion.div}
            initial={{ opacity: 0, y: "20%" }}
            animate={{ y: "20%" }}
            whileInView={{
                y: "0%",
                opacity: 1,
            }}
            transition={EASE_OUT_TRANSITION}
        >
            {children}
        </Box>
    );
};

export default AnimatedLayout;
