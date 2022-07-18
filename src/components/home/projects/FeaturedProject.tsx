import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Typography } from "@mui/material";

import { motion, useAnimation } from "framer-motion";
const FeaturedProject = () => {
  const controls = useAnimation();
   
    const LINKS = [
        {
            name: "LinkedIn",
            link: "",
        },
        {
            name: "Github",
            link: "",
        },
        {
            name: "Instagram",
            link: "",
        },
    ];
    return (
        <Carousel>
            {/*    https://www.behance.net/gallery/118958267/Portfolio-website-design-On-MacBook-Mockup */}
            {LINKS.map(({ name }) => (
                <Box key={name} border="3px solid red " height={400}>
                    <Typography>{name}</Typography>
                </Box>
            ))}
        </Carousel>
    );
};

FeaturedProject.propTypes = {};

export default FeaturedProject;
