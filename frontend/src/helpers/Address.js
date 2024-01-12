function getAddress(address) {
    if (address) {
        const addressArr = address.split(";");
        return {
            street: addressArr[0],
            postalCode: addressArr[1],
            city: addressArr[2],
            country: addressArr[3]
        }
    }
    return null;
}

function createAddress(street, postalCode, city, country) {
    if (street !== null || postalCode !== null || city !== null || country !== null) {
        let address = "";
        address += (street !== null ? street : '') + ";";
        address += (postalCode !== null ? postalCode : '') + ";";
        address += (city !== null ? city : '') + ";";
        address += (country !== null ? country : '');
        return address;
    }
    return null;
}

function displayAddress(address) {
    return address.street + ", " + address.postalCode + " " + address.city + ", " + address.country;
}

export const Address = {
    getAddress,
    createAddress,
    displayAddress
}