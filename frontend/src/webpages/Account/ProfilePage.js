import {Box, Button, Container, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import ProfileDetails from "../../components/account/ProfileDetails";
import MyTicketsPanel from "../../components/account/MyTicketsPanel";
import {useTranslation} from "react-i18next";

export default function ProfilePage() {

    const { t } = useTranslation();

    return(
        <Box sx={{padding: "2%", pt: "80px"}}>
            <Button component={Link} to="/profile"
                    disableRipple
                    sx={{
                color: "text.primary",
                "&.MuiButtonBase-root:hover": {
                    backgroundColor: 'transparent'
                }
            }}>{t("profile.name")}</Button>
            <Container>
                <Grid container component="main" columnSpacing={20}>
                    <Grid item xs={12} md={7}>
                        <MyTicketsPanel />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <ProfileDetails />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}