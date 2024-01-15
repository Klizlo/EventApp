import {Box, Button, Grid} from "@mui/material";
import ClientReservationPanel from "./ClientReservationPanel";
import {useTranslation} from "react-i18next";
import OrderList from "./OrderList";
import {orderService} from "../../../services/orderService";

const SummaryReservationStep = ({client, order, setOrder, handleBack}) => {

    const {t} = useTranslation();

    const handleCheckout = () => {
        const validOrder = orderService.makeOrderValid(order, client, null);
        orderService.order(validOrder)
            .then(response => {
                sessionStorage.removeItem("order");
                window.location.href = '/confirmation';
            });
    };

    return (
        <Box my={5}>
            <Grid container>
                <Grid item xs={12} md={6} p={2}>
                    <OrderList order={order} setOrder={setOrder} />
                </Grid>
                <Grid item xs={12} md={6} p={2} order={{xs: 1, md: 2}}>
                    <ClientReservationPanel client={client}/>
                </Grid>
            </Grid>
            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                <Button
                    onClick={handleBack}
                    variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        mt: 3,
                        mb: 2,
                        background: '#FF8834',
                        '&:hover': {
                            backgroundColor: 'action.active'
                        }
                    }}
                >
                    {t("checkout.steps.summary.back")}
                </Button>
                <Box sx={{flex: '1 1 auto'}}/>
                <Button
                    variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        mt: 3,
                        mb: 2,
                        background: '#FF8834',
                        '&:hover': {
                            backgroundColor: 'action.active'
                        }
                    }}
                    onClick={handleCheckout}>
                    {t("checkout.steps.summary.reservation.reserve")}
                </Button>
            </Box>
        </Box>
    );
}

export default SummaryReservationStep;