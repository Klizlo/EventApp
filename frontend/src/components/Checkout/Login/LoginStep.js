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
                    variant='contained'
                    onClick={handleNext}
                    sx={{
                        fontWeight: 'bold',
                        backgroundColor: 'grey',
                        width: '100%',
                        py: 5,
                        '&:hover': {
                            backgroundColor: 'action.active'
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
                    variant='contained'
                    onClick={() => window.location='/signup'}
                    sx={{
                        fontWeight: 'bold',
                        backgroundColor: 'grey',
                        width: '100%',
                        py: 2,
                        '&:hover': {
                            backgroundColor: 'action.active'
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
                    variant='contained'
                    onClick={() => window.location='/login'}
                    sx={{
                        fontWeight: 'bold',
                        backgroundColor: 'grey',
                        width: '100%',
                        py: 2,
                        '&:hover': {
                            backgroundColor: 'action.active'
                        }
                }}>
                    {t("checkout.steps.login.login.button")}
                </Button>
            </Grid>
        </Grid>
    )
};

export default LoginStep;