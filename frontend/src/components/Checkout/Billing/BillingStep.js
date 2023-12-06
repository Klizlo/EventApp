import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import {useState} from "react";
import ClientDataPanel from "./ClientDataPanel";
import ClientAddressPanel from "./ClientAddressPanel";
import validator from "validator/es";

const BillingStep = ({client, setClient, handleNext}) => {

    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [postalCodeError, setPostalCodeError] = useState("");
    const handleChange = (e) => {
        setClient({...client, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateData()) {
            handleNext();
        }

    };

    const validateData = () => {
        // validate email
        if(!validator.isEmail(client.email)) {
            setEmailError("Invalid email!");
            return false;
        }

        //validate phone number
        if(!validator.isMobilePhone(client.phone, ['pl-PL'])){
            setPhoneError("Invalid phone number")
            return false;
        }

        //validate postal code
        if(!validator.isPostalCode(client.postalCode, ['PL'])){
            setPostalCodeError("Invalid postal code")
            return false;
        }

        return true;
    }

    return (
        <Box my={5}>
            <Typography variant='h5' color='#FF8834'>Billing</Typography>
            <Box component='form' method='POST' onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs p={2}>
                        <ClientDataPanel client={client} emailError={emailError} handleChange={handleChange} phoneError={phoneError}/>
                    </Grid>
                    <Divider orientation='vertical' flexItem />
                    <Grid item xs p={2}>
                        <ClientAddressPanel client={client} handleChange={handleChange} postalCodeError={postalCodeError}/>
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button
                        type='submit'
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            background: '#FF8834',
                            '&:hover': {
                                backgroundColor: 'black'
                            }
                        }}>
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default BillingStep;