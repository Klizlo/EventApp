import {Box, InputAdornment, TextField} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const ClientDataPanel = ({client, handleChange, emailError, phoneError}) => {

    return (
        <Box>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                onChange={handleChange}
                label="Name"
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
                label="Surname"
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
                label="Email"
                name="email"
                value={client?.email}
                autoComplete="email"
                InputProps={{
                    startAdornment: emailError !== "" && (
                        <InputAdornment position="start">
                            <ErrorIcon color="error" />
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
                label="Phone"
                name="phone"
                value={client?.phone}
                autoComplete="phone"
                InputProps={{
                    startAdornment: phoneError !== "" && (
                        <InputAdornment position="start">
                            <ErrorIcon color="error" />
                        </InputAdornment>
                    )
                }}
                helperText={phoneError}
            />
        </Box>
    );
}

export default ClientDataPanel;