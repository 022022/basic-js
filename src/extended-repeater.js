const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.str = String(str);
  if (options.addition === undefined) {
    options.addition = "";
  }
  options.addition = String(options.addition);

  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  let newStr = "";
  let additionalStr = "";

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    // forming addition
    additionalStr += options.addition + options.additionSeparator;
  }
  additionalStr = additionalStr.slice(0, -options.additionSeparator.length);

  for (let i = 0; i < options.repeatTimes; i++) {
    // repeating string with addition
    newStr += str + additionalStr + options.separator;
  }
  newStr = newStr.slice(0, -options.separator.length);

  return newStr;
}

module.exports = {
  repeater,
};
