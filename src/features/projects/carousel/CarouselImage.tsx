import { Box, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
interface CarouselImageProps {
    image: StaticImageData;
}
const CarouselImage = ({ image }: CarouselImageProps) => {
    return (
        <Grid item sm={6} lg={5} container justifyContent="center">
            <Box
                position="relative"
                sx={{
                    borderRadius: 3,
                    marginTop: { xs: -8, sm: 0 },
                    height: {
                        xs: "30vh",
                        sm: "20vh",
                        md: "45vh",
                        lg: "50vh",
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
