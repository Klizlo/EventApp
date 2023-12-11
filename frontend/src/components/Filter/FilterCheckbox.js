import {useState} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";

export default function FilterCheckbox({name, value, setPage}) {
    const [checked, setChecked] = useState(new URLSearchParams(window.location.search)
        .getAll(name)
        .includes(value));

    const handleChange = (event) => {
        setChecked(event.target.checked);
        const url = new URL(window.location.href);

        if (event.target.checked) {
            url.searchParams.append(name, value);
            window.history.replaceState(null, null, url);
        } else {
            url.searchParams.delete(name, value);
            window.history.replaceState(null, null, url);
        }

        setPage();
    };

    return (
        <FormControlLabel label={value} control={
            <Checkbox checked={checked}
                      onChange={handleChange}
                      sx={{
                          color: '#FF8834',
                          '&.Mui-checked': {
                              color: '#FF8834'
                          }
                      }}
            />
        }/>
    );
}