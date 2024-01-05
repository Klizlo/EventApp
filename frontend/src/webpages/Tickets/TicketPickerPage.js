import {Box} from "@mui/material";
import EventDescription from "../../components/Tickets/EventDescription";
import TicketPicker from "../../components/Tickets/TicketPicker";
import {useState} from "react";

const TicketPickerPage = () => {

    const [tickets, setTickets] = useState([]);

    const event = {
        id: 1,
        name: "Dziunia nie jesteś moim szefem", // nwm jak to się bedzie jeszcze nazywało
        start_date: '05-08-2023',
        end_date: '05-08-2023',
        place: 'Dom Dziuni', //nwm jak to się będzie jeszcze nazywało
        zones: [
            {
                id: 1,
                name: 'Strefa A',
                price: 120.00,
                seats: [
                    {
                        id: 1,
                        number: 1,
                        row: 1,
                        status: 'Free' // 'Reserved', 'Taken'
                    },
                    {
                        id: 2,
                        number: 2,
                        row: 1,
                        status: 'Free' // 'Reserved', 'Taken'
                    },
                    {
                        id: 3,
                        number: 3,
                        row: 1,
                        status: 'Free' // 'Reserved', 'Taken'
                    },
                    {
                        id: 4,
                        number: 4,
                        row: 1,
                        status: 'Free' // 'Reserved', 'Taken'
                    },
                    // {
                    //     id: 5,
                    //     number: 1,
                    //     row: 2,
                    //     status: 'Free' // 'Reserved', 'Taken'
                    // },
                    // {
                    //     id: 6,
                    //     number: 2,
                    //     row: 2,
                    //     status: 'Reserved' // 'Reserved', 'Taken'
                    // },
                    // {
                    //     id: 7,
                    //     number: 3,
                    //     row: 2,
                    //     status: 'Free' // 'Reserved', 'Taken'
                    // },
                    // {
                    //     id: 8,
                    //     number: 4,
                    //     row: 2,
                    //     status: 'Taken' // 'Reserved', 'Taken'
                    // }
                ]
            },
            {
                id: 2,
                name: 'Strefa B',
                price: 90.00,
                seats: [
                    {
                        id: 9,
                        number: 1,
                        row: 1,
                        status: 'Free' // 'Reserved', 'Taken'
                    },
                    {
                        id: 10,
                        number: 2,
                        row: 1,
                        status: 'Free' // 'Reserved', 'Taken'
                    },
                    {
                        id: 11,
                        number: 3,
                        row: 1,
                        status: 'Free' // 'Reserved', 'Taken'
                    },
                    {
                        id: 12,
                        number: 4,
                        row: 1,
                        status: 'Taken' // 'Reserved', 'Taken'
                    },
                    {
                        id: 13,
                        number: 1,
                        row: 2,
                        status: 'Reserved' // 'Reserved', 'Taken'
                    },
                    {
                        id: 14,
                        number: 2,
                        row: 2,
                        status: 'Reserved' // 'Reserved', 'Taken'
                    },
                    {
                        id: 15,
                        number: 3,
                        row: 2,
                        status: 'Free' // 'Reserved', 'Taken'
                    },
                    {
                        id: 16,
                        number: 4,
                        row: 2,
                        status: 'Taken' // 'Reserved', 'Taken'
                    }
                ]
            }
        ]
    };


    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            <EventDescription event={event} />
            <TicketPicker event={event} tickets={tickets} setTickets={setTickets} />
        </Box>
    );
}

export default TicketPickerPage;