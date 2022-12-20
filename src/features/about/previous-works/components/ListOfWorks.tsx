import { Box, Typography } from "@mui/material";
import { WORKS_DATA } from "features/about/assets/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { ListOfWorksType } from "../types";
import TaskList from "./TaskList";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        // calculates children gap for animation
        transition: {
            staggerChildren: 1,
        },
    },
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const ListOfWorks = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            flexWrap="wrap"
            component={motion.div}
            variants={container}
            initial="hidden"
            whileInView="show"
        >
            {WORKS_DATA.map(
                ({
                    title,
                    workDate,
                    position,
                    companyLogo,
                    tasks,
                }: ListOfWorksType) => (
                    <Box
                        key={title}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mt={3}
                        sx={{
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { xs: "center", sm: "flex-start" },
                            gap: { xs: 2 },
                        }}
                        component={motion.div}
                        variants={item}
                    >
                        <Box
                            flex="20%"
                            height={150}
                            sx={{
                                position: "relative",
                                cursor: "not-allowed",
                                width: { xs: 150, md: 200 },
                            }}
                        >
                            <Image
                                src={require(`../../assets/images/${companyLogo}`)}
                                layout="fill"
                                alt={title}
                                objectFit="contain"
                            />
                        </Box>
                        <Box flex="80%">
                            <Typography variant="h6" fontWeight={700}>
                                {title}
                            </Typography>
                            <Typography variant="subtitle2">
                                {position}
                            </Typography>
                            <Typography fontStyle="oblique" variant="overline">
                                {workDate}
                            </Typography>
                            <Typography variant="subtitle1" fontWeight={600}>
                                Projects
                            </Typography>
                            <TaskList tasks={tasks} />
                        </Box>
                    </Box>
                )
            )}
        </Box>
    );
};
export default ListOfWorks;
