const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split("");
  currentChar = arr[0];
  result = "";
  counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === currentChar) {
      counter++;
    } else {
      if (counter > 1) {
        result += counter + currentChar;
      } else {
        result += currentChar;
      }

      currentChar = arr[i];
      counter = 1;
    }

    if (i === arr.length - 1) {
      if (counter > 1) {
        result += counter + currentChar;
      } else {
        result += currentChar;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
