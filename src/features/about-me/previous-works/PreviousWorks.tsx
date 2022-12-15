import { Typography, Box } from "@mui/material";
import ListOfWorks from "./components/ListOfWorks";

const PreviousWorks = () => {
    return (
        <Box mb={5} mt={2}>
            <Typography sx={{ fontSize: { xs: 30, lg: 45, fontWeight: 600 } }}>
                My Journey
            </Typography>
            <ListOfWorks />
        </Box>
    );
};

export default PreviousWorks;
