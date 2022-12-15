import { Box, Grid } from "@mui/material";
import { PreviousWorks, AboutHeader, Introduction } from "features/about-me";
import PageContainer from "layouts/PageContainer";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";

const AboutVincent: NextPageWithLayout = () => {
    return (
        <Box
            sx={{
                paddingX: { xs: 5, md: 20, lg: 23 },
                paddingY: { xs: 2, md: 5 },
            }}
        >
            <AboutHeader />
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
                    paddingY: { lg: 5 },
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                }}
            >
                <PreviousWorks />
            </Grid>
        </Box>
    );
};

AboutVincent.getLayout = function getLayout(page: ReactNode) {
    return <PageContainer title="About" description="My portfolio">{page}</PageContainer>;
};

export default AboutVincent;
