import globals from "../helpers/globals";
import {handleResponse} from "../helpers/handleResponse";

export const userService = {
    getUser,
    editUser,
    deleteUser
};

function getUser() {
    const token = localStorage.getItem("token").replace(/^"(.*)"$/, '$1');
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    return fetch(`${globals.API}/users/get`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            return user;
        }, (error) => console.log(error));
}

function editUser(user) {
    const token = localStorage.getItem("token").replace(/^"(.*)"$/, '$1');
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(user)
    }

    return fetch(`${globals.API}/users/update`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            return user;
        }, (error) => console.log(error));
}

function deleteUser() {
    const token = localStorage.getItem("token").replace(/^"(.*)"$/, '$1');
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    return fetch(`${globals.API}/users/delete`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            return user;
        }, (error) => console.log(error));
}