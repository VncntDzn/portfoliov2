import EastIcon from "@mui/icons-material/East";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface AnimatedButtonProps {
    title: string;
    path: string;
    width: number | string;
}
const AnimatedButton = ({ title, path, width }: AnimatedButtonProps) => {
    const router = useRouter();
    const theme = useTheme();

    const handleNavigation = () => {
        router.push(path);
    };
    return (
        <Box
            onClick={handleNavigation}
            component={motion.div}
            whileHover={{
                width,
                height: 50,
                borderRadius: "10px",
            }}
            transition={{
                ease: "easeOut",
            }}
            bgcolor={theme.palette.primary.light}
            borderRadius="50%"
            marginTop={1}
            position="relative"
            height={70}
            width={70}
            padding="0.8rem"
            display={router.pathname === path ? "none" : "block"}
        >
            <Typography
                component="strong"
                fontSize={13}
                textTransform="uppercase"
                fontWeight={700}
                display="flex"
                alignItems="center"
                color="#8d8d8d"
                sx={{
                    textIndent: 0,
                    cursor: "pointer",
                    ":hover": {
                        color: "#1d1d1d",
                    },
                    width: { xs: 200, lg: 200 },
                    position: { lg: "absolute" },
                }}
            >
                {title} <EastIcon />
            </Typography>
        </Box>
    );
};

export default AnimatedButton;
