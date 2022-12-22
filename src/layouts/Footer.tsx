import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { NAV_LINKS, SOCIAL_LINKS } from "assets/data";
import Link from "next/link";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#1d1d1d",
                paddingX: { xs: 5, lg: 35, xl: 50 },
                paddingY: { xs: 5, lg: 10 },
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                alignSelf="center"
                sx={{
                    maxWidth: { lg: "60%" },
                }}
            >
                <Grid
                    item
                    container
                    justifyContent="space-evenly"
                    direction="row"
                    lg={12}
                    sm={12}
                >
                    {NAV_LINKS.map(({ name, path }) => (
                        <Link key={name} href={path}>
                            <Typography
                                textAlign="center"
                                key={name}
                                color="white"
                                sx={{
                                    cursor: "pointer",
                                }}
                            >
                                {name}
                            </Typography>
                        </Link>
                    ))}
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="space-evenly"
                    direction="row"
                    lg={6}
                    sm={6}
                >
                    {SOCIAL_LINKS.map(({ name, icon, path }) => (
                        <Link key={name} href={path}>
                            <IconButton
                                sx={{
                                    color: "white",
                                    ":hover": {
                                        backgroundColor: "#090909",
                                    },
                                }}
                            >
                                {icon}
                            </IconButton>
                        </Link>
                    ))}
                </Grid>
            </Grid>
            <Box
                component={Divider}
                sx={{
                    "&.MuiDivider-root": {
                        "&::before,&::after": {
                            borderTop: `thin solid white`,
                        },
                    },
                }}
                variant="middle"
            >
                <Typography textAlign="center" color="white">
                    © Vincent Dizon, 2022
                </Typography>
            </Box>
        </Box>
    );
};

Footer.propTypes = {};

export default Footer;
