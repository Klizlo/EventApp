import {Box, Button, Typography} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const EventShoppingPanel = ({event}) => {

    const getColor = () => {
        const ratio = event.availableTickets / event.numberOfTickets;
        if (ratio >= 0.5) {
            return 'green';
        } else if (ratio >= 0.3) {
            return 'yellow';
        } else if (ratio > 0) {
            return 'red';
        }

        return 'gray';
    };

    const getAvailability = () => {
        const ratio = event.availableTickets / event.numberOfTickets;
        if (ratio >= 0.5) {
            return 'high';
        } else if (ratio >= 0.3) {
            return 'limited';
        } else if (ratio > 0) {
            return 'little';
        }

        return 'not available';
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Typography mr='10px'>Availability:</Typography>
                <Typography color={getColor} >{getAvailability()}</Typography>
            </Box>
            <Button variant='contained' endIcon={<AddCircleIcon />} sx={{
                bgcolor: '#FF8834',
                fontWeight: 'bold',
                p: '3%',
                '&:hover': {
                    bgcolor: 'black'
                }
            }} disabled={getColor() === 'gray'}>
                { getColor() !== 'gray' ? "select a zone and buy a ticket" : "not available"}
            </Button>
        </Box>
    );

}

export default EventShoppingPanel;