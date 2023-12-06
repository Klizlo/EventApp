import {Box, Button, Grid} from "@mui/material";
import ClientPaymentPanel from "./ClientPaymentPanel";

const SummaryPaymentStep = ({client, payment, order, handleBack, handleNext}) => {
    return(
        <Box my={5}>
            <Grid container>
                <Grid item xs={12} md={6} p={2}>

                </Grid>
                <Grid item xs={12} md={6} p={2} order={{xs: 1, md: 2}}>
                    <ClientPaymentPanel client={client} payment={payment} />
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
                    onClick={handleNext}>
                    checkout
                </Button>
            </Box>
        </Box>
    );
}

export default SummaryPaymentStep;