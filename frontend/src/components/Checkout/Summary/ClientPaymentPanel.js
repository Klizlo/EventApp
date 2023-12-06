import {Box, Paper, Typography} from "@mui/material";

const ClientPaymentPanel = ({client, payment}) => {
    return(
        <Box component={Paper} p={2} boxShadow={5}>
            <Typography variant="h6" textAlign='center'>Billing</Typography>
            <Typography>{client.name + " " + client.surname}</Typography>
            <Typography>Phone: {client.phone}</Typography>
            <Typography>Email: {client.email}</Typography>
            <Typography>Address:</Typography>
            <Typography>{client.street}</Typography>
            <Typography>{client.city}</Typography>
            <Typography>{client.postalCode}</Typography>
            <Typography>{client.country}</Typography>
            <Typography variant="h6" textAlign='center'>Payment method</Typography>
            <Typography>{payment.name}</Typography>
        </Box>
    );
}

export default ClientPaymentPanel;