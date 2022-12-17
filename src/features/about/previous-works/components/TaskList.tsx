import { Box, Typography } from "@mui/material";
import { TaskTypes } from "../types";

interface TaskListProps {
    tasks: TaskTypes[];
}
const TaskList = ({ tasks }: TaskListProps) => {
    return (
        <Box>
            {tasks.map(
                ({ role, responsibilities, projectType, tech_stack }, i) => (
                    <Box key={i}>
                        <Typography>
                            {projectType} - {role}
                        </Typography>
                        <Typography variant="caption">
                            Tech Stack:
                            {tech_stack.join(", ")}
                        </Typography>
                        <Box component="ul">
                            {responsibilities.map((responsibility, i) => (
                                <Box key={i}>
                                    <Typography
                                        variant="subtitle2"
                                        component="li"
                                    >
                                        {responsibility}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )
            )}
        </Box>
    );
};

export default TaskList;
