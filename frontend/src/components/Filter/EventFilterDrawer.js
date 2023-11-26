import {Box, Button, FormControl, FormGroup, FormLabel, List, ListItem, Typography} from "@mui/material";
import {unique} from "../../helpers/ArrayOperations";
import FilterCheckbox from "./FilterCheckbox";
import DateFilter from "./DateFilter";

export default function EventFilterDrawer ({events, setPage, close}) {

    const types = events.map(event => event.type).filter(unique).map(type => <FilterCheckbox name={'type'} value={type} setPage={setPage}/>);
    const places = events.map(event => event.place).filter(unique).map(place => <FilterCheckbox name={'place'} value={place} setPage={setPage} /> );

    const params = new URLSearchParams(window.location.search);

    const fromDate = params.get('from');
    const toDate = params.get('to');

    return (
        <Box sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Typography variant='h5' sx={{ m: '2%' }}>Filters</Typography>
            <List>
                <ListItem>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{
                            '&.Mui-focused': {
                                color: '#FF8834'
                            }
                        }}>Date</FormLabel>
                        <DateFilter setPage={setPage} fromDate={fromDate} toDate={toDate}/>
                    </FormControl>
                </ListItem>
                <ListItem>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{
                            '&.Mui-focused': {
                                color: '#FF8834'
                            }
                        }}>Type</FormLabel>
                        <FormGroup>
                            {types}
                        </FormGroup>
                    </FormControl>
                </ListItem>
                <ListItem>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{
                            '&.Mui-focused': {
                                color: '#FF8834'
                            }
                        }}>Place</FormLabel>
                        <FormGroup>
                            {places}
                        </FormGroup>
                    </FormControl>
                </ListItem>
            </List>
            <Button onClick={close} sx={{
                width: '90%',
                mb: '10%',
                color: 'white',
                backgroundColor: '#FF8834',
                '&:hover': {
                    backgroundColor: 'black'
                }
            }}>
                Close
            </Button>
        </Box>
    );
};