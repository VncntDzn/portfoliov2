import { ReturnToHome, SectionTitle } from "common";
import { ProjectDemo, ProjectDescription } from "features/projects";
import { PageContainer } from "layouts";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";

const FeaturedProject: NextPageWithLayout = () => {
    return (
        <>
            <ReturnToHome />
            <SectionTitle title="Hotdog" />
            <ProjectDescription />
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
