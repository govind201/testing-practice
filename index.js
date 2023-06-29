export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const reverseString = (str) => {
  return str.split("").reverse().join("");
};

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export const caesarCipher = (str, shift) => {
  const shiftChar = (char, shift) => {
    const code = char.charCodeAt(0);
    const base =
      code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : null;

    if (base === null) {
      return char;
    }

    const shifted = ((((code - base + shift) % 26) + 26) % 26) + base;
    return String.fromCharCode(shifted);
  };

  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};

export const analyzeArray = (arr) => {
  const length = arr.length;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { average, min, max, length };
};
