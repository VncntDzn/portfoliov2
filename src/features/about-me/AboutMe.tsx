import { Box, Grid, Typography } from "@mui/material";
import MyPic from "assets/pic.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const AboutMe = () => {
    const router = useRouter();

    const handleNavigateToAboutMe = () => {
        router.push("/about-vincent");
    };
    return (
        <Box
            height="100vh"
            sx={{
                paddingX: { xs: 5, md: 20, lg: 23 },
                paddingY: { xs: 2, md: 5 },
            }}
        >
            <Typography
                sx={{
                    fontSize: { xs: 35, lg: 55 },
                }}
            >
                About Vincent
            </Typography>
            <hr />
            <Grid
                container
                direction="row"
                sx={{
                    marginTop: { xs: 3, md: 5, lg: 10 },
                    gap: { xs: 1, md: 0 },
                }}
            >
                <Grid
                    item
                    container
                    lg={6}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, x: "-10rem" }}
                    whileInView={{
                        x: "0%",
                        opacity: 1,
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                    <Box
                        sx={{
                            boxShadow: "-30px 30px 10px gray",
                            borderRadius: "20px",
                            height: { xs: 250, lg: 600 },
                            width: { xs: 250, lg: 600 },
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
                </Grid>
                <Grid
                    item
                    container
                    lg={6}
                    sx={{ marginTop: { xs: 5 }, height: "fit-content" }}
                    component={motion.div}
                    initial={{ opacity: 0, x: "10rem" }}
                    whileInView={{
                        x: "0%",

                        opacity: 1,
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                    <Typography
                        sx={{
                            textIndent: "2rem",
                            lineHeight: "2.2rem",
                            height: "fit-content",
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book.
                    </Typography>
                    <Typography
                        sx={{
                            textIndent: "2rem",
                            lineHeight: "2.2rem",
                            height: "fit-content",
                            display: { xs: "none", lg: "block" },
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book.
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            textIndent: 0,
                            cursor: "pointer",
                        }}
                        onClick={handleNavigateToAboutMe}
                    >
                        Know More
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;
