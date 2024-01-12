import globals from "../helpers/globals";
import {handleResponse} from "../helpers/handleResponse";
import {BehaviorSubject} from "rxjs";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('token')));

export const authenticationService = {
    login,
    register,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    }
};

function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`${globals.API}/auth/signin`, requestOptions)
        .then(handleResponse)
        .then(token => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', JSON.stringify(token.token));
            currentUserSubject.next(token.token);

            return token;
        });
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`${globals.API}/auth/signup`, requestOptions)
        .then(handleResponse)
        .then(token => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', token.token);
            currentUserSubject.next(token.token);

            return token;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    currentUserSubject.next(null);
}