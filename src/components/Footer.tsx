import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
const Footer = () => {
    const NAV_LINKS = [
        {
            name: "Home",
            route: "",
        },
        {
            name: "About Me",
            route: "",
        },
        {
            name: "Projects",
            route: "",
        },
        {
            name: "Skills",
            route: "",
        },
    ];
    const SOCIAL_LINKS = [
        {
            name: "LinkedIn",
            link: "",
            icon: <GitHubIcon />,
        },
        {
            name: "Github",
            link: "",
            icon: <LinkedInIcon />,
        },
        {
            name: "Instagram",
            link: "",
            icon: <InstagramIcon />,
        },
    ];
    return (
        <Box
            sx={{
                backgroundColor: "#1d1d1d",

                paddingX: { xs: 5, lg: 25, xl: 50 },
                paddingY: { xs: 5, lg: 10 },
            }}
        >
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid
                    item
                    container
                    flexDirection="column"
                    justifyContent="flex-start"
                    lg={3}
                >
                    <Typography color="white" variant="h6">
                        Vincent Dizon
                    </Typography>
                    <Typography color="white">Sign in</Typography>
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="space-evenly"
                    direction="row"
                    lg={6}
                >
                    {NAV_LINKS.map(({ name }) => (
                        <Typography textAlign="center" key={name} color="white">
                            {name}
                        </Typography>
                    ))}
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="space-evenly"
                    direction="row"
                    lg={3}
                >
                    {SOCIAL_LINKS.map(({ name, icon }) => (
                        <IconButton
                            key={name}
                            sx={{
                                color: "white",
                                ":hover": {
                                    backgroundColor: "#090909",
                                },
                            }}
                        >
                            {icon}
                        </IconButton>
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
