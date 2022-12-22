import { Box, Grid, Typography } from "@mui/material";
import { AnimatedButton } from "common";
interface CarouselDescriptionProps {
    description: string;
    id: string;
}
const CarouselDescription = ({ description, id }: CarouselDescriptionProps) => {
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
                    lineHeight={2}
                    textAlign="justify"
                    sx={{
                        display: {
                            xs: "none",
                            sm: "inline-block",
                        },
                        textIndent: "2rem",
                    }}
                >
                    {description}
                </Typography>
            </Box>
            <AnimatedButton
                title="View Project"
                path={`/featured-project/${id}`}
                width={150}
            />
        </Grid>
    );
};

export default CarouselDescription;
