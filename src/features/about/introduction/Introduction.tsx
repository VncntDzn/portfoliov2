import { Grid } from "@mui/material";
import { AnimatedLayout } from "layouts";
import Details from "./components/Details";
import Photo from "./components/Photo";

const Introduction = () => {
    return (
        <Grid
            container
            direction="row"
            sx={{
                marginY: { xs: 3, md: 5 },
                gap: { xs: 1, md: 0 },
            }}
        >
            <AnimatedLayout>
                <Photo />
                <Details />
            </AnimatedLayout>
        </Grid>
    );
};
export default Introduction;
