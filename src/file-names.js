const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(fileNames) {
  for (let i = 0; i < fileNames.length; i++) {
    let slicedArr = fileNames.slice(0, i);

    if (slicedArr.includes(fileNames[i])) {
      // one occurrence found, lets look for occurrences with (1), (2) etc
      let n = 1;
      while (slicedArr.includes(fileNames[i] + "(" + n + ")")) {
        console.log("v while  " + fileNames[i] + "(" + n + ")");
        n++;
      }
      // now last (unfound!) (digit) is in n!
      fileNames[i] = fileNames[i] + "(" + n + ")";
    }
  }
  return fileNames;
}

module.exports = {
  renameFiles,
};
