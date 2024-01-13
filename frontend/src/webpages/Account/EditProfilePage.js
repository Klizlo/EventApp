import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Skeleton
} from "@mui/material";
import {Link} from "react-router-dom";
import {EditProfile} from "../../components/account/EditProfile";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {authenticationService} from "../../services/authenticateService";

export default function EditProfilePage() {
    const {t} = useTranslation();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    useEffect(() => {
        userService.getUser()
            .then(response => {
                setUser(response)
                setLoading(false);
            });
    }, []);

    const handleDeleteAccount = () => {
        userService.deleteUser()
            .then(response => {
                authenticationService.logout();
                window.location.href = '/';
            });
    }

    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Button component={Link} to="/profile"
                        disableRipple
                        sx={{
                            color: "text.primary",
                            "&.MuiButtonBase-root:hover": {
                                backgroundColor: 'transparent'
                            }
                        }}>{t("profile.name")}</Button>
                <Button
                    color="error"
                    startIcon={<DeleteForeverIcon />}
                    onClick={() => setDeleteDialogOpen(true)}
                >
                    {t("editProfile.delete")}</Button>
            </Box>
            {loading ? (<Skeleton variant='rectangular' />) : (<EditProfile user={user} />)}
            <Dialog open={deleteDialogOpen} >
                <DialogTitle>
                    {t("editProfile.dialog.title")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t("editProfile.dialog.content")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogOpen(false)}>{t("editProfile.dialog.cancel")}</Button>
                    <Button onClick={handleDeleteAccount} color='error' endIcon={<DeleteForeverIcon />}>{t("editProfile.dialog.delete")}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}