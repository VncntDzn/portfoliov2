import { Box, useMediaQuery, useTheme } from "@mui/material";

import Circle from "./components/Circle";
import SeeWorks from "./components/SeeWorks";
import Slogan from "./components/Slogan";
import SocialLinks from "./components/SocialLinks";

const LandingPage = () => {
    const theme = useTheme();
    const mediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
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
                height: { sm: "40vh", lg: "100vh" },
            }}
        >
            <Box
                borderLeft={
                    mediaQuery ? `2px solid ${theme.palette.primary.light}` : ""
                }
                borderBottom={
                    mediaQuery ? `2px solid ${theme.palette.primary.light}` : ""
                }
                height="80vh"
                width="74vw"
                maxHeight="80vh"
                maxWidth="75vw"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    marginY: { sm: 5, lg: 0 },
                }}
            >
                <Slogan mediaQuery={mediaQuery} />
                <SeeWorks />
                <Circle />
                <SocialLinks />
            </Box>
        </Box>
    );
};

export default LandingPage;
