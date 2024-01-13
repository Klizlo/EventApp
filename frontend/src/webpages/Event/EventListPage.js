import {Box, Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import EventListBox from "../../components/event/EventListBox";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {eventService} from "../../services/eventService";

const EventListPage = () => {

    const {t} = useTranslation();

    const [events, setEvents] = useState(null);

    useEffect(() => {
        eventService.getAllEvents()
            .then(response => {
                setEvents(response);
            });
    }, []);

    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            <Box>
                <Button component={Link} to="/events"
                        disableRipple
                        sx={{
                            color: "text.primary", // color of my soul
                            "&.MuiButtonBase-root:hover": {
                                backgroundColor: 'transparent'
                            }
                        }}>{t("events.title")}</Button>
            </Box>
            <Grid container sx={{padding: '2% 0'}}>
                <Grid item xs={12} md={8}>
                    {events && (<EventListBox events={events}/>)}
                </Grid>
                <Grid item xs={12} md={4} orders={{xs: 1, md: 2}}>
                </Grid>
            </Grid>
        </Box>
    );
}

export default EventListPage;