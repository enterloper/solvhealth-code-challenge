function convertToAlphaNumeric (string) {
    const stringArray = string.split('-');
    stringArray[0] = String.fromCharCode(parseInt(stringArray[0]) + 65);
    stringArray[1]++;
    return stringArray.join('-');
}

export default convertToAlphaNumeric;
