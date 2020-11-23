function convertToNumeric (string) {
  const alpha = string.charCodeAt(0);
  return `${alpha - 65}-${string.substring(1) - 1}`;
}

export default convertToNumeric;
