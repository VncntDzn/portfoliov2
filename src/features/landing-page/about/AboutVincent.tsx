import EastIcon from "@mui/icons-material/East";
import { Box, Grid, Typography } from "@mui/material";
import MyPic from "assets/pic.jpg";
import Details from "features/about/introduction/components/Details";
import { motion } from "framer-motion";
import { EASE_OUT_TRANSITION } from "helpers";
import Image from "next/image";
import { useRouter } from "next/router";
const AboutVincent = () => {
    const router = useRouter();

    const handleNavigateToAboutVincent = () => {
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
                    display: "flex",
                    alignItems: "flex-start",
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
                    transition={EASE_OUT_TRANSITION}
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
                    component={motion.div}
                    initial={{ opacity: 0, x: "10rem" }}
                    whileInView={{
                        x: "0%",

                        opacity: 1,
                    }}
                    transition={EASE_OUT_TRANSITION}
                >
                    <Box
                        display="flex"
                   
                        flexDirection={"column"}
                        sx={{
                            alignItems: { xs: "center", lg: "flex-start" },
                        }}
                    >
                        <Details />
                    </Box>
                    {/*   <Typography
                        sx={{
                            lineHeight: "2rem",
                            height: "fit-content",
                            display: "flex",
                        }}
                    >
                        <Typography
                            component="span"
                            variant="h1"
                            marginTop={-1.1}
                            marginRight={1}
                        >
                            H
                        </Typography>
                        ello friend, I'm Alice — I'm an independent illustrator
                        and muralist! As a Bay Area native, I am based in San
                        Francisco. My favorite corner of the internet is the
                        Creative Cuties Discord that my friend Amy and I co-run!
                    </Typography> */}

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
                            onClick={handleNavigateToAboutVincent}
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

export default AboutVincent;
