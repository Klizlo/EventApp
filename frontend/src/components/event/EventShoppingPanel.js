import {Box, Button, Typography} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useTranslation} from "react-i18next";

const EventShoppingPanel = ({event}) => {

    const {t} = useTranslation();

    const availableTickets = event.zones.flatMap(zone => zone.seats).filter(seat => seat.status === 'Free');
    const allTickets = event.zones.flatMap(zone => zone.seats);

    const getColor = () => {
        const ratio = availableTickets.length / allTickets.length;
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
        const ratio = availableTickets.length / allTickets.length;
        if (ratio >= 0.5) {
            return t("event.page.availability.high");
        } else if (ratio >= 0.3) {
            return t("event.page.availability.limited");
        } else if (ratio > 0) {
            return t("event.page.availability.little");
        }

        return t("event.page.availability.notAvailable");
    };

    const buyTicket = () => {
        window.location.href += '/tickets';
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
                <Typography mr='10px'>{t("event.page.availability.name")}:</Typography>
                <Typography color={getColor}>{getAvailability()}</Typography>
            </Box>
            <Button
                variant='contained'
                endIcon={<AddCircleIcon/>}
                sx={{
                    bgcolor: '#FF8834',
                    fontWeight: 'bold',
                    p: '3%',
                    '&:hover': {
                        bgcolor: 'action.active'
                    }
                }}
                disabled={getColor() === 'gray'}
                onClick={buyTicket}
            >
                {getColor() !== 'gray' ? t("event.page.buy.select") : t("event.page.buy.notAvailable")}
            </Button>
        </Box>
    );

}

export default EventShoppingPanel;