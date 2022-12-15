import WestIcon from "@mui/icons-material/West";
import { Box, Button, Divider, Typography } from "@mui/material";

const AboutHeader = () => {
    return (
        <>
            <Box
                display="flex"
                alignSelf="center"
                gap={1}
                component={Button}
                href="/"
                width="fit-content"
            >
                <WestIcon htmlColor="#8d8d8d" />
                <Typography
                    textTransform="uppercase"
                    fontWeight={500}
                    color="#8d8d8d"
                    fontSize={14}
                >
                    Return to Home
                </Typography>
            </Box>

            <Typography
                sx={{
                    fontSize: { xs: 35, lg: 55 },
                }}
            >
                About Vincent
            </Typography>
            <Divider sx={{ borderBottomWidth: "2px" }} />
        </>
    );
};

export default AboutHeader;
