import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {getFullDate} from "../../helpers/EventData";
import {useTranslation} from "react-i18next";
import Link from "@mui/material/Link";

const EventListItem = ({event}) => {

    const {t} = useTranslation();

    return (
        <Box component={Paper} sx={{
            mt: '2%',
            mb: '2%'
        }}>
            <Grid container>
                <Grid item xs={3} sx={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: 'cover'
                }}/>
                <Grid item xs={9} sx={{
                    p: '2%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Box>
                                <Typography variant='h5' color='#FF8834'>{event.name}</Typography>
                                <Typography>{event.type}</Typography>
                                <Typography>{getFullDate(event.start_date, event.end_date)}</Typography>
                                <Box sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    width: {xs: '50vw', md: '30vw'}
                                }}>
                                    <Typography noWrap>{event.description}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: {xs: 'row', md: 'column'},
                                alignContent: 'center',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                p: 2
                            }}>
                                <Button variant="contained" endIcon={<AddCircleIcon/>} sx={{
                                    fontWeight: 'bold',
                                    backgroundColor: '#FF8834',
                                    '&:hover': {
                                        backgroundColor: 'action.active'
                                    }
                                }}>
                                    {t("events.buy")}
                                </Button>
                                <Link href='#' sx={{
                                    color: 'text.primary',
                                    m: 2
                                }}>
                                    {t("events.details")}>>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default EventListItem;