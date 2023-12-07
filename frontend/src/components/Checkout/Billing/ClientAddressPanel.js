import {Box, InputAdornment, TextField} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import {useTranslation} from "react-i18next";

const ClientAddressPanel = ({client, handleChange, postalCodeError}) => {

    const { t } = useTranslation();

    return (
        <Box>
            <TextField
                margin="normal"
                required
                fullWidth
                id="street"
                onChange={handleChange}
                label={t("form.labels.street")}
                name="street"
                value={client?.street}
                autoComplete="street-address"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="city"
                onChange={handleChange}
                label={t("form.labels.city")}
                name="city"
                value={client?.city}
                autoComplete="address-level2"
            />
            <TextField
                error={postalCodeError !== ""}
                margin="normal"
                required
                fullWidth
                id="postalCode"
                onChange={handleChange}
                label={t("form.labels.postalCode")}
                name="postalCode"
                value={client?.postalCode}
                autoComplete="postal-code"
                InputProps={{
                    startAdornment: (
                        postalCodeError !== "" && (
                        <InputAdornment position="start">
                            <ErrorIcon color="error" />
                        </InputAdornment>)
                    )
                }}
                helperText={postalCodeError}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="country"
                onChange={handleChange}
                label={t("form.labels.country")}
                name="country"
                value={client?.country}
                autoComplete="country-name"
            />
        </Box>
    );
}

export default ClientAddressPanel;