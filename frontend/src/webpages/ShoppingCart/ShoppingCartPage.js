import {Box, Paper, Typography} from "@mui/material";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import ShoppingCartList from "../../components/ShoppingCart/ShoppingCartList";

const ShoppingCartPage = () => {

    const [order, setOrder] = useState(
        sessionStorage.getItem('order') !== null ?
            JSON.parse(sessionStorage.getItem('order')) :
            null);

    const { t } = useTranslation();

    return (
        <Box sx={{padding: "2%", pt: "80px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box component={Paper} width='80vw' height='80vh' boxShadow={5} m={5}>
                {order !== null && order.length > 0 ? (
                    <ShoppingCartList order={order} setOrder={setOrder} />
                ) : (
                    <Box textAlign='center' sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Typography variant='h5'>{t("cart.noTickets")}</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default ShoppingCartPage;