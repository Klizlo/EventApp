import {Box} from "@mui/material";
import CheckoutReservationStepper from "../../components/Checkout/CheckoutReservationStepper";
import CheckoutPaymentStepper from "../../components/Checkout/CheckoutPaymentStepper";
import {useNavigate} from "react-router-dom";

const CheckoutPage = () => {

    const orders = sessionStorage.getItem("order") !== null ? JSON.parse(sessionStorage.getItem("order")) : null;
    const navigate = useNavigate();


    if (orders === null || orders.length === 0) {
        navigate(-1);
    }

    console.log(orders);

    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            { orders.some(order => order.type === "tickets.type.buy") ? (
                <CheckoutPaymentStepper />
            ) : (
                <CheckoutReservationStepper />
            )}
        </Box>
    );
}

export default CheckoutPage;