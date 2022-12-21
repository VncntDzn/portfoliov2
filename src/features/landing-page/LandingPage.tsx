import { Box, Divider, useTheme } from "@mui/material";

import Circle from "./components/Circle";
import ScrollArrow from "./components/ScrollArrow";
import SeeWorks from "./components/SeeWorks";
import Slogan from "./components/Slogan";
import SocialLinks from "./components/SocialLinks";

const LandingPage = () => {
    const theme = useTheme();
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            zIndex={1}
            bgcolor={theme.palette.primary.main}
            sx={{
                height: { xs: "85vh", sm: "40vh", lg: "100vh" },
                paddingX: { xs: 5, md: 20, lg: 30 },
            }}
        >
            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    display: { xs: "none", md: "flex" },
                    height: { xs: "none", md: "70%", lg: "79%", xl: "84%" },
                    position: "absolute",
                    left: "11%",
                }}
            />

            <Slogan />
            <SeeWorks />
            <SocialLinks />
            <ScrollArrow />
            <Circle />
            <Divider
                flexItem
                sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    top: 10,
                    bottom: 80,
                    left: "11%",
                    width: "80%",
                }}
            />
        </Box>
    );
};

export default LandingPage;
