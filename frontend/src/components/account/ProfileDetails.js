import {Avatar, Box, Button, Paper, Typography} from "@mui/material";
import {Person} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Address} from "../../helpers/Address";

const ProfileDetails = ({user}) => {

    const {t} = useTranslation();

    const address = Address.getAddress(user.address);

    return (
        <Box
            component={Paper}
            sx={{
                my: 4,
                mx: 1,
                px: 2,
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography variant="h4">{t("profile.panel.title")}</Typography>
            <Avatar sx={{m: 1, bgcolor: '#FF8834', width: "100px", height: "100px"}}>
                <Person style={{
                    fontSize: 60
                }}/>
            </Avatar>
            <Typography variant="h5">{user.name} {user.surname}</Typography>
            <Box width="100%">
                <Typography variant="h6">{t("profile.panel.contact")}</Typography>
                <Typography>{t("profile.panel.phone")} {user.tel_number}</Typography>
                <Typography>{t("profile.panel.email")} {user.email}</Typography>
                <Typography>{t("profile.panel.street")} {address?.street}</Typography>
                <Typography>{address?.postalCode} {address?.city}</Typography>
                <Typography>{address?.country}</Typography>
            </Box>
            <Button component={Link} to="/profile/edit"
                    sx={{
                        color: '#FF8834',
                        textDecoration: 'underline'
                    }}>{t("profile.edit")}</Button>
        </Box>
    );
}

export default ProfileDetails;