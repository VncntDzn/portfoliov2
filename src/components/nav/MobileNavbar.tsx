import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import NAV from "./data";

const MobileNavbar = () => {
    return (
        <Box
            position="absolute"
            top={0}
            right={0}
            height="100%"
            zIndex={1}
            width="70%"
        >
            {NAV.map(({ name }) => (
                <Fragment key={name}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{
                            ":hover": {
                                backgroundColor: "#F87537",
                                color: "white",
                                marginX: 2,
                                borderRadius: 5,
                            },
                        }}
                    >
                        <Typography sx={{ paddingY: 5 }}>{name}</Typography>
                    </Box>
                </Fragment>
            ))}
        </Box>
    );
};

MobileNavbar.propTypes = {};

export default MobileNavbar;
