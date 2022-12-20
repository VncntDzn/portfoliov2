import { Box, Grid } from "@mui/material";
import Image from "next/image";

const CarouselImage = ({ image }) => {
    return (
        <Grid
            item
            sm={6}
            lg={6}
            container
            justifyContent="center"
            /*  sx={{ border: "3px solid red" }} */
        >
            <Box
                position="relative"
                sx={{
                    borderRadius: 3,
                    marginTop: { xs: -8, sm: 0 },
                    height: {
                        xs: "30vh",
                        sm: "20vh",
                        md: "45vh",
                        lg: "60vh",
                    },
                    width: {
                        xs: "100%",
                        sm: "95%",
                        lg: "100%",
                    },
                }}
            >
                <Image src={image.src} quality={100} layout="fill" alt={"sd"} />
            </Box>
        </Grid>
    );
};

export default CarouselImage;
