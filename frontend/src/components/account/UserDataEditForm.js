import {Box, InputAdornment, TextField} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import {useTranslation} from "react-i18next";

export const UserDataEditForm = ({editedUser, handleChange, phoneError}) => {

    const {t} = useTranslation();

    return (
        <Box>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                onChange={handleChange}
                label={t("form.labels.name")}
                name="name"
                value={editedUser?.name}
                autoComplete="given-name"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="surname"
                onChange={handleChange}
                label={t("form.labels.surname")}
                name="surname"
                value={editedUser?.surname}
                autoComplete="family-name"
            />
            <TextField
                error={phoneError !== ""}
                margin="normal"
                required
                fullWidth
                id="phone"
                onChange={handleChange}
                label={t("form.labels.phone")}
                name="tel_number"
                value={editedUser?.tel_number}
                autoComplete="phone"
                InputProps={{
                    startAdornment: phoneError !== "" && (
                        <InputAdornment position="start">
                            <ErrorIcon color="error"/>
                        </InputAdornment>
                    )
                }}
                helperText={phoneError}
            />
        </Box>
    );
}