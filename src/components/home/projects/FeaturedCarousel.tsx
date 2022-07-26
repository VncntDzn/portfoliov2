import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Typography } from "@mui/material";
import Creativ from "assets/projects/creativ.jpeg";
import Image from "next/image";

const FeaturedCarousel = props => {
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const handleNextSlide = () => {
        setSelectedItem(prevItem => prevItem + 1);
    };
    const handlePreviousSlide = () => {
        setSelectedItem(prevItem => prevItem - 1);
    };
    const handleCurrentSlide = index => {
        if (selectedItem !== index) {
            setSelectedItem(index);
        }
    };
    return (
        <>
            <button onClick={handleNextSlide}>next</button>
            <button onClick={handlePreviousSlide}>back</button>
            <Carousel
                selectedItem={selectedItem}
                onChange={handleCurrentSlide}
                showThumbs={false}
            >
                 <Box
                        position="relative"
                        sx={{
                            overflow: "hidden",
                            borderRadius: 3,

                            height: { xs: "40vh", sm: "20vh", md: "50vh" },
                            width: { xs: 300, sm: "95%", lg: "50vw" },
                            boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`,
                            padding: 1,
                            border: "3px solid red",
                        }}
                    >
                        <Image
                            src={Creativ}
                            quality={100}
                            layout="fill"
                            objectFit="contain"
                            alt="Hi"
                        />
                    </Box>
                <div>
                    <Typography className="legend">Legend 2</Typography>
                </div>
                <div>
                    <Typography className="legend">Legend 3</Typography>
                </div>
            </Carousel>
        </>
    );
};

export default FeaturedCarousel;
