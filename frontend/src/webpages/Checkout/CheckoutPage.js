import {Box} from "@mui/material";
import CheckoutReservationStepper from "../../components/Checkout/CheckoutReservationStepper";

const CheckoutPage = () => {
    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            {/*<CheckoutPaymentStepper />*/}
            <CheckoutReservationStepper/>
        </Box>
    );
}

export default CheckoutPage;