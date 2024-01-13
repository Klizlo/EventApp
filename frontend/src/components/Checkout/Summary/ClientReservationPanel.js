import {Box, Paper, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const ClientReservationPanel = ({client}) => {

    const {t} = useTranslation();

    return (
        <Box component={Paper} p={2} boxShadow={5}>
            <Typography variant="h6" textAlign='center'>{t("checkout.steps.reservation.title")}</Typography>
            <Typography>{client.name + " " + client.surname}</Typography>
            <Typography>{t("profile.panel.phone")}{client.tel_number}</Typography>
            <Typography>{t("profile.panel.email")}{client.email}</Typography>
        </Box>
    );
}

export default ClientReservationPanel;