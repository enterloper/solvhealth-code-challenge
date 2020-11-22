function convertToNumeric (string) {
  const alpha = string.charCodeAt(0);
  return `${alpha - 64}-${string.substring(1)}`;
}

export default convertToNumeric;
