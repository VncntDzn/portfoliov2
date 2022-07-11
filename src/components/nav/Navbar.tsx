import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useToggle } from "hooks";
import { Cross as Hamburger } from "hamburger-react";
const Navbar = () => {
    const [isOpen, setOpen] = useToggle();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Nav
                    </Typography>
                    <Hamburger
                        rounded
                        color="white"
                        size={28}
                        toggled={isOpen}
                        toggle={setOpen}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
