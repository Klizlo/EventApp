import {Box, Typography} from "@mui/material";

const EventImage = ({event}) => {
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
                    Date: {new Date(event.start_date)
                        .toLocaleDateString('default', {day: 'numeric', month: 'long', year: 'numeric'})}
                </Typography>
                <Typography color='white' >
                    Place: {event.place}
                </Typography>
            </Box>
        </Box>
    );
}

export default EventImage;