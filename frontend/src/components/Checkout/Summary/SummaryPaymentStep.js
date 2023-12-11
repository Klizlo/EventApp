import {Box, Button, Grid} from "@mui/material";
import ClientPaymentPanel from "./ClientPaymentPanel";
import {useTranslation} from "react-i18next";

const SummaryPaymentStep = ({client, payment, order, handleBack, handleNext}) => {

    const {t} = useTranslation();

    return (
        <Box my={5}>
            <Grid container>
                <Grid item xs={12} md={6} p={2}>

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
                    onClick={handleNext}>
                    {t("checkout.steps.summary.payment.checkout")}
                </Button>
            </Box>
        </Box>
    );
}

export default SummaryPaymentStep;