import {Box, Typography} from "@mui/material";

function EventDescription({event}) {
    return (
        <Box>
            <Typography variant='h4' fontWeight='bold' color='#FF8834' pb='2%'>Details</Typography>
            <Typography variant='body2'>
                {event.description}
            </Typography>
        </Box>
    );
}

export default EventDescription;