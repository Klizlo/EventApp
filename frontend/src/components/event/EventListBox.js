import {Box, Button, Drawer, FormControl, MenuItem, Pagination, Select, Typography} from "@mui/material";
import {useState} from "react";
import EventListItem from "./EventListItem";
import {dynamicFilter, dynamicSort} from "../../helpers/ArrayOperations";
import EventFilterDrawer from "../Filter/EventFilterDrawer";
import {useTranslation} from "react-i18next";

const EventListBox = ({events}) => {

    const {t} = useTranslation();

    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('name');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const count = Math.ceil(events
        .filter(event => dynamicFilter(new URLSearchParams(window.location.search), event))
        .length / 10)

    const showEvents = events
        .filter(event => dynamicFilter(new URLSearchParams(window.location.search), event))
        .sort(dynamicSort(sort))
        .slice(((page - 1) * 10), (page * 10))
        .map(event => <EventListItem event={event}/>);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'stretch'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Button sx={{
                    color: 'text.primary',
                    borderColor: 'text.primary',
                    borderStyle: 'solid',
                    borderWidth: '2px'
                }} onClick={() => setDrawerOpen(true)}>
                    {t("events.filter.name")}
                </Button>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography>{t("events.sort.title")}</Typography>
                    <FormControl variant='standard' sx={{
                        minWidth: 80
                    }}>
                        <Select value={sort}
                                onChange={handleSortChange}>
                            <MenuItem value='name'>{t("events.sort.name")}</MenuItem>
                            <MenuItem value='start_date'>{t("events.sort.date")}</MenuItem>
                            <MenuItem value='place'>{t("events.sort.place")}</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            {events
                .filter(event => dynamicFilter(new URLSearchParams(window.location.search), event))
                .length !== 0 ? showEvents :
                (<Typography sx={{
                    my: '10%',
                    textAlign: 'center'
                }}>{t("events.noFound")}</Typography>)}

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',

            }}>
                <Pagination count={count}
                            page={page}
                            onChange={(event, page) => setPage(page)}/>
            </Box>
            <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                anchor="left"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 300},
                }}>
                <EventFilterDrawer events={events} setPage={() => setPage(1)} close={handleDrawerToggle}/>
            </Drawer>
        </Box>
    );
}

export default EventListBox;