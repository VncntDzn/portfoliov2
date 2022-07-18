import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const FeaturedProject = () => {
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
