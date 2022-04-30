const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let counterObj = {};

  for (item of domains) {
    item = item.split(".").reverse();

    domainVariant = "";

    for (let i = 0; i < item.length; i++) {
      domainVariant = domainVariant + "." + item[i];

      if (domainVariant in counterObj) {
        counterObj[domainVariant]++;
      } else {
        counterObj[domainVariant] = 1;
      }
    }
  }
  return counterObj;
}

module.exports = {
  getDNSStats,
};
