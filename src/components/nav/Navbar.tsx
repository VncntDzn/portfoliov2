import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, border: "3px solid red" }}
                    >
                        Nav
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
