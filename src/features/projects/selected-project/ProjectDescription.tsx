import { Box, Typography } from "@mui/material";
import { AnimatedButton } from "common";
import { Fragment } from "react";
import { DetailType } from "../types";
interface ProjectDescriptionProps {
    description: string;
    details: DetailType[];
}
const ProjectDescription = ({
    description,
    details,
}: ProjectDescriptionProps) => {
    return (
        <Box sx={{ mt: { xs: 5 }, mb: { xs: 5, lg: 15 } }}>
            <Typography>{description}</Typography>
            {details &&
                details.map(({ task, solution, tech_stack }, id) => (
                    <Fragment key={id}>
                        <Typography>Task: {task}</Typography>
                        <Typography>Solution: {solution} </Typography>
                        <Typography variant="h6" fontWeight={700}>
                            Tech Stack:{" "}
                        </Typography>
                        <Typography variant="caption">
                            {tech_stack.join(" / ")}
                        </Typography>
                    </Fragment>
                ))}

            <AnimatedButton title="Visit Live Version" width={175} path="/" />
        </Box>
    );
};

export default ProjectDescription;
