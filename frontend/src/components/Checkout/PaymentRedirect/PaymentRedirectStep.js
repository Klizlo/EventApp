import {Box, Button, Typography} from "@mui/material";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {useTranslation} from "react-i18next";

const PaymentRedirectStep = () => {

    const {t} = useTranslation();

    const redirectToPayment = () => {
        window.location.href = '/confirmation'
    };

    return (
        <Box sx={{
            p: '2%',
            maxHeight: '100vh',
            width: '100vw',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <Typography variant="h4" mb={2}>{t("checkout.steps.redirect.redirect")}</Typography>
            <CountdownCircleTimer
                isPlaying
                duration={15}
                colors={['#28FF08', '#91FF05', '#F3FF00', '#FF9500', '#FF4C05', '#FF0E00']}
                colorsTime={[15, 12, 9, 6, 3, 0]}
                onComplete={redirectToPayment}
            >
                {({remainingTime, color}) => (
                    <Box>
                        <Typography>{t("checkout.steps.redirect.countdown.remaining")}</Typography>
                        <Typography variant='h3' color={color}>{remainingTime}</Typography>
                        <Typography>{t("checkout.steps.redirect.countdown.seconds")}</Typography>
                    </Box>
                )}
            </CountdownCircleTimer>
            <Button
                variant='contained'
                sx={{
                    fontWeight: 'bold',
                    mt: 2,
                    background: '#FF8834',
                    '&:hover': {
                        backgroundColor: 'action.active'
                    }
                }}
                onClick={redirectToPayment}
            >
                {t("checkout.steps.redirect.button")}
            </Button>
        </Box>
    );
}

export default PaymentRedirectStep;