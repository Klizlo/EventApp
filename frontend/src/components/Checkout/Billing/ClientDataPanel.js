import {Box, InputAdornment, TextField} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import {useTranslation} from "react-i18next";

const ClientDataPanel = ({client, handleChange, emailError, phoneError}) => {

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
                value={client?.name}
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
                value={client?.surname}
                autoComplete="family-name"
            />
            <TextField
                error={emailError !== ""}
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={handleChange}
                label={t("form.labels.email")}
                name="email"
                value={client?.email}
                autoComplete="email"
                InputProps={{
                    startAdornment: emailError !== "" && (
                        <InputAdornment position="start">
                            <ErrorIcon color="error"/>
                        </InputAdornment>
                    )
                }}
                helperText={emailError}
            />
            <TextField
                error={phoneError !== ""}
                margin="normal"
                required
                fullWidth
                id="phone"
                onChange={handleChange}
                label={t("form.labels.phone")}
                name="phone"
                value={client?.phone}
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

export default ClientDataPanel;