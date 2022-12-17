import { Box } from "@mui/material";
import Creativ from "assets/projects/creativ.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Description from "./Description";

const FeaturedProject = ({ show }) => {
    const controls2 = useAnimation();

    const LINKS = [
        {
            image: Creativ,
            name: "Github",
            link: "",
            height: 300,
            margin: "2.5rem 0 15rem 0",
        },
        {
            bgColor: "yellow",
            image: Creativ,
            name: "Instagram",
            link: "",
            height: 300,

            margin: "-6rem 0 0 0",
        },
        {
            bgColor: "blue",
            image: Creativ,
            name: "Facebook",
            link: "",
            height: 400,
            margin: `-19rem 0 0 0`,
        },
        {
            bgColor: "blue",
            image: Creativ,
            name: "Facebook",
            link: "",
            height: 400,
            margin: `-19rem 0 0 0`,
        },
    ];

    const EASE_OUT_TRANSITION = { ease: "easeIn", duration: 1 };
    useEffect(() => {
        if (show) {
            controls2.start({
                display: "flex",
                opacity: 1,
                transition: { duration: 2 },
            });
        }
    }, [show, controls2]);
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="row"
            alignItems={"center"}
            justifyContent="space-evenly"
        >
            {show &&
                LINKS.map(({ name, image }, i) => (
                    <Box
                        component={motion.div}
                        whileHover={{
                            scale: 1.5,
                            zIndex: 2,
                            borderRadius: "1rem",
                            filter: "brightness(1)",
                        }}
                        transition={EASE_OUT_TRANSITION}
                        position="relative"
                        key={name}
                        sx={{
                            height: "40vh",
                            width: "30vw",
                            zIndex: 1,
                            backgroundImage: `url("${image.src}")`,
                            backgroundSize: "cover",
                            objectFit: "contain",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginY: 1,
                            filter: "brightness(70%)",
                        }}
                    >
                        <Description />
                    </Box>
                ))}
        </Box>
    );
};

FeaturedProject.propTypes = {};

export default FeaturedProject;
