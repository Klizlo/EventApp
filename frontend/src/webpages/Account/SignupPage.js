import {useState} from "react";
import {
    Alert,
    Box,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import {VisibilityOff} from "@mui/icons-material";
import ErrorIcon from "@mui/icons-material/Error";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {LoadingButton} from "@mui/lab";
import SaveIcon from "@mui/icons-material/Send";
import validator from "validator/es";
import {useTranslation} from "react-i18next";
import Link from "@mui/material/Link";
import {authenticationService} from "../../services/authenticateService";
import {useNavigate} from "react-router-dom";

export default function SignupPage() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        tel_number: "",
        password: ""
    });
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {t} = useTranslation();

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleChecked = (e) => {
        setChecked(e.target.checked);
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateData()) {
            setLoading(false);
        } else {
            authenticationService.register(data)
                .then(response => {
                    console.log(response);
                    navigate(-1);
                }, (error) => console.log(error));
        }
    };

    const validateData = () => {
        // validate email
        if (!validator.isEmail(data.email)) {
            setEmailError(t("form.signup.email"));
            return false;
        }

        // validate password
        if (!validator.isStrongPassword(data.password, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setPasswordError(t("form.signup.password.invalid"))
            return false;
        }

        //validate phone number
        if (!validator.isMobilePhone(data.phone, ['pl-PL'])) {
            setPhoneError(t("form.signup.phone"))
            return false;
        }

        return true;
    }

    return (
        <Container>
            <Grid container component="main" sx={{height: '90vh', padding: "2%", pt: "80px"}}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: '',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}/>
                <Grid item xs={12} sm={8} md={5} elevation={6} square
                      sx={{
                          textAlign: "start"
                      }}>
                    <Typography
                        variant="h5"
                        mt="10%"
                        color="#FF8834"
                        sx={{
                            textAlign: "center"
                        }}
                    >
                        <strong>{t("form.signup.name")}</strong>
                    </Typography>
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
                        <Box component="form" method="POST" onSubmit={handleSubmit} sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                onChange={handleChange}
                                label={t("form.labels.name")}
                                name="name"
                                value={data.name}
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
                                value={data.surname}
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
                                value={data.email}
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
                                value={data.phone}
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
                            <TextField
                                margin="normal"
                                error={passwordError !== ""}
                                required
                                fullWidth
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                label={t("form.labels.password")}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete="current-password"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={handleShowPassword}>
                                            {showPassword ? <VisibilityOff/> : <VisibilityIcon/>}
                                        </IconButton>
                                    ),
                                    startAdornment: passwordError !== "" && (
                                        <InputAdornment position="start">
                                            <ErrorIcon color="error"/>
                                        </InputAdornment>
                                    )
                                }}
                                helperText={passwordError !== "" ? passwordError : t("form.signup.password.placeholder")}
                            />
                            {error && <Alert severity="error">{error}</Alert>}
                            <FormControlLabel control={
                                <Checkbox value="remember" required sx={{
                                    color: '#FF8834',
                                    '&.Mui-checked': {
                                        color: '#FF8834',
                                    }
                                }} onChange={handleChecked}/>}
                                              label=""/>
                            {t("form.signup.terms")}
                            <LoadingButton
                                type="submit"
                                fullWidth
                                loading={loading}
                                loadingPosition="start"
                                startIcon={<SaveIcon/>}
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    background: '#FF8834',
                                    '&:hover': {
                                        backgroundColor: 'action.active'
                                    }
                                }}
                            >
                                {t("form.signup.name")}
                            </LoadingButton>
                            <Grid container>
                                <Grid item>
                                    <Link href="/login" variant="body2" sx={{
                                        color: '#FF8834'
                                    }}>
                                        {t("form.signup.link")}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}