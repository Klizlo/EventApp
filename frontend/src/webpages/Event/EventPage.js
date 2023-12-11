import {Box, Button, Grid} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import EventImage from "../../components/event/EventImage";
import EventDetails from "../../components/event/EventDetails";
import EventShoppingPanel from "../../components/event/EventShoppingPanel";
import EventZoneMap from "../../components/event/EventZoneMap";
import {useTranslation} from "react-i18next";

const EventPage = () => {

    const {t} = useTranslation();

    const event = [
        {
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
        },
        {
            id: 2,
            name: "Bal u Kurowej",
            type: 'Event',
            description: "Kurowa urządza coroczny bal na Jej Cześć. Jedyne co musisz zrobić to ubrać się w najlepsze hałchmany" +
                " i wziąć dar dla Jej Najwyższej Mości (pamiętajmy, że Kurowa nie lubi Antonówek). Kurowa zaprasza wszytkie zainteresowane" +
                " kuce do Jej pałacu. Będzie szwecki stół ;)",
            start_date: '04-28-2024',
            end_date: '04-30-2024',
            place: 'Zamek Kurowej',
            image: "/assets/bal_u_kurowej.jpg",
            numberOfTickets: 1500,
            availableTickets: 1500
        }
    ];

    const { id} = useParams();

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
                >
                <Button component={Link} to={"/events/" + event[id - 1].id}
                        disableRipple
                        sx={{
                            color: "text.primary", // color of my soul
                            "&.MuiButtonBase-root:hover": {
                                backgroundColor: 'transparent'
                            }
                        }}>{event[id - 1].name}</Button>
            </Box>
            <Grid container spacing={5} p='2%'>
                <Grid item xs={12} md={8}>
                    <EventImage event={event[id - 1]}/>
                </Grid>
                <Grid item xs={12} md={4} order={{xs: 4, md: 2}}>
                    <EventZoneMap/>
                </Grid>
                <Grid item xs={8} order={{xs: 2, md: 3}}>
                    <EventDetails event={event[id - 1]}/>
                </Grid>
                <Grid item xs={4} order={{xs: 3, md: 4}}>
                    <EventShoppingPanel event={event[id - 1]}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default EventPage;