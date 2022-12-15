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
                I'm Vincent P. Dizon.
            </Typography>

            <Typography lineHeight={2}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
            </Typography>
            <Typography lineHeight={2}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
            </Typography>
            <Typography
                color="#8d8d8d"
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
