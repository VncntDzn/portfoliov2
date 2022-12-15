import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { PRINCIPLES_DATA } from "../data";
const Principles = () => {
    return (
        <Grid
            item
            container
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
                    fontSize: { xs: 25, lg: 90 },
                }}
            >
                Principles
            </Typography>
            <Typography
                sx={{
                    textIndent: "2rem",
                    lineHeight: "2.2rem",
                    height: "fit-content",
                }}
            >
                Over the years, I developed a UX for good manifesto that guides
                my design work and who I do business with (clients or partners).
                If you like the sound of this, hopefully well be a good match.
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flex: 1,
                    flexWrap: "wrap",
                    gap: 5,
                }}
            >
                {PRINCIPLES_DATA.map(({ title, description }) => (
                    <Box
                        key={title}
                        sx={{
                            width: 450,
                        }}
                    >
                        <Typography variant="h5" fontWeight={700}>
                            {title}
                        </Typography>
                        <Typography
                            paragraph
                            textAlign="justify"
                            sx={{
                                textIndent: "2rem",
                                marginTop: 1,
                            }}
                        >
                            {description}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Grid>
    );
};

Principles.propTypes = {};

export default Principles;
