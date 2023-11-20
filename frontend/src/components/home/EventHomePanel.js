import {Box, Paper, Typography} from "@mui/material";

const EventHomePanel = ({event}) => {

    const startDate = new Date(event.start_date);
    const endDate = new Date(event.end_date);

    function showEvent() {
        window.location = '/events/' + event.id;
    }

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
                {startDate.getTime() !== endDate.getTime() ? startDate.getDate() + '-' + endDate.getDate() : startDate.getDate()}
            </Typography>
            <Typography>
                {startDate.toLocaleString('default', {month: 'long'})}
                {' ' + startDate.getFullYear()}
            </Typography>
            <Typography></Typography>
        </Box>
    );
}

export default EventHomePanel;