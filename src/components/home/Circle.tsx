import { Box } from "@mui/material";

const Circle = () => {
    return (
        <Box
            position="absolute"
            right={0}
            left={0}
            marginRight="auto"
            marginLeft="auto"
            borderRadius={"50%"}
            zIndex={-1}
            sx={{
                backgroundColor: "white",
                height: { xs: "20rem", lg: "30rem" },
                width: { xs: "20rem", lg: "30rem" },
            }}
        />
    );
};

export default Circle;
