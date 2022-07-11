import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import Pic from "../../assets/pic.jpg";

const LandingPage = () => {
    return (
        <Box
            border="3px solid red"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Image
                src={Pic}
                alt="Vincent"
                height={200}
                width={200}
                style={{ borderRadius: "50%" }}
            />
            <Box alignSelf="flex-start">
                <Typography sx={{ borderBottom: "3px solid red" }}>
                    Hello, my name is
                </Typography>
                <Typography>Vincent</Typography>
            </Box>
        </Box>
    );
};
export default LandingPage;
