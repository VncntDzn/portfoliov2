import { Box } from "@mui/material";
import { SectionTitle } from "common";
import { AnimatedLayout } from "layouts";
import Details from "./introduction/Details";
import Photo from "./introduction/Photo";
interface AboutProps {
    isPaddedContent: boolean;
}
const About = ({ isPaddedContent }: AboutProps) => {
    return (
        <AnimatedLayout isPadded={isPaddedContent} isPrimaryColor={false}>
            <Box
                sx={{
                    padding: { sm: "2rem 5rem", md: 0 },
                }}
            >
                <SectionTitle title="About Vincent" />
                <Box
                    display="flex"
                    gap={5}
                    marginY={2}
                    alignItems="center"
                    sx={{
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    <Photo />
                    <Details />
                </Box>
            </Box>
        </AnimatedLayout>
    );
};

export default About;
