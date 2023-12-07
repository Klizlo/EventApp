import {Box, Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import EventImage from "../../components/event/EventImage";
import EventDescription from "../../components/event/EventDescription";
import EventShoppingPanel from "../../components/event/EventShoppingPanel";
import EventZoneMap from "../../components/event/EventZoneMap";
import {useTranslation} from "react-i18next";

const EventPage = () => {

    const { t } = useTranslation();

    const event = {
            id: 1,
            name: "Dziunia nie jesteś moim szefem",
            type: 'Coaching',
            description: "Chcesz wiedzieć jak powiedzieć Dziuni, że nie jest Twoim szefem? Bardzo dobrze się składa, " +
                "bo ten panel dyskusyjny jest idealny dla Ciebie. Dziunia już ani razu nie będzie Ci mówiła co masz robić.",
            start_date: '05-08-2023',
            end_date: '05-08-2023',
            place: 'Dom Dziuni',
            image: "/assets/dziunia.jpg",
            numberOfTickets: 1500,
            availableTickets: 100
        };

    return(
        <Box sx={{padding: "2% 0", mt: "50px"}}>
            <Box>
                <Button component={Link} to="/events"
                        disableRipple
                        sx={{
                            color: "black", // color of my soul
                            "&.MuiButtonBase-root:hover": {
                                backgroundColor: 'transparent'
                            }
                        }}>{t("events.title")}</Button>
                >
                <Button component={Link} to={"/events/"+event.id}
                        disableRipple
                        sx={{
                            color: "black", // color of my soul
                            "&.MuiButtonBase-root:hover": {
                                backgroundColor: 'transparent'
                            }
                        }}>{event.name}</Button>
            </Box>
            <Grid container spacing={5} p='2%'>
                <Grid item xs={12} md={8}>
                    <EventImage event={event} />
                </Grid>
                <Grid item xs={12} md={4} order={{ xs: 4, md: 2 }}>
                    <EventZoneMap />
                </Grid>
                <Grid item xs={8} order={{ xs: 2, md: 3 }}>
                    <EventDescription event={event} />
                </Grid>
                <Grid item xs={4} order={{ xs: 3, md: 4 }} >
                    <EventShoppingPanel event={event} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default EventPage;