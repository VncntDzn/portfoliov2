import { Box } from "@mui/material";
import Lottie from "lottie-react";
import Email from "../assets/Email.json";
const LottieComponent = () => {
    return (
        <Box
            sx={{
                display: { xs: "none", sm: "flex" },
                flex: "40%",
            }}
        >
            <Lottie animationData={Email} loop={true} />
        </Box>
    );
};

export default LottieComponent;
