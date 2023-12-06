import {Box, Button, Grid} from "@mui/material";
import PaymentList from "./PaymentList";
import BillingPanel from "./BillingPanel";

const PaymentStep = ({currentPayment, setPayment, client, handleNext, handleBack, setError, setOpenSnackBar}) => {

    const nextPage = () => {
        if (currentPayment.name !== null) {
            handleNext();
        } else {
            setError("Please select one of the payment methods");
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
            name: "Credit card"
        },
        {
            id: 3,
            name: "Bank transfer"
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
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    onClick={handleBack}
                    variant="contained"
                    sx={{
                        mt: 3,
                        mb: 2,
                        background: '#FF8834',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                    variant="contained"
                    sx={{
                        mt: 3,
                        mb: 2,
                        background: '#FF8834',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }}
                    onClick={nextPage}>
                    Next
                </Button>
            </Box>
        </Box>
    )
}

export default PaymentStep;