import {Box, Button, Typography} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Link} from "react-router-dom";

const FinalPage = () => {
    return (
        <Box sx={{
            p: '2%',
            mt: "50px",
            maxHeight: '100vh',
            width: '100vw',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                <CheckCircleOutlineIcon color='success' sx={{
                    fontSize: '70px'
                }}/>
                <Typography variant='h4' color='green'>Thank you for using the service</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    pt: 2,
                    width: '90%'
                }}
            >
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                    component={Link}
                    to='/'
                    variant="contained"
                    sx={{
                        mt: 3,
                        mb: 2,
                        background: '#FF8834',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }}>
                    Return to home page
                </Button>
            </Box>
        </Box>
    );
}

export default FinalPage;