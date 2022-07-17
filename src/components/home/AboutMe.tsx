import { Box, Grid, Typography } from "@mui/material";
import MyPic from "assets/pic.jpg";
import Image from "next/image";
const AboutMe = () => {
    return (
        <Box
            height="100vh"
            sx={{
                backgroundColor: "white",
                paddingX: { xs: 5, lg: 25 },
                paddingY: 5,
            }}

            /*  component={motion.div}
            whileInView={{ y: "-75vh" }}
            height="100vh"
            animate={{
                boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                backgroundColor: "rgba(255,255,255)",
                borderRadius: 20,
            }}
            transition={{ ease: "easeOut", duration: 1 }} */
        >
            <Typography variant="h2">About Me</Typography>
            <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                More than a developer
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                sx={{ border: "3px solid red" }}
            >
                <Grid item container lg={6} sx={{ border: "3px solid green" }}>
                    <Image
                        src={MyPic}
                        alt="Vincent"
                        height={400}
                        width={400}
                        style={{
                            borderRadius: 20,
                        }}
                    />
                </Grid>
                <Grid item container lg={6} sx={{ border: "3px solid blue" }}>
                    xx
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;
