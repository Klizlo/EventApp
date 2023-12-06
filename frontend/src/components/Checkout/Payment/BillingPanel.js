import {Box, Typography} from "@mui/material";

const BillingPanel = ({client}) => {

    return (
        <Box mx={5} boxShadow={5}>
            <Typography variant='h6'>Billing</Typography>
            <Box width="100%">
                <Typography>{client.name + " " + client.surname}</Typography>
                <Typography>Phone number: {client.phone}</Typography>
                <Typography>Email: {client.email}</Typography>
                <Typography>Street: {client.street}</Typography>
                <Typography>{client.postalCode + " " + client.city}</Typography>
                <Typography>{client.country}</Typography>
            </Box>
        </Box>
    );

}

export default BillingPanel;