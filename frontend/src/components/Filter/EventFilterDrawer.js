import {Box, Button, FormControl, FormGroup, FormLabel, List, ListItem, Typography} from "@mui/material";
import {unique} from "../../helpers/ArrayOperations";
import FilterCheckbox from "./FilterCheckbox";
import DateFilter from "./DateFilter";
import {useTranslation} from "react-i18next";

export default function EventFilterDrawer ({events, setPage, close}) {

    const types = events.map(event => event.type).filter(unique).map(type => <FilterCheckbox name={'type'} value={type} setPage={setPage}/>);
    const places = events.map(event => event.place).filter(unique).map(place => <FilterCheckbox name={'place'} value={place} setPage={setPage} /> );

    const params = new URLSearchParams(window.location.search);

    const fromDate = params.get('from');
    const toDate = params.get('to');

    const { t } = useTranslation();

    return (
        <Box sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Typography variant='h5' sx={{ m: '2%' }}>{t("events.filter.title")}</Typography>
            <List>
                <ListItem>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{
                            '&.Mui-focused': {
                                color: '#FF8834'
                            }
                        }}>{t("event.date.name")}</FormLabel>
                        <DateFilter setPage={setPage} fromDate={fromDate} toDate={toDate}/>
                    </FormControl>
                </ListItem>
                <ListItem>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{
                            '&.Mui-focused': {
                                color: '#FF8834'
                            }
                        }}>{t("event.type")}</FormLabel>
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
                        }}>{t("event.place")}</FormLabel>
                        <FormGroup>
                            {places}
                        </FormGroup>
                    </FormControl>
                </ListItem>
            </List>
            <Button wariant='contained' onClick={close} sx={{
                fontWeight: 'bold',
                width: '90%',
                mb: '10%',
                color: 'text.primary',
                backgroundColor: '#FF8834',
                '&:hover': {
                    backgroundColor: 'black'
                }
            }}>
                {t("events.filter.close")}
            </Button>
        </Box>
    );
};