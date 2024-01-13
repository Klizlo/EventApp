import {Alert, Box, Button, Grid, Snackbar} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import EventImage from "../../components/event/EventImage";
import EventDetails from "../../components/event/EventDetails";
import EventShoppingPanel from "../../components/event/EventShoppingPanel";
import EventZoneMap from "../../components/event/EventZoneMap";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {eventService} from "../../services/eventService";

const EventPage = () => {

    const {t} = useTranslation();

    const { id} = useParams();

    const [event, setEvent] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        eventService.getEventById(id)
            .then((response) => {
                console.log(response);
                setEvent(response);
            }, (error) => setOpenAlert(true));
    }, []);

    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            {event && (
                <>
                    <Box>
                        <Button component={Link} to="/events"
                                disableRipple
                                sx={{
                                    color: "text.primary", // color of my soul
                                    "&.MuiButtonBase-root:hover": {
                                        backgroundColor: 'transparent'
                                    }
                                }}>{t("events.title")}</Button>
                        >
                        <Button component={Link} to={"/events/" + event.id}
                                disableRipple
                                sx={{
                                    color: "text.primary", // color of my soul
                                    "&.MuiButtonBase-root:hover": {
                                        backgroundColor: 'transparent'
                                    }
                                }}>{event.title}</Button>
                    </Box>
                    <Grid container spacing={5} p='2%'>
                        <Grid item xs={12} md={8}>
                            <EventImage event={event}/>
                        </Grid>
                        <Grid item xs={12} md={4} order={{xs: 4, md: 2}}>
                            <EventZoneMap/>
                        </Grid>
                        <Grid item xs={8} order={{xs: 2, md: 3}}>
                            <EventDetails event={event}/>
                        </Grid>
                        <Grid item xs={4} order={{xs: 3, md: 4}}>
                            <EventShoppingPanel event={event}/>
                        </Grid>
                    </Grid>
                </>
            )}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={openAlert}
                onClose={() => setOpenAlert(false)}
                autoHideDuration={6000}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    {t("errors.event")}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default EventPage;