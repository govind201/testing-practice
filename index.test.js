import { expect, test } from "@jest/globals";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("capitalize function", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
  expect(capitalize("")).toBe("");
});

test("reverseString function", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
  expect(reverseString("")).toBe("");
});

test("calculator object", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("caesarCipher function", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("xyz", 1)).toBe("yza");
  expect(caesarCipher("ABC", 1)).toBe("BCD");
  expect(caesarCipher("XYZ", 1)).toBe("YZA");
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test("analyzeArray function", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
