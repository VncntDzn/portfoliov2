import { Box } from "@mui/material";

const Circle = () => {
    const SIZE = { xs: "19rem", lg: "30rem" };
    return (
        <Box
            position="absolute"
            marginRight="auto"
            marginLeft="auto"
            borderRadius={"50%"}
            zIndex={-1}
            sx={{
                backgroundColor: "white",
                height: SIZE,
                width: SIZE,
            }}
        />
    );
};

export default Circle;
