const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sampleActivityNum = +sampleActivity;

  if (
    typeof sampleActivity === "string" &&
    sampleActivityNum &&
    sampleActivityNum > 0 &&
    sampleActivityNum < 15
  ) {
    const ln2 = 0.693;
    const activityProportion = MODERN_ACTIVITY / +sampleActivity;

    return Math.ceil(Math.log(activityProportion) / (ln2 / HALF_LIFE_PERIOD));
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
