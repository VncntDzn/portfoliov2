import { Typography, Box, Grid, useTheme } from "@mui/material";
import ListOfWorks from "./components/ListOfWorks";

const PreviousWorks = () => {
    const theme = useTheme();
    return (
        <Grid
            container
            direction="row"
            bgcolor={theme.palette.primary.main}
            sx={{
                marginTop: { xs: 3, md: 5, lg: 10 },
                gap: { xs: 1, md: 0 },
                paddingX: { xs: 5, md: 10 },
                paddingY: { lg: 5 },
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
            }}
        >
            <Box mb={5} mt={2}>
                <Typography
                    fontWeight={600}
                    sx={{ fontSize: { xs: 30, lg: 45 } }}
                >
                    My Journey
                </Typography>
                <ListOfWorks />
            </Box>
        </Grid>
    );
};

export default PreviousWorks;
