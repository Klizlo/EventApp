function dynamicSort(property) {
    var sortOrder = 1;
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]);
        return result * sortOrder;
    }
}

function dynamicFilter(params, event) {
    const types = params.getAll('type');
    const fromDate = params.get('from') === null ? null : new Date(params.get('from'));
    const toDate = params.get('to') === null ? null : new Date(params.get('to'));

    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    let isBetweenDates = true;

    if (fromDate !== null && toDate !== null) {
        isBetweenDates = ((startDate.getTime() >= fromDate.getTime() && startDate.getTime() <= toDate.getTime()) ||
            (endDate.getTime() >= fromDate.getTime() && endDate.getTime() <= toDate.getTime()));
    } else if (fromDate !== null) {
        isBetweenDates = (startDate.getTime() >= fromDate.getTime() || endDate.getTime() >= fromDate.getTime());
    }

    return (types.length > 0 ? types.includes(event.eventType.name) : true) &&
        isBetweenDates;
}

function unique(value, index, array) {
    return array.indexOf(value) === index;
}

export {dynamicSort, dynamicFilter, unique};