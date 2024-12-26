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
 * => 'STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS00 PLUS00 PLUS ** STRING PLUS00 PLUS00 PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  if (options.separator === undefined) {
    options.separator = "+";
  }

  let addition = "";
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (
    options.additionRepeatTimes === undefined &&
    options.addition !== undefined
  ) {
    options.additionRepeatTimes = 1;
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  for (let k = 0; k < options.additionRepeatTimes; k++) {
    if (k < options.additionRepeatTimes - 1) {
      addition += options.addition + options.additionSeparator;
    } else {
      addition += options.addition;
    }
  }

  for (i = 0; i < options.repeatTimes; i++) {
    if (i < options.repeatTimes - 1) {
      result += str + addition + options.separator;
    } else {
      result += str + addition;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
