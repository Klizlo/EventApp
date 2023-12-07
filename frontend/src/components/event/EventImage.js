import {Box, Typography} from "@mui/material";
import {getFullDate} from "../../helpers/EventData";
import {useTranslation} from "react-i18next";

const EventImage = ({event}) => {

    const { t } = useTranslation();

    return (
        <Box sx={{
            backgroundImage: `url(${event.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'start',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                backgroundColor: 'black',
                opacity: '80%',
                maxWidth: '70%',
                p: '25px',
                borderRadius: '0 0 25px 0'
            }}>
                <Typography variant='h5' color='white'>
                    {event.name}
                </Typography>
            </Box>
            <Box sx={{
                backgroundColor: 'black',
                opacity: '80%',
                maxWidth: '70%',
                p: '20px',
                borderRadius: '0 25px 0 0'
            }}>
                <Typography color='white' >
                    {t("event.date.name")}: {getFullDate(event.start_date, event.end_date)}
                </Typography>
                <Typography color='white' >
                    {t("event.place")}: {event.place}
                </Typography>
            </Box>
        </Box>
    );
}

export default EventImage;