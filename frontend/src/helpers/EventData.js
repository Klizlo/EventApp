const locale = (language) => {
    switch (language) {
        case "en":
            return "en-US";
        default:
            return "pl-PL";
    }
}

function getFullDate(start_date, end_date, language) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    if (startDate.getFullYear() !== endDate.getFullYear()) {
        return startDate.toLocaleDateString(locale(language), {day: 'numeric', month: 'long', year: 'numeric'}) +
            " - " +
            endDate.toLocaleDateString(locale(language), {day: 'numeric', month: 'long', year: 'numeric'});
    }

    if (startDate.getMonth() !== endDate.getMonth()) {
        return startDate.toLocaleDateString(locale(language), {day: 'numeric', month: 'long'}) + " - " +
            endDate.toLocaleDateString(locale(language), {day: 'numeric', month: 'long', year: 'numeric'});
    }

    if (startDate.getDay() !== endDate.getDay()) {
        return startDate.toLocaleDateString(locale(language), {day: 'numeric'}) + " - " +
            endDate.toLocaleDateString(locale(language), {day: 'numeric', month: 'long', year: 'numeric'});
    }

    return startDate.toLocaleDateString(locale(language), {day: 'numeric', month: 'long', year: 'numeric'});
}

function getDays(start_date, end_date, language) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    if (startDate.getTime() !== endDate.getTime()) {
        return startDate.toLocaleDateString(locale(language), {day: 'numeric'}) + " - " +
            endDate.toLocaleDateString(locale(language), {day: 'numeric'});
    }

    return startDate.toLocaleDateString(locale(language), {day: 'numeric'});
}

function getMonthWithYear(start_date, end_date, language) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    if (startDate.getMonth() !== endDate.getMonth()) {
        return startDate.toLocaleDateString(locale(language), {month: 'long', year: 'numeric'}) + " - " +
            endDate.toLocaleDateString(locale(language), {month: 'long', year: 'numeric'});
    }

    return startDate.toLocaleDateString(locale(language), {month: 'long', year: 'numeric'});
}

export {getFullDate, getDays, getMonthWithYear}