import {Box, Paper, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const ClientPaymentPanel = ({client, payment}) => {

    const {t} = useTranslation();

    return (
        <Box component={Paper} p={2} boxShadow={5}>
            <Typography variant="h6" textAlign='center'>{t("checkout.steps.billing.title")}</Typography>
            <Typography>{client.name + " " + client.surname}</Typography>
            <Typography>{t("profile.panel.phone")}{client.tel_number}</Typography>
            <Typography>{t("profile.panel.email")}{client.email}</Typography>
            <Typography>{t("checkout.steps.summary.address")}</Typography>
            <Typography>{client.street}</Typography>
            <Typography>{client.city}</Typography>
            <Typography>{client.postalCode}</Typography>
            <Typography>{client.country}</Typography>
            <Typography variant="h6" textAlign='center'>{t("checkout.steps.summary.paymentMethod")}</Typography>
            <Typography>{payment.name}</Typography>
        </Box>
    );
}

export default ClientPaymentPanel;