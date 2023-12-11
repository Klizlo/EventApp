import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControl, Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CancelIcon from '@mui/icons-material/Cancel';
import {useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import {unique} from "../../helpers/ArrayOperations";

const TicketItem = ({event, tickets, setTickets, index}) => {

    const { t } = useTranslation();

    const [ticket, setTicket] = useState(tickets.length > index ? tickets[index] : {
        id: null,
        event_id: event.id,
        price: null,
        seat_id: null,
        zone_id: null
    });

    const [row, setRow] = useState(tickets.length > index ? event.zones
        .find(zone => zone.id === ticket.zone_id)
        .seats.find(seat => seat.id === ticket.seat_id).row : null);

    const zones = event.zones
        .filter(zone => zone.seats.some(seat => seat.status === 'Free'));

    const rows = useMemo(() => {
        return ticket.zone_id !== null ? event.zones
            .find(zone => zone.id === ticket.zone_id)
            .seats.filter(seat => seat.status === 'Free')
            .map(seat => seat.row).filter(unique) : [];
    }, [event.zones, ticket.zone_id]);

    const seats = useMemo(() => {
        return ticket.zone_id !== null && row !== null ? event.zones
            .find(zone => ticket.zone_id !== null && zone.id === ticket.zone_id)
            .seats.filter(seat => seat.row === row && (!tickets.some(ticket => ticket.seat_id === seat.id) || ticket.seat_id === seat.id)) : [];
    }, [event.zones, row, ticket.seat_id, ticket.zone_id, tickets]);

    if (zones.length === 1 && ticket.zone_id === null) {
        setTicket({...ticket, zone_id: zones[0].id})
    }

    const handleChange = (e) => {
        if (e.target.name === 'seat_id') {
            setTicket({...ticket, [e.target.name]: e.target.value, price: event.zones.find(zone => zone.id === ticket.zone_id).price});
        } else {
            setTicket({...ticket, [e.target.name]: e.target.value});
        }
    };

    const handleChangeRow = (e) => {
        setRow(e.target.value);
    };

    const handleClick = () => {
        if (tickets.length === index) {
            setTickets([...tickets, ticket]);
        } else {
            let ticketsToEdit = tickets.map((ticketToEdit, i) => {
                if (i === index) {
                    return ticket;
                }

                return ticketToEdit;
            });

            setTickets(ticketsToEdit);
        }
    };

    return (
        <Grid item xs={12} sm={6} md={8} xl={6}>
            <Box component={Paper}
                 boxShadow={5}
                 sx={{
                     display: 'flex',
                     flexDirection: { xs: 'column', md: 'row' },
                     alignItems: {xs: 'flex-start', md: 'center'},
                     alignContent: 'center',
                     p: 2
                }}>
                <Typography mr={2} mb={2}>{t("tickets.ticket.select", { ticketNumber: index + 1 })}</Typography>
                <FormControl disabled={zones.length === 1} required sx={{ mr: 2, my: 2, minWidth: 120 }}>
                    <InputLabel>{t("tickets.ticket.zone")}</InputLabel>
                    <Select name='zone_id'
                            label={t("tickets.ticket.zone")}
                            value={ticket.zone_id}
                            onChange={handleChange}>
                        {zones.map(zone => (
                            <MenuItem value={zone.id}>{zone.name} - {zone.price} zł</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {ticket.zone_id !== null && (
                    <FormControl required sx={{ mr: 2, my: 2, minWidth: 120 }}>
                        <InputLabel>{t("tickets.ticket.row")}</InputLabel>
                        <Select name='row'
                                label={t("tickets.ticket.row")}
                                value={row}
                                onChange={handleChangeRow}>
                            {rows.map(row => (
                                <MenuItem value={row}>{row}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
                {row !== null && (
                    <FormControl required sx={{ mr: 2, my: 2, minWidth: 120 }}>
                        <InputLabel>{t("tickets.ticket.seat")}</InputLabel>
                        <Select name='seat_id'
                                label={t("tickets.ticket.seat")}
                                value={ticket.seat_id}
                                onChange={handleChange}>
                            {seats.map(seat => (
                                <MenuItem value={seat.id}>{seat.number}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
                {ticket.seat_id !== null && (
                    <Button
                        variant='contained'
                        endIcon={tickets.length === index ? <AddIcon /> : <EditIcon />}
                        onClick={handleClick}
                        sx={{
                            background: '#FF8834',
                            '&:hover': {
                                backgroundColor: 'action.active'
                            }
                        }}>
                        {tickets.length === index ? t("tickets.ticket.add") : t("tickets.ticket.edit")}
                    </Button>
                )}
            </Box>
        </Grid>
    );
};

const TicketPicker = ({event, tickets, setTickets}) => {

    const [numberOfTickets, setNumberOfTickets] = useState(0);

    const { t } = useTranslation();

    const [ticketType, setTicketType] = useState(null);

    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        setTicketType(e.target.value);
    }

    const types = [
        'tickets.type.reservation',
        'tickets.type.buy'
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        setOpen(true);
    };

    const changeNumberOfTickets = (e) => {
        let value = parseInt(e.target.value);

        const min = 0;
        const max = 6;

        if (value > max) value = max;
        if (value < min) value = min;

        setNumberOfTickets(value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addTicketsToCart = () => {
        const order = {
            time: new Date(),
            type: ticketType,
            tickets: tickets.slice(0, numberOfTickets)
        };

        const orders = sessionStorage.getItem("order") === null ? [] : JSON.parse(sessionStorage.getItem("order"));

        orders.push(order);

        sessionStorage.setItem("order", JSON.stringify(orders));

        handleClose();
        window.location.href = '/';
    };

    return (
        <Box component='form' method='POST' onSubmit={handleSubmit}
             sx={{
                 py: 6,
             }}>
            <TextField
                type='number'
                required
                id='numberOfTickets'
                name='numberOfTickets'
                label={t("tickets.numberOfTickets")}
                value={numberOfTickets}
                onChange={changeNumberOfTickets}
                sx={{
                    mb: 2
                }}
            />
            <Grid container spacing={2}>
                {!isNaN(numberOfTickets) && Array.from(Array(numberOfTickets).keys())
                    .map((index) => (index === 0 || tickets.length >= index) && (
                        <TicketItem
                            event={event}
                            tickets={tickets}
                            setTickets={setTickets}
                            index={index}/>
                        )
                    )}
            </Grid>
            {tickets.length !== 0 && tickets.length >= numberOfTickets && (
                <FormControl required sx={{ mr: 2, my: 2, minWidth: 200 }}>
                    <InputLabel>{t("tickets.type.label")}</InputLabel>
                    <Select name='zone_id'
                            label={t("tickets.type.label")}
                            value={ticketType}
                            onChange={handleChange}>
                        {types.map(type => (
                            <MenuItem value={type}>{t(type)}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
            { ticketType !== null && (
                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                    <Box sx={{flex: '1 1 auto'}}/>
                    <Button
                        type='submit'
                        variant="contained"
                        endIcon={<AddShoppingCartIcon />}
                        sx={{
                            fontWeight: 'bold',
                            mt: 3,
                            mb: 2,
                            background: '#FF8834',
                            '&:hover': {
                                backgroundColor: 'action.active'
                            }
                        }}>
                        {t("tickets.add")}
                    </Button>
                </Box>
            )}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {t("tickets.dialog.title")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t("tickets.dialog.text")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button endIcon={<CancelIcon />} onClick={handleClose} color='error'>
                        {t("tickets.dialog.cancel")}
                    </Button>
                    <Button endIcon={<AddShoppingCartIcon />} onClick={addTicketsToCart} color='success'>
                        {t("tickets.dialog.add")}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default TicketPicker;