import { Box } from "@mui/material";
import { SectionTitle } from "common";
import { AnimatedLayout } from "layouts";
import EmailForm from "./components/EmailForm";
import LottieComponent from "./components/LottieComponent";

const Contact = () => {
    return (
        <AnimatedLayout isPadded isPrimaryColor={false}>
            <Box
                id="contact"
                width="100%"
                sx={{
                    padding: { sm: "2rem 5rem", md: 0 },
                }}
            >
                <SectionTitle title="Connect with Vincent" />
                <Box
                    display="flex"
                    gap={5}
                    marginTop={3}
                    flexDirection="row-reverse"
                    alignItems="center"
                >
                    <EmailForm />
                    <LottieComponent />
                </Box>
            </Box>
        </AnimatedLayout>
    );
};

export default Contact;
