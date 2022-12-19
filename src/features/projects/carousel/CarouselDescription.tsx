import { Box, Grid, Typography } from "@mui/material";
import { AnimatedButton } from "common";

const CarouselDescription = () => {
    return (
        <Grid
            item
            sm={6}
            lg={6}
            container
            sx={{
                marginTop: { xs: 5, sm: 0 },
                height: "100%",
            }}
        >
            <Box
                sx={{
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "relative",
                }}
            >
                <Typography
                    sx={{
                        display: {
                            xs: "none",
                            lg: "inline-block",
                            textAlign: "justify",
                            textIndent: "2rem",
                            lineHeight: "2.2rem",
                        },
                    }}
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                </Typography>
            </Box>
            <AnimatedButton
                title="View Project"
                path="/featured-project"
                width={150}
            />
        </Grid>
    );
};

export default CarouselDescription;
