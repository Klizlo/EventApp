import {Button, Divider, Grid, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const LoginStep = ({handleNext}) => {

    const { t } = useTranslation();

    return (
        <Grid container my={5}>
            <Grid item xs sx={{
                p: 2
            }}>
                <Button
                    onClick={handleNext}
                    sx={{
                    backgroundColor: 'grey',
                    width: '100%',
                    py: 5,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'black'
                    }
                }}>
                    {t("checkout.steps.login.guest")}
                </Button>
            </Grid>
            <Divider orientation='vertical' flexItem/>
            <Grid item xs sx={{
                p: 2
            }}>
                <Typography>
                    {t("checkout.steps.login.register.description")}
                </Typography>
                <Button
                    onClick={() => window.location='/signup'}
                    sx={{
                    backgroundColor: 'grey',
                    width: '100%',
                    py: 2,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'black'
                    }
                }}>
                    {t("checkout.steps.login.register.button")}
                </Button>
            </Grid>
            <Divider orientation='vertical' flexItem/>
            <Grid item xs sx={{
                p: 2
            }}>
                <Typography>
                    {t("checkout.steps.login.login.description")}
                </Typography>
                <Button
                    onClick={() => window.location='/login'}
                    sx={{
                    backgroundColor: 'grey',
                    width: '100%',
                    py: 2,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'black'
                    }
                }}>
                    {t("checkout.steps.login.login.button")}
                </Button>
            </Grid>
        </Grid>
    )
};

export default LoginStep;