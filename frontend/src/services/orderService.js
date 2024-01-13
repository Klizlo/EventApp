import globals from "../helpers/globals";
import {handleResponse} from "../helpers/handleResponse";

export const orderService = {
    order,
    makeOrderValid
}

function order(order) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(order)
    };

    return fetch(`${globals.API}/kucOrder/new`, requestOptions)
        .then(handleResponse)
        .then((kucOrder) => {
            return kucOrder;
        }, (error) => console.log(error));
}

function makeOrderValid(order, client, payment) {
    const tickets = []
    order.forEach(orderItem => {
        orderItem.tickets.forEach(ticket => {
            tickets.push({
                eventId: ticket.event.id,
                price: ticket.price,
                seatNumber: ticket.seat.number,
                row: ticket.seat.row,
                zoneNumber: ticket.zone.id
            });
        })
    });

    const validOrder = {
        paymentMethod: payment !== null ? payment.name : null,
        userId: client !== null ? client.id : null,
        tickets: tickets
    }

    return validOrder;
}