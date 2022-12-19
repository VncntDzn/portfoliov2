import { Box } from "@mui/material";
import { SectionTitle } from "common";
import { AnimatedLayout } from "layouts";
import Carousel from "./carousel/";

const Projects = () => {
    return (
        <AnimatedLayout isPadded isPrimaryColor>
            <Box display="flex" flexDirection="column">
                <SectionTitle title="Featured Projects" />
                <Carousel />
            </Box>
        </AnimatedLayout>
    );
};

export default Projects;
