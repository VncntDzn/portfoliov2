import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";

import Pic from "../../assets/pic.jpg";

const LandingPage = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginY={5}
        >
            <Image
                src={Pic}
                alt="Vincent"
                height={200}
                width={200}
                style={{ borderRadius: "50%" }}
            />
            <Box alignSelf="flex-start" marginY={2}>
                <Typography variant="h6">Hello my name is,</Typography>
                <Divider sx={{ width: "50%" }} />
                <Typography variant="h4">Vincent</Typography>
                <Button variant="contained" sx={{ backgroundColor: "#F87537" }}>
                    Download CV
                </Button>
            </Box>
        </Box>
    );
};
export default LandingPage;
