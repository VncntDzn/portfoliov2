import WestIcon from "@mui/icons-material/West";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

const ReturnToHome = () => {
    const router = useRouter();
    return (
        <Box
            display={router.pathname === "/" ? "none" : "flex"}
            alignSelf="center"
            gap={1}
            width="fit-content"
            component={Button}
            href="/"
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
    );
};

export default ReturnToHome;
