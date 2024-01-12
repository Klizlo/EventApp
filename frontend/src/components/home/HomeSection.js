import {Box, Button, Grid, Typography} from "@mui/material";
import EventHomePanel from "./EventHomePanel";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HomeSection = ({title, link, events}) => {

    const {t} = useTranslation();

    return (
        <Box m='2%'>
            <Box sx={{
                display: 'flex',
                flexDirection: "row",
                justifyContent: "space-between",
                mb: '2%'
            }}>
                <Typography variant="h5" color="#FF8834" fontWeight="bold">
                    {title}
                </Typography>
                <Button component={Link} to={link} sx={{
                    color: '#FF8834'
                }}>
                    {t("home.showMore")}
                </Button>
            </Box>
            <Grid container spacing={5}>
                {events.slice(0, 4).map((event, index) => (
                    <Grid item xs={6} md={4} lg={3} key={index}>
                        <EventHomePanel event={event}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default HomeSection;