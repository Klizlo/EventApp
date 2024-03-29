import {Box, Paper, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const BillingPanel = ({client}) => {

    const {t} = useTranslation();

    return (
        <Box mx={5} component={Paper} boxShadow={5} p={3}>
            <Typography variant='h6'>{t("checkout.steps.billing.title")}</Typography>
            <Box width="100%">
                <Typography>{client.name + " " + client.surname}</Typography>
                <Typography>{t("profile.panel.phone")}{client.tel_number}</Typography>
                <Typography>{t("profile.panel.email")}{client.email}</Typography>
                <Typography>{t("profile.panel.street")}{client.street}</Typography>
                <Typography>{client.postalCode + " " + client.city}</Typography>
                <Typography>{client.country}</Typography>
            </Box>
        </Box>
    );

}

export default BillingPanel;