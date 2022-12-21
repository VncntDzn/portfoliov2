import { Box, Typography } from "@mui/material";
import { AnimatedButton } from "common";

const Details = () => {
    return (
        <Box>
            <Typography color="#8d8d8d">HELLO THERE,</Typography>
            <Typography
                fontWeight={700}
                height="fit-content"
                sx={{
                    fontSize: { xs: 25, lg: 40 },
                }}
            >
                I&rsquo;m Vincent P. Dizon
            </Typography>
            <Typography
                lineHeight={2}
                textAlign="justify"
                sx={{
                    textIndent: "2.2rem",
                }}
            >
                A frontend developer based in the Philippines. Over the past 3
                years and a half as a developer, I&rsquo;ve built websites from
                simplest to the most complex designs for local and international
                clients. Some of the websites that I&rsquo;ve developed were on a team
                or I developed it solely.
            </Typography>
            <Typography
                lineHeight={2}
                textAlign="justify"
                sx={{
                    textIndent: "2.2rem",
                }}
            >
                On my free time, I always go on a road trip using my motorcycle
                and discover places and delicious foods around the Philippines.
            </Typography>
            <AnimatedButton title="Know More" path="/about" width={130} />
        </Box>
    );
};
export default Details;
