import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Grid, Icon } from "@mui/material";
import Creativ from "assets/projects/creativ.jpeg";
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselActions from "./CarouselActions";
import CarouselDescription from "./CarouselDescription";
import CarouselImage from "./CarouselImage";
const BUTTON_STYLE = {
    display: "flex",
    alignItems: "center",
};
const data = [
    {
        image: Creativ,
    },
    {
        image: Creativ,
    },
    {
        image: Creativ,
    },
    {
        image: Creativ,
    },
];
const Carousel = () => {
    return (
        <CarouselProvider
            totalSlides={data.length}
            naturalSlideWidth={100}
            naturalSlideHeight={125}
        >
            <Box
                sx={{
                    height: { xs: "68vh", sm: "35rem", lg: "45rem" },
                    width: "80vw",
                    paddingX: 1,
                    overflow: "hidden",
                }}
            >
                <Box component={Slider} height="100%">
                    {data.map(({ image }, i) => (
                        <Slide index={0} key={i}>
                            <CarouselActions>
                                <ButtonBack style={BUTTON_STYLE}>
                                    <ArrowBackIosNewIcon />
                                </ButtonBack>
                                <ButtonNext style={BUTTON_STYLE}>
                                    <ArrowForwardIosIcon />
                                </ButtonNext>
                            </CarouselActions>

                            <Grid
                                container
                                spacing={3}
                                sx={{
                                    padding: 1,
                                    marginTop: { xs: 10, sm: 0 },
                                }}
                            >
                                <CarouselImage image={image} />
                                <CarouselDescription />
                            </Grid>
                        </Slide>
                    ))}
                </Box>
            </Box>
        </CarouselProvider>
    );
};

export default Carousel;
