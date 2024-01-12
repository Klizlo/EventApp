import {Box} from "@mui/material";
import EventDescription from "../../components/Tickets/EventDescription";
import TicketPicker from "../../components/Tickets/TicketPicker";
import {useEffect, useState} from "react";
import {eventService} from "../../services/eventService";
import {useParams} from "react-router-dom";

const TicketPickerPage = () => {

    const [tickets, setTickets] = useState([]);

    const [event, setEvent] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        eventService.getEventById(id)
            .then(response => {
                console.log(response);
                setEvent(response);
            });
    }, []);


    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            {event && (
                <>
                    <EventDescription event={event} />
                    <TicketPicker event={event} tickets={tickets} setTickets={setTickets} />
                </>
            )}
        </Box>
    );
}

export default TicketPickerPage;