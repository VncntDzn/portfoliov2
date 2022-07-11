import { Box } from "@mui/material";
import Head from "next/head";
import React, { ReactNode } from "react";

type PageProps = {
    children: ReactNode;
    props?: [];
    title?: string;
};

const PageContainer = ({ title = "", children, ...props }: PageProps) => {
    return (
        <Box>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box {...props} /* backgroundColor="#2C3333" */>{children}</Box>
        </Box>
    );
};

export default PageContainer;
