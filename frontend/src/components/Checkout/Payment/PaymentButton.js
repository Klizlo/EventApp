import {Button} from "@mui/material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const PaymentButton = ({payment, currentPayment, setPayment}) => {

    const handleClick = () => {
        setPayment(payment);
    };

    return(
        <Button
            sx={{
                fontWeight: 'bold',
                color: "text.primary",
                borderColor: currentPayment.name === payment.name ? '' : 'text.primary',
                borderStyle: currentPayment.name === payment.name ? '' : 'solid',
                borderWidth: currentPayment.name === payment.name ? '' : '2px',
                backgroundColor: currentPayment.name === payment.name ? '#FF8834' : 'backgroundColor.default',
                height: 50,
                m: 1,
                '&:hover': {
                    backgroundColor: 'action.selected'
                }
            }}
            onClick={handleClick}
            endIcon={currentPayment.name === payment.name && (<CheckCircleRoundedIcon />)}>
            {payment.name}
        </Button>
    )
}

export default PaymentButton;