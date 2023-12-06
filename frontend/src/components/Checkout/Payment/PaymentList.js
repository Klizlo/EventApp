import {Box, Typography} from "@mui/material";
import PaymentButton from "./PaymentButton";

const PaymentList = ({payments, currentPayment, setPayment}) => {

    const showPayments = payments.map(payment => <PaymentButton payment={payment} currentPayment={currentPayment} setPayment={setPayment}/>);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'stretch',
            textAlign: 'center'
        }}>
            <Typography variant='h5' color='#FF8834'>Payment methods</Typography>
            {showPayments}
        </Box>
    )
}

export default PaymentList;