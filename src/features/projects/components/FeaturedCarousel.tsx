import React, { useState } from "react";
import { Box, Divider, Grid, Icon, Typography } from "@mui/material";
import Creativ from "assets/projects/creativ.jpeg";
import Image from "next/image";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Description from "./Description";
const BUTTON_STYLE = {
    background: "none",
    border: "1px solid",
    borderRadius: "50%",
    height: "3rem",
    width: "3rem",
    margin: "0 2px",
};
const HEADER_FONT_STYLE = {
    xs: 22,
    sm: 35,
    md: 30,
    lg: 32,
};
const FeaturedCarousel = props => {
    const DATA = [
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
    return (
        <Box>
            <CarouselProvider
                totalSlides={DATA.length}
                naturalSlideWidth={100}
                naturalSlideHeight={125}
            >
                <Box
                    sx={{
                        height: { xs: "65vh", sm: "35rem", lg: "45rem" },
                        width: "80vw",

                        paddingX: 1,
                        overflow: "hidden",
                    }}
                >
                    <Slider style={{ height: "100%" }}>
                        {DATA.map(({ image }, i) => (
                            <Slide index={0} key={i}>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Typography
                                        alignSelf="center"
                                        fontSize={HEADER_FONT_STYLE}
                                    >
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
                                        <ButtonBack style={BUTTON_STYLE}>
                                            <Icon>
                                                <ArrowBackIosNewIcon />
                                            </Icon>
                                        </ButtonBack>
                                        <ButtonNext style={BUTTON_STYLE}>
                                            <Icon>
                                                <ArrowForwardIosIcon />
                                            </Icon>
                                        </ButtonNext>
                                    </Box>
                                </Box>
                                <Grid
                                    container
                                    marginTop={10}
                                    spacing={3}
                                    sx={{
                                        padding: 1,
                                    }}
                                >
                                    <Grid
                                        item
                                        sm={6}
                                        lg={6}
                                        container
                                        justifyContent="center"
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
                                                },
                                                width: {
                                                    xs: "100%",
                                                    sm: "95%",
                                                    lg: "100%",
                                                },
                                                boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`,
                                            }}
                                        >
                                            <Image
                                                src={image.src}
                                                quality={100}
                                                layout="fill"
                                                alt={"sd"}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        sm={6}
                                        lg={6}
                                        container
                                        sx={{
                                            marginTop: { xs: 5, sm: 0 },
                                            height: "100%",
                                        }}
                                    >
                                        <Description />
                                    </Grid>
                                </Grid>
                            </Slide>
                        ))}
                    </Slider>
                </Box>
            </CarouselProvider>
        </Box>
    );
};

export default FeaturedCarousel;
