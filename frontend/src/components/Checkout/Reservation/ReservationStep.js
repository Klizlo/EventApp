import {useState} from "react";
import validator from "validator/es";
import {Box, Button, InputAdornment, TextField, Typography} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import {useTranslation} from "react-i18next";

const ReservationStep = ({client, setClient, handleNext}) => {
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const handleChange = (e) => {
        setClient({...client, [e.target.name]: e.target.value});
    };

    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateData()) {
            handleNext();
        }

    };

    const validateData = () => {
        // validate email
        if (!validator.isEmail(client.email)) {
            setEmailError(t("form.signup.email"));
            return false;
        }

        //validate phone number
        if (!validator.isMobilePhone(client.phone, ['pl-PL'])) {
            setPhoneError(t("form.signup.phone"))
            return false;
        }

        return true;
    }

    return (
        <Box my={5}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center',
                textAlign: 'center'
            }}
             component='form' method='POST' onSubmit={handleSubmit}
        >
            <Typography variant='h5' color='#FF8834'>{t("checkout.steps.reservation.title")}</Typography>
            <Box
                sx={{
                    width: '60%',
                    minWidth: '60vw'
                }}
            >
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
                    label={t("form.labels.phone")}
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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    pt: 2,
                    width: '100%'
            }}
            >
                <Box sx={{ flex: '1 1 auto' }} />
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
                    {t("checkout.steps.reservation.next")}
                </Button>
            </Box>
        </Box>
    );
}

export default ReservationStep;