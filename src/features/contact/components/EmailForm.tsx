/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import SendIcon from "@mui/icons-material/Send";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
    useTheme
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const EmailForm = () => {
    const theme = useTheme();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState({
        open: false,
        message: "",
    });
    const [form, setForm] = useState({
        email: "",
        subject: "",
        name: "",
        message: "",
    });
    const handleSubmitEmail = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (process!.env!.NEXT_PUBLIC_HERO_TOFU_API) {
                await axios.post(process.env.NEXT_PUBLIC_HERO_TOFU_API, {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                });
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            setError({ open: true, message: "Something went wrong" });
        }
    };

    if (error.open) {
        return (
            <Dialog
                open={error.open}
                onClose={() => setError({ ...error, open: false })}
            >
                <DialogContent>Something went wrong</DialogContent>
                <DialogActions>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => setError({ ...error, open: false })}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    return (
        <Box sx={{ flex: "60%" }}>
            <form onSubmit={handleSubmitEmail} method="post">
                <TextField
                    name="Full name"
                    placeholder="Full name"
                    required
                    fullWidth
                    type="text"
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    sx={{
                        my: 1,
                    }}
                />
                <TextField
                    name="Email"
                    placeholder="Email"
                    required
                    fullWidth
                    type="email"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    sx={{
                        my: 1,
                    }}
                />
                <TextField
                    name="Subject"
                    placeholder="Subject"
                    required
                    fullWidth
                    type="text"
                    onChange={e =>
                        setForm({ ...form, subject: e.target.value })
                    }
                    sx={{
                        my: 1,
                    }}
                />
                <Box
                    name="Message"
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
                    onChange={e =>
                        setForm({ ...form, message: e.target.value })
                    }
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
                    type="submit"
                    disabled={isLoading ? true : false}
                >
                    {!isLoading ? (
                        <>
                            Send Email &nbsp;
                            <SendIcon fontSize="small" />
                        </>
                    ) : (
                        <>Loading...</>
                    )}
                </Box>
            </form>
        </Box>
    );
};

export default EmailForm;
