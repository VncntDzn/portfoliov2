import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { WORKS_DATA } from "../data";

const PreviousWorks = () => {
    return (
        <>
            <Typography variant="h3">My Journey</Typography>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={"column"}
                flexWrap="wrap"
            >
                {WORKS_DATA.map(
                    ({ title, workDate, position, description }) => (
                        <Box
                            key={title}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 2,
                            }}
                        >
                            <Box
                                height={150}
                                width={150}
                                sx={{ position: "relative", flex: "20%" }}
                            >
                                <Image
                                    src={require("../../../assets/cognizant.jpg")}
                                    layout="fill"
                                    alt="Cognizant"
                                />
                            </Box>
                            <Box
                                sx={{
                                    flex: "80%",
                                }}
                            >
                                <Typography variant="h5" fontWeight={700}>
                                    {title}
                                </Typography>
                                <Typography>{position}</Typography>{" "}
                                <Typography>{workDate}</Typography>
                                <Typography
                                    paragraph
                                    textAlign="justify"
                                    sx={{
                                        textIndent: "2rem",
                                        marginTop: 1,
                                    }}
                                >
                                    {description}
                                    <ul>
                                        <li>{description}</li>
                                        <li>{description}</li>
                                    </ul>
                                </Typography>
                            </Box>
                        </Box>
                    )
                )}
            </Box>
        </>
    );
};

PreviousWorks.propTypes = {};

export default PreviousWorks;
