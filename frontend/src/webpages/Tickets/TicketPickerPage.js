import {Alert, Box, Snackbar, Typography} from "@mui/material";
import EventDescription from "../../components/Tickets/EventDescription";
import TicketPicker from "../../components/Tickets/TicketPicker";
import {useEffect, useState} from "react";
import {eventService} from "../../services/eventService";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const TicketPickerPage = () => {

    const [tickets, setTickets] = useState([]);

    const [event, setEvent] = useState(null);

    const [openAlert, setOpenAlert] = useState(false);

    const {id} = useParams();

    const {t} = useTranslation();

    useEffect(() => {
        eventService.getEventById(id)
            .then((response) => {
                setEvent(response);
            }, (error) => setOpenAlert(true));
    }, []);


    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            {event && (
                <>
                    <EventDescription event={event} />
                    {event.zones.flatMap(zone => zone.seats).some(seat => seat.status === 'Free') ? (
                        <TicketPicker event={event} tickets={tickets} setTickets={setTickets} />
                    ) : (
                        <Box textAlign='center' sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography variant='h5'>{t("tickets.noTickets")}</Typography>
                        </Box>
                    )}

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

export default TicketPickerPage;