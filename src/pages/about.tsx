import { ReturnToHome } from "common";
import { About, PreviousWorks } from "features/about";
import { PageContainer } from "layouts";
import { ReactNode } from "react";
import { NextPageWithLayout } from "./_app";

const AboutVincent: NextPageWithLayout = () => {
    return (
        <>
            <ReturnToHome />
            <About isPaddedContent={false} />
            <PreviousWorks />
        </>
    );
};

AboutVincent.getLayout = function getLayout(page: ReactNode) {
    return (
        <PageContainer title="About" description="My portfolio">
            {page}
        </PageContainer>
    );
};

export default AboutVincent;
