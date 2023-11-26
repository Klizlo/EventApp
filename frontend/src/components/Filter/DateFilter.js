import {Box, Button} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useMemo, useState} from "react";
import dayjs from "dayjs";
import {getFullDate} from "../../helpers/EventData";

export default function DateFilter ({setPage, fromDate, toDate}) {

    const [from, setFrom] = useState(fromDate !== null ? dayjs(fromDate) : null);
    const [to, setTo] = useState(toDate !== null ? dayjs(toDate) : null);

    const [fromError, setFromError] = useState(null);
    const [toError, setToError] = useState(null);

    const fromErrorMessage = useMemo(() => {
        switch (fromError) {
            case 'minDate': {
                return "Please select at least today's date";
            }
            default: return '';
        }
    }, [fromError]);

    const toErrorMessage = useMemo(() => {
        switch (toError) {
            case 'minDate': {
                const date = new Date(from);
                return `Selected date cannot be earlier than ${getFullDate(date, date)}`;
            }
            default: return '';
        }
    }, [toError]);

    const handleClick = () => {
        const url = new URL(window.location.href);
        let fromDate = new Date(from);
        const toDate = new Date(to);

        if(from !== null && to !== null && from > to) {
            setToError('minDate');
            return;
        }

        if(from === null && to === null) {
            url.searchParams.delete('from');
            url.searchParams.delete('to');

            window.history.replaceState(null, null, url);
            return;
        }

        if(from === null && to !== null) {
            fromDate = new Date();
            setFrom(dayjs(fromDate));
        }

        if (from !== null && to === null) {
            url.searchParams.set('from', fromDate.toDateString());
            url.searchParams.delete('to');

            window.history.replaceState(null, null, url);

            setPage();
        } else if(fromDate.getTime() <= toDate.getTime()) {

            url.searchParams.set('from', fromDate.toDateString());
            url.searchParams.set('to', toDate.toDateString());

            window.history.replaceState(null, null, url);

            setPage();
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Box>
                <DatePicker label='From'
                            value={from}
                            minDate={dayjs(new Date())}
                            onError={(newError) => setFromError(newError)}
                            slotProps={{
                                textField: {
                                    helperText: fromErrorMessage
                                }
                            }}
                            onChange={(newValue) => setFrom(newValue)}
                            sx={{
                                mt: '5%'
                            }}/>
                <DatePicker label='To'
                            value={to}
                            minDate={from === null ? dayjs(new Date()) : from}
                            onError={(newError) => setToError(newError)}
                            onChange={(newValue) => setTo(newValue)}
                            slotProps={{
                                textField: {
                                    helperText: toErrorMessage
                                }
                            }}
                            sx={{
                    my: '5%'
                }}/>
                <Button onClick={handleClick}
                        sx={{
                    color: 'black',
                    backgroundColor: 'white',
                    border: 'black solid 2px'
                }}>
                    Accept
                </Button>
            </Box>
        </LocalizationProvider>
    );
}