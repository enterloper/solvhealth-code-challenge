function convertToAlphaNumeric (string) {
    const stringArray = string.split('-');
    stringArray[0] = String.fromCharCode(parseInt(stringArray[0]) + 64);
    return stringArray.join('-');
}

module.exports = convertToAlphaNumeric;
