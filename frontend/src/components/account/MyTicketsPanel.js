import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const MyTicketsPanel = () => {

    const { t } = useTranslation();

  return (
      <Box sx={{
          my: 4,
          mx: 1,
          px: 2,
          py: 4,
          display: 'flex',
          flexDirection: 'column'
      }}>
          <Typography variant="h5" color="#FF8834" fontWeight="bold" mb="2%">{t("profile.tickets.title")}</Typography>
          <Button component={Link} to=""
                  sx={{
                      color: 'black',
                      border: 'black solid',
                      height: '80px',
                      my: '2%'
                  }}
            >{t("profile.tickets.current")}</Button>
          <Button component={Link} to=""
                  sx={{
                      color: 'black',
                      border: 'black solid',
                      height: '80px',
                      my: '2%'
                  }}
            >{t("profile.tickets.all")}</Button>
      </Box>
  );
}

export default MyTicketsPanel;