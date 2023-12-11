import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

function EventDetails({event}) {

    const {t} = useTranslation();

    return (
        <Box>
            <Typography variant='h4' fontWeight='bold' color='#FF8834' pb='2%'>{t("event.page.details")}</Typography>
            <Typography variant='body2'>
                {event.description}
            </Typography>
        </Box>
    );
}

export default EventDetails;