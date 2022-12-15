import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { WORKS_DATA } from "../../data";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        // calculates children gap for animation
        transition: {
            staggerChildren: 0.8,
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
                ({ title, workDate, position, description, companyLogo }) => (
                    <Box
                        key={title}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        my={3}
                        sx={{
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { xs: "center", sm: "flex-start" },
                            gap: { xs: 2, md: 0 },
                        }}
                        component={motion.div}
                        variants={item}
                    >
                        <Box
                            height={150}
                            sx={{
                                position: "relative",
                                cursor: "not-allowed",
                                width: { xs: 150, md: 200 },
                            }}
                        >
                            <Image
                                src={require(`../../assets/${companyLogo}`)}
                                layout="fill"
                                alt="Cognizant"
                                objectFit="contain"
                            />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={700}>
                                {title}
                            </Typography>
                            <Typography variant="subtitle2">
                                {position}
                            </Typography>
                            <Typography fontStyle="oblique" variant="overline">
                                {workDate}
                            </Typography>
                            <Typography
                                textAlign="justify"
                                sx={{
                                    textIndent: "2rem",
                                    marginTop: 1,
                                }}
                            >
                                {description}
                            </Typography>
                            <Typography component="li">
                                {description}
                            </Typography>
                            <Typography component="li">
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                )
            )}
        </Box>
    );
};
export default ListOfWorks;
