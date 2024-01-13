import {useState} from "react";
import {
    Alert,
    Avatar,
    Box,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import {Person, VisibilityOff} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import SaveIcon from '@mui/icons-material/Send';
import VisibilityIcon from "@mui/icons-material/Visibility";
import ErrorIcon from '@mui/icons-material/Error';
import {useTranslation} from "react-i18next";
import Link from "@mui/material/Link";
import {useNavigate} from "react-router-dom";
import validator from "validator/es";
import {authenticationService} from "../../services/authenticateService";

export default function LoginPage() {

    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const {t} = useTranslation();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validator.isEmail(data.email)) {
            setLoading(false);
            setEmailError(t("form.login.errors.email"));
        } else {
            authenticationService.login(data)
                .then(response => {
                    console.log(response);
                    navigate(-1);
                }, (error) => {setError("errors.login")});
        }
        setLoading(false);
    };

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
                <Grid item xs={12} sm={8} md={5} elevation={6} square>
                    <Typography
                        variant="h5"
                        mt="10%"
                        color="#FF8834"
                        sx={{
                            textAlign: "center"
                        }}
                    >
                        <strong>{t("form.login.name")}</strong>
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
                        <Avatar sx={{m: 1, bgcolor: '#FF8834', width: "100px", height: "100px"}}>
                            <Person style={{
                                fontSize: 60
                            }}/>
                        </Avatar>
                        <Box component="form" method="POST" onSubmit={handleSubmit} sx={{mt: 1}}>
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
                                autoFocus
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
                                helperText={passwordError}
                            />
                            {error && <Alert severity="error">{t(error)}</Alert>}
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
                                {t("form.login.name")}
                            </LoadingButton>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Link href="/" variant="body2" sx={{
                                        color: '#FF8834'
                                    }}>
                                        {t("form.login.link.password")}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2" sx={{
                                        color: '#FF8834'
                                    }}>
                                        {t("form.login.link.register")}
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