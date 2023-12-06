import {Box, Paper, Typography} from "@mui/material";

const ClientReservationPanel = ({client}) => {
    return(
        <Box component={Paper} p={2} boxShadow={5}>
            <Typography variant="h6" textAlign='center'>Billing</Typography>
            <Typography>{client.name + " " + client.surname}</Typography>
            <Typography>Phone: {client.phone}</Typography>
            <Typography>Email: {client.email}</Typography>
        </Box>
    );
}

export default ClientReservationPanel;