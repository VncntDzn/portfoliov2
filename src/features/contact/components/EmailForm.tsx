import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField, useTheme } from "@mui/material";
const EmailForm = () => {
    const theme = useTheme();
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
                my={1}
                borderRadius="3px"
                padding="1rem"
                fontSize="1rem"
                fontFamily={`"Roboto","Helvetica","Arial",sans-serif`}
                color="rgba(0, 0, 0, 0.87)"
                sx={{
                    ":focus": {
                        outline: "1px solid blue",
                    },
                }}
            />
            <Box
                component={Button}
                variant="contained"
                bgcolor={theme.palette.secondary.main}
                sx={{
                    float: "right",
                }}
                color="white"
            >
                Send Email &nbsp;
                <SendIcon fontSize="small" />
            </Box>
        </Box>
    );
};

export default EmailForm;
