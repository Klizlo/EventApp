import {Box, Button, Divider, List, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import OrderItem from "./OrderItem";

const ShoppingCartList = ({order, setOrder}) => {

    const { t } = useTranslation();

    const goToCheckout = () => {
        window.location.href = '/checkout';
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "stretch",
            alignContent: 'stretch',
            height: '100%'
        }}>
            <Box sx={{
                height: "80%",
                overflow: 'auto'
            }}>
                <List>
                    {order.map((orderItem, index) => (
                        <>
                            <OrderItem orderItem={orderItem} order={order} setOrder={setOrder} />
                            {index + 1 < order.length && (
                                <Divider orientation='horizontal' />
                            )}
                        </>
                    ))}
                </List>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                pt: 2,
                px: 2,
                borderTop: '#616062 solid 2px'
            }}>
                <Box sx={{flex: '1 1 auto'}}/>
                <Typography variant='h5'>{t("cart.total", {price: order
                        .filter(orderItem => orderItem.type !== "tickets.type.reservation")
                        .flatMap(orderItem => orderItem.tickets)
                        .map(ticket => ticket.price)
                        .reduce((acc, value) => acc + value, 0)})}</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2, px: 2}}>
                <Box sx={{flex: '1 1 auto'}}/>
                <Button
                    onClick={goToCheckout}
                    variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        mt: 3,
                        mb: 2,
                        background: '#FF8834',
                        '&:hover': {
                            backgroundColor: 'action.active'
                        }
                    }}>
                    {t("cart.checkout")}
                </Button>
            </Box>
        </Box>
    );
}

export default ShoppingCartList;