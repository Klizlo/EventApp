import {Box, Typography} from "@mui/material";
import PaymentButton from "./PaymentButton";
import {useTranslation} from "react-i18next";

const PaymentList = ({payments, currentPayment, setPayment}) => {

    const showPayments = payments.map(payment => <PaymentButton payment={payment} currentPayment={currentPayment}
                                                                setPayment={setPayment}/>);

    const {t} = useTranslation();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'stretch',
            textAlign: 'center'
        }}>
            <Typography variant='h5' color='#FF8834'>{t("checkout.steps.payment.title")}</Typography>
            {showPayments}
        </Box>
    )
}

export default PaymentList;