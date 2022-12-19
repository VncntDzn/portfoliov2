import { Box, Button, Typography } from "@mui/material";
import { AnimatedButton } from "common";
const SelectedProjectDescription = () => {
    return (
        <>
            <Typography>
                Social Gen is a simple social media site inspired by
                facebook/instagram. It is a rebranding of an old project called
                'Foodie'. It has the basic functionality of a social media site
                such as authentication, private messaging, notification, profile
                customization and many more.
            </Typography>
            <Typography variant="h6" fontWeight={700}>
                Tech Stack:{" "}
            </Typography>
            <Typography variant="caption">
                HTML5/ CSS3/ JavaScript/ Tailwind CSS/ React JS/ Redux/
            </Typography>
            <Box width={175}>
                <AnimatedButton title="Visit Live Version" path="/" />
            </Box>
        </>
    );
};

export default SelectedProjectDescription;
