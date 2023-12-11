import {Box, Button, Grid} from "@mui/material";
import PaymentList from "./PaymentList";
import BillingPanel from "./BillingPanel";
import {useTranslation} from "react-i18next";

const PaymentStep = ({currentPayment, setPayment, client, handleNext, handleBack, setError, setOpenSnackBar}) => {

    const {t} = useTranslation();

    const nextPage = () => {
        if (currentPayment.name !== null) {
            handleNext();
        } else {
            setError(t("checkout.steps.payment.errors.payment"));
            setOpenSnackBar(true);
        }
    }

    const payments = [
        {
            id: 1,
            name: "Blik"
        },
        {
            id: 2,
            name: t("checkout.steps.payment.paymentMethods.card")
        },
        {
            id: 3,
            name: t("checkout.steps.payment.paymentMethods.bank")
        }
    ];

    return (
        <Box>
            <Grid container my={5}>
                <Grid item xs={6}>
                    <PaymentList payments={payments} currentPayment={currentPayment} setPayment={setPayment}/>
                </Grid>
                <Grid item xs={6}>
                    <BillingPanel client={client}/>
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
                    onClick={nextPage}>
                    {t("checkout.steps.payment.next")}
                </Button>
            </Box>
        </Box>
    )
}

export default PaymentStep;