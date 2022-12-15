import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";

const Details = () => {
    return (
        <>
            <Typography color="#8d8d8d">HELLO THERE,</Typography>
            <Typography
                sx={{
                    height: "fit-content",
                    fontSize: 40,
                    fontWeight: 700,
                }}
            >
                I'm Vincent P. Dizon. &nbsp;&nbsp;&nbsp; I create website
            </Typography>
            <Typography
                sx={{
                    textIndent: 0,
                    cursor: "pointer",
                    color: "green",
                }}
            >
                Know More
            </Typography>

            <Typography
                component="address"
                sx={{
                    lineHeight: "2.2rem",
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <LocationOnIcon fontSize="small" />
                Metro Manila, Philippines
            </Typography>
        </>
    );
};
export default Details;
