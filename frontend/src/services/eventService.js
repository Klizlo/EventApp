import globals from "../helpers/globals";
import {handleResponse} from "../helpers/handleResponse";

export const eventService = {
    getAllEvents,
    getEventById
}

function getAllEvents() {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }

    return fetch(`${globals.API}/events/all`, requestOptions)
        .then(handleResponse)
        .then((events) => {
            return events;
        }, (error) => console.log(error));
}

function getEventById(id) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }

    return fetch(`${globals.API}/events/get/${id}`, requestOptions)
        .then(handleResponse)
        .then((event) => {
            return event;
        }, (error) => Promise.reject(error));
}