import {
    Box, Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Grid,
    List,
    ListItem,
    Typography
} from "@mui/material";
import Countdown from "react-countdown";
import {useTranslation} from "react-i18next";
import {useState} from "react";

const OrderItem = ({orderItem, order, setOrder, setOpen}) => {

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

        if (order.length === 0) {
            setOpen(true);
        }
    };

    return (
        <ListItem>
            <Box width='100%'>
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

const OrderList = ({order, setOrder}) => {

    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    if (order.length !== 0) {
        const editedOrder = order
            .filter(orderToEdit => {

                const orderTime = (new Date(orderToEdit.time)).getTime();
                const now = ((new Date()).getTime() - 15*60*1000);

                return orderTime >= now;
            });
        sessionStorage.setItem("order", JSON.stringify(order));

        if(editedOrder.length !== order.length){
            setOrder(editedOrder);
        }

        if (order.length === 0) {
            setOpen(true);
        }
    }

    function goToHome() {
        window.location.href = '/';
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "stretch",
            alignContent: 'stretch',
            height: '100%'
        }}>
            <Box sx={{
                maxHeight: '60vh',
                overflow: 'auto'
            }}>
                <List>
                    {order.map((orderItem, index) => (
                        <>
                            <OrderItem orderItem={orderItem} order={order} setOrder={setOrder} setOpen={setOpen}/>
                            {index + 1 < order.length && (
                                <Divider orientation='horizontal' />
                            )}
                        </>
                    ))}
                </List>
            </Box>
            { order.some(orderItem => orderItem.type === "tickets.type.buy") && (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    pt: 2,
                    px: 2,
                    borderTop: '#616062 solid 2px'
                }}>
                    <Box sx={{flex: '1 1 auto'}}/>
                    <Typography variant='h5'>{t("cart.total", {price: order
                            .filter(orderItem => orderItem.type !== "tickets.type.reservation")
                            .flatMap(orderItem => orderItem.tickets)
                            .map(ticket => ticket.price)
                            .reduce((acc, value) => acc + value, 0)})}</Typography>
                </Box>
            )}
            <Dialog
                open={open}>
                <DialogTitle>
                    {t("checkout.steps.summary.dialog.title")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t("checkout.steps.summary.dialog.content")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained"
                            sx={{
                                fontWeight: 'bold',
                                mt: 3,
                                mb: 2,
                                background: '#FF8834',
                                '&:hover': {
                                    backgroundColor: 'action.active'
                                }
                            }}
                            onClick={goToHome}>
                        {t("checkout.steps.summary.dialog.button")}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default OrderList