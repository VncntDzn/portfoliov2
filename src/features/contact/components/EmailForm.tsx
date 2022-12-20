import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField } from "@mui/material";
const EmailForm = () => {
    return (
        <Box sx={{ flex: "60%" }}>
            <TextField
                placeholder="Email"
                required
                fullWidth
                type="email"
                sx={{
                    my: 1,
                }}
            />

            <Box
                component="textarea"
                height={200}
                width="100%"
                required
                placeholder="Enter your message"
                sx={{
                    borderRadius: "3px",
                    my: 1,
                    padding: "1rem",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.87)",
                    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,

                    ":focus": {
                        outline: "1px solid blue",
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
    );
};

export default EmailForm;
