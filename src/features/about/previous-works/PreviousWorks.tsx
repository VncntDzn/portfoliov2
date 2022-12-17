import { Typography, Box, Grid } from "@mui/material";
import ListOfWorks from "./components/ListOfWorks";

const PreviousWorks = () => {
    return (
        <Grid
            container
            direction="row"
            sx={{
                marginTop: { xs: 3, md: 5, lg: 10 },
                gap: { xs: 1, md: 0 },
                paddingX: { xs: 5, md: 10 },
                backgroundColor: "#F4F4F4",
                paddingY: { lg: 5 },
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
            }}
        >
            <Box mb={5} mt={2}>
                <Typography
                    sx={{ fontSize: { xs: 30, lg: 45, fontWeight: 600 } }}
                >
                    My Journey
                </Typography>
                <ListOfWorks />
            </Box>
        </Grid>
    );
};

export default PreviousWorks;
