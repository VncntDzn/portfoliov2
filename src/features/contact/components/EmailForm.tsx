/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import {
    Box,
    Button,
    IconButton,
    Snackbar,
    TextField,
    useTheme,
} from "@mui/material";
import axios from "axios";
import { ChangeEvent, useState } from "react";

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

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };
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
                setForm({
                    email: "",
                    subject: "",
                    name: "",
                    message: "",
                });
                setError({ open: true, message: "Sent!" });
            }
        } catch (error) {
            setLoading(false);
            setError({ open: true, message: "Something went wrong" });
        }
    };

    return (
        <>
            {error.open && (
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={error.open}
                    autoHideDuration={5000}
                    onClose={() => setError({ ...error, open: false })}
                    message={error.message}
                    ContentProps={{
                        style: {
                            backgroundColor:
                                error.message === "Sent!" ? "#53e01f" : "red",
                            color: "white",
                        },
                    }}
                    action={
                        <IconButton
                            onClick={() => setError({ ...error, open: false })}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                />
            )}

            <Box flex="60%">
                <form onSubmit={handleSubmitEmail} method="post">
                    <TextField
                        name="name"
                        placeholder="Full name"
                        required
                        fullWidth
                        type="text"
                        value={form.name}
                        onChange={handleOnChange}
                        sx={{
                            my: 1,
                        }}
                    />
                    <TextField
                        name="email"
                        placeholder="Email"
                        required
                        fullWidth
                        type="email"
                        value={form.email}
                        onChange={handleOnChange}
                        sx={{
                            my: 1,
                        }}
                    />
                    <TextField
                        name="subject"
                        value={form.subject}
                        placeholder="Subject"
                        required
                        fullWidth
                        type="text"
                        onChange={handleOnChange}
                        sx={{
                            my: 1,
                        }}
                    />
                    <Box
                        name="message"
                        value={form.message}
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
                        onChange={handleOnChange}
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
        </>
    );
};

export default EmailForm;
