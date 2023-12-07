function getFullDate(start_date, end_date, language) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    const locale = () => {
        switch (language) {
            case "en":
                return "en-US";
            default:
                return "pl-PL";
        }
    }

    if (startDate.getFullYear() !== endDate.getFullYear()){
        return startDate.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'}) +
            " - " +
            endDate.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    }

    if (startDate.getMonth() !== endDate.getMonth()){
        return startDate.toLocaleDateString(locale, {day: 'numeric', month: 'long'}) + " - " +
            endDate.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    }

    if (startDate.getDay() !== endDate.getDay()){
        return startDate.toLocaleDateString(locale, {day: 'numeric'}) + " - " +
            endDate.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    }

    return startDate.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
}

function getDays(start_date, end_date, language) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    const locale = () => {
        switch (language) {
            case "en":
                return "en-US";
            default:
                return "pl-PL";
        }
    }

    if (startDate.getTime() !== endDate.getTime()){
        return startDate.toLocaleDateString(locale, {day: 'numeric'}) + " - " +
            endDate.toLocaleDateString(locale, {day: 'numeric'});
    }

    return startDate.toLocaleDateString(locale, {day: 'numeric'});
}

function getMonthWithYear(start_date, end_date, language) {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    const locale = () => {
        switch (language) {
            case "en":
                return "en-US";
            default:
                return "pl-PL";
        }
    }

    if (startDate.getMonth() !== endDate.getMonth()){
        return startDate.toLocaleDateString(locale, {month: 'long', year: 'numeric'}) + " - " +
            endDate.toLocaleDateString(locale, {month: 'long', year: 'numeric'});
    }

    return startDate.toLocaleDateString(locale, {month: 'long', year: 'numeric'});
}

export {getFullDate, getDays, getMonthWithYear}