import {Box, Paper, Skeleton} from "@mui/material";

const EventHomePanelSkeleton = () => {
    return (
        <Box component={Paper} sx={{
            '&:hover': {
                boxShadow: 5
            },
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <Skeleton variant="rectangular" height={300} width="100%"/>
            <Skeleton variant="text" width="90%" height={60}/>
            <Skeleton variant="rectangular" sx={{
                p: '10px',
                borderRadius: '25px',
                width: '50%'
            }}/>
            <Skeleton variant="text" width="40%" height={50}/>
            <Skeleton variant="text" width="60%" height={40}/>
        </Box>
    );
}

export default EventHomePanelSkeleton;