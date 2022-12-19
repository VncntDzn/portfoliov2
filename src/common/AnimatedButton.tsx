import EastIcon from "@mui/icons-material/East";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface AnimatedButtonProps {
    title: string;
    path: string;
}
const AnimatedButton = ({ title, path }: AnimatedButtonProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(path);
    };
    return (
        <Box
            onClick={handleNavigation}
            component={motion.div}
            whileHover={{
                width: "100%",
                height: 50,
                borderRadius: "10px",
            }}
            transition={{
                ease: "easeOut",
            }}
            sx={{
                backgroundColor: "#e1e1e1",

                borderRadius: "50%",
                padding: "0.8rem",

                marginTop: 1,
                position: "relative",
                height: 70,
                width: 70,
                display: router.pathname === "/about" ? "none" : "block",
            }}
        >
            <Typography
                component="strong"
                sx={{
                    fontSize: { xs: 13 },
                    textTransform: "uppercase",
                    color: "#8d8d8d",
                    textIndent: 0,
                    cursor: "pointer",
                    fontWeight: 700,
                    ":hover": {
                        color: "#1d1d1d",
                    },
                    display: "flex",
                    alignItems: "center",

                    width: { xs: 150, lg: 200 },
                    position: { lg: "absolute" },
                }}
            >
                {title} <EastIcon />
            </Typography>
        </Box>
    );
};

export default AnimatedButton;
