import {useTranslation} from "react-i18next";
import {Box, InputAdornment, TextField} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

export const UserAddressEditFrom = ({editedUser, handleChange, postalCodeError}) => {
    const {t} = useTranslation();

    return (
        <Box>
            <TextField
                margin="normal"
                fullWidth
                id="street"
                onChange={handleChange}
                label={t("form.labels.street")}
                name="street"
                value={editedUser?.street}
                autoComplete="street-address"
            />
            <TextField
                margin="normal"
                fullWidth
                id="city"
                onChange={handleChange}
                label={t("form.labels.city")}
                name="city"
                value={editedUser?.city}
                autoComplete="address-level2"
            />
            <TextField
                error={postalCodeError !== ""}
                margin="normal"
                fullWidth
                id="postalCode"
                onChange={handleChange}
                label={t("form.labels.postalCode")}
                name="postalCode"
                value={editedUser?.postalCode}
                autoComplete="postal-code"
                InputProps={{
                    startAdornment: (
                        postalCodeError !== "" && (
                            <InputAdornment position="start">
                                <ErrorIcon color="error"/>
                            </InputAdornment>)
                    )
                }}
                helperText={postalCodeError}
            />
            <TextField
                margin="normal"
                fullWidth
                id="country"
                onChange={handleChange}
                label={t("form.labels.country")}
                name="country"
                value={editedUser?.country}
                autoComplete="country-name"
            />
        </Box>
    );
}