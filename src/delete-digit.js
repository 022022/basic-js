const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const stringifiedNumber = String(number);
  let candidates = [];

  for (dig of stringifiedNumber) {
    let candidate =
      stringifiedNumber.slice(0, stringifiedNumber.indexOf(dig)) +
      stringifiedNumber.slice(stringifiedNumber.indexOf(dig) + 1);
    candidates.push(Number(candidate));
  }

  candidates.sort((a, b) => b - a);
  return candidates[0];
}

module.exports = {
  deleteDigit,
};
