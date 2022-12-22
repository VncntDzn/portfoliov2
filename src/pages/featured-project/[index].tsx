import { ReturnToHome, SectionTitle } from "common";
import { ProjectDemo, ProjectDescription } from "features/projects";
import projects from "features/projects/assets/data";
import { ProjectType } from "features/projects/types";
import { PageContainer } from "layouts";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";

const FeaturedProject: NextPageWithLayout = () => {
    const { query } = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedProject, setSelectedProject] = useState<ProjectType>();

    useEffect(() => {
        if (query.index) {
            const foundProject = projects.find(
                project => project.id === query.index
            );

            setSelectedProject(foundProject);
        }
    }, [query.index]);

    if (!selectedProject) return null;
    return (
        <>
            <ReturnToHome />
            <SectionTitle title={selectedProject.title} />
            <ProjectDescription
                details={selectedProject.details}
                description={selectedProject.description}
            />
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
