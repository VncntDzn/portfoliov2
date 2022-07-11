import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

import Pic from "../../assets/pic.jpg";

const LandingPage = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Image
                src={Pic}
                alt="Vincent"
                height={200}
                width={200}
                style={{ borderRadius: "50%" }}
            />
        </Box>
    );
};
export default LandingPage;
