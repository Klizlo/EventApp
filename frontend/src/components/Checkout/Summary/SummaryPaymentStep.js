import {Box, Button, Grid} from "@mui/material";
import ClientPaymentPanel from "./ClientPaymentPanel";
import {useTranslation} from "react-i18next";
import OrderList from "./OrderList";
import {orderService} from "../../../services/orderService";

const SummaryPaymentStep = ({client, payment, order, setOrder, handleBack, handleNext}) => {

    const {t} = useTranslation();

    const buy = () => {
        const validOrder = orderService.makeOrderValid(order, client, payment);
        orderService.order(validOrder)
            .then(response => {
                console.log(response);
                localStorage.setItem("order", null);
                handleNext();
            });
    }

    return (
        <Box my={5}>
            <Grid container>
                <Grid item xs={12} md={6} p={2}>
                    <OrderList order={order} setOrder={setOrder} />
                </Grid>
                <Grid item xs={12} md={6} p={2} order={{xs: 1, md: 2}}>
                    <ClientPaymentPanel client={client} payment={payment}/>
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
                    {t("checkout.steps.payment.back")}
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
                    onClick={() => buy()}>
                    {t("checkout.steps.summary.payment.checkout")}
                </Button>
            </Box>
        </Box>
    );
}

export default SummaryPaymentStep;