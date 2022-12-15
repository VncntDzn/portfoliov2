import { Box, Divider } from "@mui/material";
import Counter from "components/Counter";

import Circle from "./home/Circle";
import ScrollArrow from "./home/ScrollArrow";
import SeeWorks from "./home/SeeWorks";
import Slogan from "./home/Slogan";
import SocialLinks from "./home/SocialLinks";

const LandingPage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            zIndex={1}
            sx={{
                backgroundColor: "#F4F4F4",
                height: { xs: "85vh", sm: "40vh", lg: "100vh" },
                paddingX: { xs: 5, md: 20, lg: 30 },
            }}
        >
            <Divider
                orientation="vertical"
                flexItem
                sx={{
                    display: { xs: "none", md: "flex" },
                    height: { xs: "none", md: "70%", lg: "79%" },
                    position: "absolute",
                    left: "11%",
                }}
            />

            <Slogan />
            <SeeWorks />
            <SocialLinks />
            <ScrollArrow />
            <Circle />
            <Counter count={1} />
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
