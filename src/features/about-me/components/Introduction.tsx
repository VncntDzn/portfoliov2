import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Introduction = () => {
    return (
        <>
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
                sx={{
                    marginTop: { xs: 5 },
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
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
                <Typography color="#8d8d8d">HELLO THERE</Typography>
                <Typography
                    sx={{
                        height: "fit-content",

                        fontSize: 40,
                        fontWeight: 700,
                    }}
                >
                    I'm Vincent P. Dizon. &nbsp;&nbsp;&nbsp; I create website
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

                <Typography
                    component="address"
                    sx={{
                        lineHeight: "2.2rem",
                        height: "fit-content",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <LocationOnIcon fontSize="small" />
                    Metro Manila, Philippines
                </Typography>
            </Grid>
        </>
    );
};

Introduction.propTypes = {};

export default Introduction;
