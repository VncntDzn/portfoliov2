import { Box, Typography, Divider } from "@mui/material";

type SectionTitleProps = {
    title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <Box>
            <Typography
                sx={{
                    fontSize: { xs: 35, lg: 55 },
                }}
            >
                {title}
            </Typography>
            <Divider sx={{ borderBottomWidth: "2px" }} />
        </Box>
    );
};

export default SectionTitle;
