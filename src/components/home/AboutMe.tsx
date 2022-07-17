import { Box, Typography } from "@mui/material";

const AboutMe = () => {
    return (
        <Box
            border="3px solid red"
            height="100vh   "
            sx={{
                backgroundColor: "white",
            }}
            /*  component={motion.div}
            whileInView={{ y: "-75vh" }}
            height="100vh"
            animate={{
                boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
                backgroundColor: "rgba(255,255,255)",
                borderRadius: 20,
            }}
            transition={{ ease: "easeOut", duration: 1 }} */
        >
            <Box
                sx={{
                    backgroundImage:
                        "radial-gradient(circle, #e1e1e1 20%, transparent 10%), radial-gradient(circle, #e1e1e1 20%, transparent 10%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 50px 50px",
                    height: "15vh",
                    width: "20vw",

                    position: "absolute",
                    bottom: 10,
                    zIndex: 1,
                }}
            />{" "}
            <Typography variant="h2" sx={{ zIndex: 10 }}>
                About Me
            </Typography>
        </Box>
    );
};

export default AboutMe;
