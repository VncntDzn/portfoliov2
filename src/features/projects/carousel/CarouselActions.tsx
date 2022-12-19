import { Box, Typography } from "@mui/material";
import { ChildrenType } from "types";

interface CarouselActionsProps extends ChildrenType {
    title: string;
}
const HEADER_FONT_STYLE = {
    xs: 22,
    sm: 35,
    md: 30,
    lg: 32,
};
const CarouselActions = ({ children }: ChildrenType) => {
    return (
        <Box display="flex" justifyContent="space-between">
            <Typography alignSelf="center" fontSize={HEADER_FONT_STYLE}>
                hehe
            </Typography>
            <Box
                marginTop={2}
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{
                    width: {
                        xs: "35%",
                        sm: "15%",
                        lg: "13%",
                        xl: "8%",
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default CarouselActions;
