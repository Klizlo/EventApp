import {Box, Grid, Skeleton} from "@mui/material";
import EventHomePanelSkeleton from "./EventHomePanelSkeleton";


const EventHomeSectionSkeleton = () => {
    return (
        <Box m='2%'>
            <Box sx={{
                display: 'flex',
                flexDirection: "row",
                justifyContent: "space-between",
                mb: '2%'
            }}>
                <Skeleton variant='text' width={200} height={100} />
                <Skeleton variant="text" width={200} height={100} />
            </Box>
            <Grid container spacing={5}>
                {[1,2,3,4].map((number) => (
                    <Grid item xs={6} md={4} lg={3}>
                        <EventHomePanelSkeleton />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default EventHomeSectionSkeleton;