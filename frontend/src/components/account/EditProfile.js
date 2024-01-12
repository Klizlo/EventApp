import {useState} from "react";
import {Address} from "../../helpers/Address";
import validator from "validator/es";
import {useTranslation} from "react-i18next";
import {Box, Button, Divider, Grid} from "@mui/material";
import {UserDataEditForm} from "./UserDataEditForm";
import {UserAddressEditFrom} from "./UserAddressEditFrom";
import {userService} from "../../services/userService";

export const EditProfile = ({user}) => {
    const {t} = useTranslation();

    const [phoneError, setPhoneError] = useState("");
    const [postalCodeError, setPostalCodeError] = useState("");
    const address = Address.getAddress(user.address);
    const [editedUser, setEditedUser] = useState({
        id: user.id,
        email: user.email,
        street: address?.street,
        postalCode: address?.postalCode,
        city: address?.city,
        country: address?.country,
        name: user.name,
        surname: user.surname,
        tel_number: user.tel_number
    });

    const handleChange = (e) => {
        setEditedUser({...editedUser, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateData()) {
            const userToEdit = {
                id: editedUser.id,
                email: user.email,
                address: Address.createAddress(editedUser.street, editedUser.postalCode, editedUser.city, editedUser.country),
                name: editedUser.name,
                surname: editedUser.surname,
                tel_number: editedUser.tel_number
            }
            userService.editUser(userToEdit)
                .then(response => {
                    window.location.href = '/profile';
                });
        }

    };

    const validateData = () => {

        //validate phone number
        if (!validator.isMobilePhone(editedUser.tel_number, ['pl-PL'])) {
            setPhoneError(t("form.signup.phone"))
            return false;
        } else {
            setPhoneError("");
        }

        //validate postal code
        if (editedUser.postalCode) {
            if (!validator.isPostalCode(editedUser.postalCode, ['PL'])) {
                setPostalCodeError(t("form.address.errors.postalCode"))
                return false;
            } else {
                setPostalCodeError("");
            }
        }

        return true;
    }

    return (
        <Box component='form' method='POST' onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs p={2}>
                    <UserDataEditForm editedUser={editedUser} handleChange={handleChange} phoneError={phoneError} />
                </Grid>
                <Divider orientation='vertical' flexItem/>
                <Grid item xs p={2}>
                    <UserAddressEditFrom editedUser={editedUser} handleChange={handleChange} postalCodeError={postalCodeError} />
                </Grid>
            </Grid>
            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                <Box sx={{flex: '1 1 auto'}}/>
                <Button
                    type='submit'
                    variant="contained"
                    sx={{
                        fontWeight: 'bold',
                        mt: 3,
                        mb: 2,
                        background: '#FF8834',
                        '&:hover': {
                            backgroundColor: 'action.active'
                        }
                    }}>
                    {t("editProfile.update")}
                </Button>
            </Box>
        </Box>
    );
}