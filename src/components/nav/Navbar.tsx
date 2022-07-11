import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Cross as Hamburger } from "hamburger-react";
import { useToggle } from "hooks";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
    const [isOpen, setOpen] = useToggle();

    return (
        <>
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
                        <Box zIndex={10}>
                            <Hamburger
                                rounded
                                color={isOpen ? "black" : "white"}
                                size={28}
                                toggled={isOpen}
                                toggle={setOpen}
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {isOpen && <MobileNavbar />}
        </>
    );
};

export default Navbar;
