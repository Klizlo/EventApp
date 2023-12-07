import {Box} from "@mui/material";
import CheckoutPaymentStepper from "../../components/Checkout/CheckoutPaymentStepper";
import CheckoutReservationStepper from "../../components/Checkout/CheckoutReservationStepper";

const CheckoutPage = () => {
    return(
        <Box sx={{padding: "2%", pt: "70px"}}>
            {/*<CheckoutPaymentStepper />*/}
            <CheckoutReservationStepper />
        </Box>
    );
}

export default CheckoutPage;