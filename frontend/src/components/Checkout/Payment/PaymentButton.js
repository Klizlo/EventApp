import {Button} from "@mui/material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const PaymentButton = ({payment, currentPayment, setPayment}) => {

    const handleClick = () => {
        setPayment(payment);
    };

    return(
        <Button
            sx={{
                color: currentPayment.name === payment.name ? 'white' : 'black',
                border: currentPayment.name === payment.name ? '' : '2px black solid',
                backgroundColor: currentPayment.name === payment.name ? '#FF8834' : 'white',
                height: 50,
                m: 1,
                '&:hover': {
                    backgroundColor: currentPayment.name === payment.name ? 'black' : ''
                }
            }}
            onClick={handleClick}
            endIcon={currentPayment.name === payment.name && (<CheckCircleRoundedIcon />)}>
            {payment.name}
        </Button>
    )
}

export default PaymentButton;