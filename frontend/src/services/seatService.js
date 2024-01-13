import globals from "../helpers/globals";
import {handleResponse} from "../helpers/handleResponse";

export const seatService = {
    reserve
};

function reserve(seats) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(seats)
    };

    return fetch(`${globals.API}/seats/reserve`, requestOptions)
        .then(handleResponse)
        .then((seats) => {
            return seats;
        }, (error) => console.log(error));
}