import { Box } from "@mui/material";
import MyPic from "assets/pic.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <Box>
            <Box
                sx={{
                    boxShadow: "-30px 30px 10px gray",
                    borderRadius: "20px",
                    height: { xs: 250, lg: "fit-content" },
                    width: { xs: 250, lg: 500 },
                    cursor: "not-allowed",
                }}
                component={motion.div}
                whileHover={{
                    boxShadow: "-60px 60px 10px gray",
                    margin: "1rem",
                }}
            >
                <Image
                    src={MyPic}
                    alt="Vincent"
                    layout="responsive"
                    style={{ borderRadius: "20px" }}
                />
            </Box>
        </Box>
    );
};

export default Photo;
