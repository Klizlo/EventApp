import {Box, Paper, Typography} from "@mui/material";
import {getFullDate} from "../../helpers/EventData";
import {useTranslation} from "react-i18next";

const EventDescription = ({event}) => {

    const { i18n } = useTranslation();

    return (
        <Box component={Paper}
             boxShadow={5}
             sx={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 alignContent: 'center',
                 textAlign: 'center'
             }}>
            <Typography variant='h4' color='#FF8834'>{event.name}</Typography>
            <Typography variant='h5' color='#616062'>
                {getFullDate(event.start_date, event.end_date, i18n.language)} / {event.place}
            </Typography>
        </Box>
    );
}

export default EventDescription;