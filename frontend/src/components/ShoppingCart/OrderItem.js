import {Box, Grid, IconButton, ListItem, Tooltip, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useTranslation} from "react-i18next";
import Countdown from "react-countdown";

const OrderItem = ({orderItem, order, setOrder}) => {

    const { t } = useTranslation();

    const countdownRender = ({minutes, seconds, }) => {

        return (
            <Typography>{minutes > 9 ? minutes : "0" + minutes}:{seconds > 9 ? seconds : "0" + seconds}</Typography>
        );

    }

    const handleComplete = () => {
        order = order
            .filter(orderToEdit => {

                const orderTime = (new Date(orderToEdit.time)).getTime();
                const now = ((new Date()).getTime() - 15*60*1000);

                return orderTime >= now;
            });
        sessionStorage.setItem("order", JSON.stringify(order));

        setOrder(order);
    };

    const removeOrderItem = () => {
        order = order
            .filter(order1 => new Date(order1.time).getTime() !== new Date(orderItem.time).getTime());

        sessionStorage.setItem("order", JSON.stringify(order));

        setOrder(order);
    };

    return (
        <ListItem>
            <Box width='100%'>
                <Grid container>
                    <Grid item xs={10}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box sx={{
                                    borderBottom: '#616062 solid 2px'
                                }}>
                                    <Typography variant='h5'>{orderItem.event}</Typography>
                                    <Box sx={{ display: 'flex', alignItem: 'center', alignContent: 'center'}}>
                                        <Typography>{t("cart.ticket.remaining")}</Typography>
                                        <Countdown
                                            renderer={countdownRender}
                                            onComplete={handleComplete}
                                            date={(new Date(orderItem.time)).getTime() + 15 * 60 * 1000}/>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                {orderItem.tickets.map(ticket => <TicketInfo ticket={ticket} type={orderItem.type}/>)}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}>
                            <Tooltip title={t("cart.delete")}>
                                <IconButton onClick={removeOrderItem}>
                                    <DeleteIcon color='error' />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ListItem>
    );
}

const TicketInfo =({ticket, type}) => {

    const { t } = useTranslation();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography>{t("cart.ticket.zone", {zone: ticket.zone.name})}</Typography>
            <Typography>{t("cart.ticket.row", {row: ticket.seat.row})}</Typography>
            <Typography>{t("cart.ticket.seat", {seat: ticket.seat.number})}</Typography>
            <Typography>{t("cart.ticket.price", {price: type === "tickets.type.buy" ? ticket.zone.price : t("tickets.type.reservation")})}</Typography>
        </Box>
    );
}

export default OrderItem;