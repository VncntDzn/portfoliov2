import { Box } from "@mui/material";
import { ReturnToHome, SectionTitle } from "common";
import { ProjectDemo } from "features/projects";
import ProjectDescription from "features/projects/selected-project/ProjectDescription";
import { PageContainer } from "layouts";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";

const FeaturedProject: NextPageWithLayout = () => {
    return (
        <>
            <Box mb={15}>
                <ReturnToHome />
                <SectionTitle title="My Project" />
                <ProjectDescription />
            </Box>
            <ProjectDemo />
        </>
    );
};

FeaturedProject.getLayout = function getLayout(page: ReactNode) {
    return (
        <PageContainer title="My Project" description="Showcase of my projects">
            {page}
        </PageContainer>
    );
};

export default FeaturedProject;
