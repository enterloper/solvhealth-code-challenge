function convertToAlphaNumeric (string) {
    // "10-10"
    //J-10
    const stringArray = string.split('-');
    stringArray[0] = String.fromCharCode(parseInt(stringArray[0]) + 64);
    return stringArray.join('-');
}

export default convertToAlphaNumeric;
