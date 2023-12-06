import {Button, Divider, Grid, Typography} from "@mui/material";

const LoginStep = ({handleNext}) => {
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
                    checkout as a guest
                </Button>
            </Grid>
            <Divider orientation='vertical' flexItem/>
            <Grid item xs sx={{
                p: 2
            }}>
                <Typography>
                    Want to have your tickets in one place?
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
                    Register
                </Button>
            </Grid>
            <Divider orientation='vertical' flexItem/>
            <Grid item xs sx={{
                p: 2
            }}>
                <Typography>
                    Already have an account?
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
                    sign in
                </Button>
            </Grid>
        </Grid>
    )
};

export default LoginStep;