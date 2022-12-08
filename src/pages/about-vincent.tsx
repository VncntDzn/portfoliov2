import WestIcon from "@mui/icons-material/West";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PageContainer from "layouts/PageContainer";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";
const AboutVincent: NextPageWithLayout = () => {
    const router = useRouter();

    const handleNavigateToHome = () => {
        router.push("/");
    };
    return (
        <Box
            sx={{
                paddingX: { xs: 5, md: 20, lg: 23 },
                paddingY: { xs: 2, md: 5 },
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                onClick={handleNavigateToHome}
                sx={{
                    cursor: "pointer",
                }}
            >
                <IconButton size="small">
                    <WestIcon
                        sx={{
                            color: "#8d8d8d",
                        }}
                    />
                </IconButton>
                <Typography
                    sx={{
                        fontSize: { xs: 13 },
                        textTransform: "uppercase",
                        color: "#8d8d8d",
                    }}
                >
                    Return to Home
                </Typography>
            </Box>
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
                    ></Box>
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
                            color: "green",
                        }}
                    >
                        Know More
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                sx={{
                    marginTop: { xs: 3, md: 5, lg: 10 },
                    gap: { xs: 1, md: 0 },

                    paddingX: { xs: 5, md: 10 },
                    paddingY: { xs: 2, md: 5 },

                    backgroundColor: "#F4F4F4",
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                }}
            >
                <Grid
                    item
                    container
                    lg={6}
                    sx={{
                        display: "flex",

                        height: "fit-content",
                        marginTop: { xs: 5, md: 0 },
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
                    <Typography
                        sx={{
                            fontSize: { xs: 25, lg: 55 },
                        }}
                    >
                        Previous Works
                    </Typography>
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
                    >
                        Know More
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    lg={6}
                    sx={{
                        marginTop: { xs: 5 },
                        display: "flex",
                        justifyContent: "center",
                    }}
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
                    <Box
                        sx={{
                            boxShadow: "30px 30px 10px gray",
                            borderRadius: "20px",
                            height: { xs: 250, lg: 600 },
                            width: { xs: 250, lg: 600 },
                            cursor: "not-allowed",
                        }}
                        component={motion.div}
                        whileHover={{
                            boxShadow: "60px 60px 10px gray",
                            margin: "1rem",
                        }}
                    ></Box>
                </Grid>
            </Grid>
        </Box>
    );
};

AboutVincent.getLayout = function getLayout(page: ReactNode) {
    return <PageContainer description="My portfolio">{page}</PageContainer>;
};

export default AboutVincent;
