import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField } from "@mui/material";
import { SectionTitle } from "common";
import { AnimatedLayout } from "layouts";

const Contact = () => {
    return (
        <AnimatedLayout isPadded isPrimaryColor={false}>
            <Box width="100%" height="100vh">
                <SectionTitle title="Connect with Vincent" />
                <Box display="flex" gap={5} marginTop={3}>
                    <Box sx={{ flex: "70%" }}>
                        <TextField
                            variant="standard"
                            placeholder="Email"
                            required
                            fullWidth
                            sx={{ my: 1 }}
                            type="email"
                        />

                        <Box
                            component="textarea"
                            height={200}
                            width="100%"
                            required
                            placeholder="Enter your message"
                            sx={{
                                my: 1,
                                border: "none",
                                borderBottom: "1px solid",
                                fontSize: "1rem",
                                color: "rgba(0, 0, 0, 0.87)",
                                fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,

                                ":focus": {
                                    outline: "none",
                                    borderBottom: "1px solid blue",
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                float: "right",
                                backgroundColor: "#1d1d1d",
                            }}
                        >
                            Send Email &nbsp;
                            <SendIcon fontSize="small" />
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            flex: "30%",
                        }}
                    />
                </Box>
            </Box>
        </AnimatedLayout>
    );
};

export default Contact;
