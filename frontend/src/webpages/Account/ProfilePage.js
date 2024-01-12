import {Box, Button, Container, Grid, Skeleton} from "@mui/material";
import {Link} from "react-router-dom";
import ProfileDetails from "../../components/account/ProfileDetails";
import MyTicketsPanel from "../../components/account/MyTicketsPanel";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {userService} from "../../services/userService";

export default function ProfilePage() {

    const {t} = useTranslation();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        userService.getUser()
            .then(response => {
                setUser(response)
                setLoading(false);
            });
    }, []);

    return (
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
                        <MyTicketsPanel/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        {loading ? (<Skeleton variant='text'/>) : (<ProfileDetails user={user}/>)}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}