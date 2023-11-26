function getFullDate(start_date, end_date) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    if (startDate.getFullYear() !== endDate.getFullYear()){
        return startDate.toLocaleDateString('default', {day: 'numeric', month: 'long', year: 'numeric'}) +
            " - " +
            endDate.toLocaleDateString('default', {day: 'numeric', month: 'long', year: 'numeric'});
    }

    if (startDate.getMonth() !== endDate.getMonth()){
        return startDate.toLocaleDateString('default', {day: 'numeric', month: 'long'}) + " - " +
            endDate.toLocaleDateString('default', {day: 'numeric', month: 'long', year: 'numeric'});
    }

    if (startDate.getDay() !== endDate.getDay()){
        return startDate.toLocaleDateString('default', {day: 'numeric'}) + " - " +
            endDate.toLocaleDateString('default', {day: 'numeric', month: 'long', year: 'numeric'});
    }

    return startDate.toLocaleDateString('default', {day: 'numeric', month: 'long', year: 'numeric'});
}

function getDays(start_date, end_date) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    if (startDate.getTime() !== endDate.getTime()){
        return startDate.toLocaleDateString('default', {day: 'numeric'}) + " - " +
            endDate.toLocaleDateString('default', {day: 'numeric'});
    }

    return startDate.toLocaleDateString('default', {day: 'numeric'});
}

function getMonthWithYear(start_date, end_date) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    if (startDate.getMonth() !== endDate.getMonth()){
        return startDate.toLocaleDateString('default', {month: 'long', year: 'numeric'}) + " - " +
            endDate.toLocaleDateString('default', {month: 'long', year: 'numeric'});
    }

    return startDate.toLocaleDateString('default', {month: 'long', year: 'numeric'});
}

export {getFullDate, getDays, getMonthWithYear}