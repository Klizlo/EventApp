import {Box, Paper, Typography} from "@mui/material";
import {getDays, getMonthWithYear} from "../../helpers/EventData";
import {useTranslation} from "react-i18next";

const EventHomePanel = ({event}) => {

    function showEvent() {
        window.location = '/events/' + event.id;
    }

    const { i18n } = useTranslation();

    return (
        <Box component={Paper} sx={{
            '&:hover': {
                boxShadow: 5
            },
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center'
        }} onClick={showEvent} >
            <Box sx={{
                backgroundImage: `url(${event.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '300px',
                width: '100%'
            }}/>
            <Typography variant="h6" textAlign='center'>
                {event.name}
            </Typography>
            <Typography color='white' sx={{
                backgroundColor: '#FF8834',
                fontWeight: 'bold',
                p: '10px',
                borderRadius: '25px'
            }}>{event.type}</Typography>
            <Typography variant="h5" sx={{
                color: '#FF8834',
                fontWeight: 'bold'
            }}>
                {getDays(event.start_date, event.end_date, i18n.language)}
            </Typography>
            <Typography>
                {getMonthWithYear(event.start_date, event.end_date, i18n.language)}
            </Typography>
            <Typography></Typography>
        </Box>
    );
}

export default EventHomePanel;