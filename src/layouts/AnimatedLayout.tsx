import { Box, useTheme } from "@mui/material";
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
    const theme = useTheme();
    return (
        <Box
            display="flex"
            alignItems="center"
            gap={5}
            bgcolor={isPrimaryColor ? theme.palette.primary.main : ""}
            sx={{
                flexDirection: { xs: "column", md: "row" },
                padding: isPadded
                    ? { xs: "1rem 1rem", md: "2rem 10rem", xl: "2rem 15rem" }
                    : {},
            }}
            component={motion.div}
            initial={{ opacity: 0, y: "20%" }}
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
