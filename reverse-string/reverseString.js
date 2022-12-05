function reverseString(string) {
  const reversed = [];
  for (let i = string.length - 1; i >= 0; i--) reversed.push(string[i]);
  return reversed.join('');
}

export default reverseString;
