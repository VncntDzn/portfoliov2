import { Box } from "@mui/material";
import { SectionTitle } from "common";
import { AnimatedLayout } from "layouts";
import Carousel from "./carousel/";
interface ProjectProps {
    isPaddedContent: boolean;
    isPrimaryColorContent: boolean;
}
const Projects = ({ isPaddedContent, isPrimaryColorContent }: ProjectProps) => {
    return (
        <AnimatedLayout
            isPadded={isPaddedContent}
            isPrimaryColor={isPrimaryColorContent}
        >
            <Box id="projects" display="flex" flexDirection="column">
                <SectionTitle title="Featured Projects" />
                <Carousel />
            </Box>
        </AnimatedLayout>
    );
};

export default Projects;
