function caesarCipher(key, string) {
  const array = toCharCodeArray(string);
  shift(key, array);

  const codes = array.map((charCode) => charCode.code);
  return String.fromCharCode.apply(null, codes);
}

function toCharCodeArray(string) {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    array.push({
      char: string[i],
      code: string.charCodeAt(i),
    });
  }
  return array;
}

function shift(value, array = []) {
  array.forEach((charCode) => {
    if (!/[a-zA-Z]/.test(charCode.char)) return;

    const codeStart = (charCode.code <= 90) ? 65 : 97;
    charCode.code -= codeStart;

    if (value < 0) value = 26 + (value % 26);
    charCode.code = (charCode.code + value) % 26;
    charCode.code += codeStart;
  });
}

export default caesarCipher;
