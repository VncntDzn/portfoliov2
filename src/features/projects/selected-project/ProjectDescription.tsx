import { Box, Typography } from "@mui/material";
import { AnimatedButton } from "common";
import { Fragment } from "react";
import { DetailType } from "../types";
interface ProjectDescriptionProps {
    description: string;
    details: DetailType[];
    path: string;
}
const ProjectDescription = ({
    description,
    details,
    path,
}: ProjectDescriptionProps) => {
    return (
        <Box sx={{ mt: { xs: 2 }, mb: { xs: 5, lg: 10, xl: 15 } }}>
            <Typography
                textAlign="justify"
                lineHeight={2}
                sx={{ textIndent: "2rem" }}
            >
                {description}
            </Typography>
            {details &&
                details.map(({ task, solution, tech_stack }, id) => (
                    <Fragment key={id}>
                        <Typography fontSize={15} fontWeight={700}>
                            Task: &nbsp;
                            <Typography variant="caption" fontSize={15}>
                                {task}
                            </Typography>
                        </Typography>

                        <Typography fontSize={15} fontWeight={700}>
                            Solution: &nbsp;
                            <Typography variant="caption" fontSize={15}>
                                {solution}
                            </Typography>
                        </Typography>

                        <Typography
                            variant="caption"
                            fontSize={15}
                            fontWeight={700}
                        >
                            Tech Stack: &nbsp;
                        </Typography>
                        <Typography variant="caption" fontSize={15}>
                            {tech_stack.join(" / ")}
                        </Typography>
                    </Fragment>
                ))}

            <AnimatedButton
                title="Visit Live Version"
                width={175}
                path={path}
            />
        </Box>
    );
};

export default ProjectDescription;
