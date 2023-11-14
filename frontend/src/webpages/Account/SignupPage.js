import {useState} from "react";
import {
    Alert,
    Avatar,
    Box, Checkbox,
    Container, FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import {Person, VisibilityOff} from "@mui/icons-material";
import ErrorIcon from "@mui/icons-material/Error";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {LoadingButton} from "@mui/lab";
import SaveIcon from "@mui/icons-material/Send";
import {Link} from "react-router-dom";
import validator from "validator/es";

export default function SignupPage() {

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: ""
    });
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const handleChecked = (e) => {
        setChecked(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateData()) {
            setLoading(false);
        }
    };

    const validateData = () => {
        // validate email
        if(!validator.isEmail(data.email)) {
            setEmailError("Invalid email!");
            return false;
        }

        // validate password
        if (!validator.isStrongPassword(data.password, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setPasswordError("It's not a strong password!")
            return false;
        }

        //validate phone number
        if(!validator.isMobilePhone(data.phone, ['pl-PL'])){
            setPhoneError("Invalid phone number")
            return false;
        }

        return true;
    }

    return (
        <Container>
            <Grid container component="main" sx={{ height: '90vh', padding: '2% 0', mt: "20px" }}>
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
                        <strong>Sign up</strong>
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
                        <Box component="form" method="POST" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                onChange={handleChange}
                                label="Name"
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
                                label="Surname"
                                name="surname"
                                value={data.surname}
                                autoComplete="family-name"
                                autoFocus
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
                                value={data.email}
                                autoComplete="email"
                                autoFocus
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {emailError !== "" && <ErrorIcon color="error" />}
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
                                value={data.phone}
                                autoComplete="phone"
                                autoFocus
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {phoneError !== "" && <ErrorIcon color="error" />}
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
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete="current-password"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={handleShowPassword}>
                                            {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                                        </IconButton>
                                    ),
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {passwordError !== "" && <ErrorIcon color="error"/>}
                                        </InputAdornment>
                                    )
                                }}
                                helperText={passwordError !== "" ? passwordError :
                                    "The password should contains at least 8 characters, 1 uppercase letter, 1 number and 1 special character."}
                            />
                            {error && <Alert severity="error">{error}</Alert>}
                            <FormControlLabel control={
                            <Checkbox value="remember" required sx={{
                                    color: '#FF8834',
                                    '&.Mui-checked': {
                                        color: '#FF8834',
                                    }
                                }} onChange={handleChecked}/> }
                                              label=""/>
                                By creating an account, you agree to the Terms of Service...
                            <LoadingButton
                                type="submit"
                                fullWidth
                                loading={loading}
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    background: '#FF8834',
                                    '&:hover': {
                                        backgroundColor: 'black'
                                    }
                                }}
                            >
                                Sign in
                            </LoadingButton>
                            <Grid container>
                                <Grid item>
                                    <Link to="/login" variant="body2">
                                        {"Already have an account? Login"}
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