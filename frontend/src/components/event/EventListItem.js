import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import Link from '@mui/material/Link';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {getFullDate} from "../../helpers/EventData";

const EventListItem = ({event}) => {
    return (
        <Box component={Paper} sx={{
            mt: '2%',
            mb: '2%'
        }}>
            <Grid container>
                <Grid item xs={3} sx={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: 'cover'
                }} />
                <Grid item xs={9} sx={{
                    p: '2%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <Typography variant='h5' color='#FF8834'>{event.name}</Typography>
                        <Typography>{event.type}</Typography>
                        <Typography>{getFullDate(event.start_date, event.end_date)}</Typography>
                        <div style={{overflow: "hidden", textOverflow: "ellipsis", width: '22rem'}}>
                            <Typography noWrap>{event.description}</Typography>
                        </div>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Button endIcon={<AddCircleIcon />} sx={{
                            color: 'white',
                            backgroundColor: '#FF8834',
                            '&:hover': {
                                backgroundColor: 'black'
                            }
                        }}>
                            Buy ticket
                        </Button>
                        <Link href='#' sx={{
                            color: 'black'
                        }}>
                            Details>>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default EventListItem;