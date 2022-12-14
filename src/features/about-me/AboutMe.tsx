import EastIcon from "@mui/icons-material/East";
import { Box, Grid, Typography } from "@mui/material";
import MyPic from "assets/pic.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
const AboutMe = () => {
    const router = useRouter();

    const handleNavigateToAboutMe = () => {
        router.push("/about-vincent");
    };
    return (
        <Box
            sx={{
                paddingX: { xs: 5, md: 20, lg: 23 },
                paddingY: { xs: 2, md: 5 },
                height: { lg: "100vh" },
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
                            height: { xs: 250, lg: 500 },
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

                    <Box
                        component={motion.div}
                        whileHover={{
                            width: 138,
                            height: 50,
                            borderRadius: "10px",
                        }}
                        transition={{
                            ease: "easeIn",
                            duration: 1,
                            bounce: 0.5,
                        }}
                        sx={{
                            backgroundColor: "#e1e1e1",
                            zIndex: -1,

                            borderRadius: "50%",
                            padding: "0.8rem",

                            marginTop: 1,
                            position: "relative",
                            height: 70,
                            width: 70,
                        }}
                    >
                        <Typography
                            onClick={handleNavigateToAboutMe}
                            component="strong"
                            sx={{
                                fontSize: { xs: 13 },
                                textTransform: "uppercase",
                                color: "#8d8d8d",
                                textIndent: 0,
                                cursor: "pointer",
                                fontWeight: 700,
                                ":hover": {
                                    color: "#1d1d1d",
                                },
                                display: "flex",
                                alignItems: "center",

                                width: { xs: 150, lg: 200 },
                                position: { lg: "absolute" },
                            }}
                        >
                            Know more <EastIcon />
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;
