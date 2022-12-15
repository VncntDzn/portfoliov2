import WestIcon from "@mui/icons-material/West";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PageContainer from "layouts/PageContainer";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Principles from "features/about-me/components/Principles";
import Introduction from "features/about-me/components/Introduction";
import PreviousWorks from "features/about-me/components/PreviousWorks";
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
                <Introduction />
            </Grid>

            <Grid
                container
                direction="row"
                sx={{
                    marginTop: { xs: 3, md: 5, lg: 10 },
                    gap: { xs: 1, md: 0 },
                    paddingX: { xs: 5, md: 10 },
                    backgroundColor: "#F4F4F4",
                    paddingY: {lg:5},
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                }}
            >
              {/*   <Principles /> */}
                <PreviousWorks />
            </Grid>
        </Box>
    );
};

AboutVincent.getLayout = function getLayout(page: ReactNode) {
    return <PageContainer description="My portfolio">{page}</PageContainer>;
};

export default AboutVincent;
