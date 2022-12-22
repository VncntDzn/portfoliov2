import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Grid } from "@mui/material";
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import projects from "../assets/data";
import CarouselActions from "./CarouselActions";
import CarouselDescription from "./CarouselDescription";
import CarouselImage from "./CarouselImage";
const BUTTON_STYLE = {
    display: "flex",
    alignItems: "center",
};

const Carousel = () => {
    return (
        <CarouselProvider
            totalSlides={projects.length}
            naturalSlideWidth={100}
            naturalSlideHeight={125}
        >
            <Box
                overflow="hidden"
                paddingX={1}
                width="80vw"
                sx={{
                    height: { xs: "68vh", sm: "35rem", lg: "45rem" },
                }}
            >
                <Box component={Slider} height="100%">
                    {projects.map(({ image, title, id, description }) => (
                        <Slide index={0} key={id}>
                            <CarouselActions title={title}>
                                <ButtonBack style={BUTTON_STYLE}>
                                    <ArrowBackIosNewIcon />
                                </ButtonBack>
                                <ButtonNext style={BUTTON_STYLE}>
                                    <ArrowForwardIosIcon />
                                </ButtonNext>
                            </CarouselActions>

                            <Grid
                                container
                                sx={{
                                    marginTop: { xs: 10, sm: 0 },
                                    gap: { xs: 0, lg: 5 },
                                }}
                            >
                                <CarouselImage image={image} />
                                <CarouselDescription
                                    description={description}
                                    id={id}
                                />
                            </Grid>
                        </Slide>
                    ))}
                </Box>
            </Box>
        </CarouselProvider>
    );
};

export default Carousel;
