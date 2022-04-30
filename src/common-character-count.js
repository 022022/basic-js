const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let counter = 0;

  for (char of s1) {
    if (s2.includes(char)) {
      counter++;
      s2 = s2.slice(0, s2.indexOf(char)) + s2.slice(s2.indexOf(char) + 1);
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
