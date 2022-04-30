const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  console.log(arr);

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    //if(typeof(arr[i]) !== 'string'){
    //    newArr.push(arr[i]);
    //}

    if (
      arr[i] !== "--discard-next" &&
      arr[i] !== "--discard-prev" &&
      arr[i] !== "--double-next" &&
      arr[i] !== "--double-prev"
    ) {
      newArr.push(arr[i]);
    }

    if (arr[i] === "--discard-next") {
      //excludes the next element of the array from the transformed array
      if (arr[i + 1]) {
        i = i + 1;
      }
    }
    if (arr[i] === "--discard-prev") {
      //excludes the previous element of the array from the transformed array.
      if (arr[i - 1] && arr[i - 2] !== "--discard-next") {
        newArr.pop();
      }
    }
    if (arr[i] === "--double-next") {
      //duplicates the next element of the array in the transformed array.y
      if (arr[i + 1]) {
        newArr.push(arr[i + 1]);
      }
    }
    if (arr[i] === "--double-prev") {
      //duplicates the previous element of the array in the transformed array.
      if (arr[i - 1] && arr[i - 2] !== "--discard-next") {
        newArr.push(arr[i - 1]);
      }
    }
  }

  return newArr;
}

module.exports = {
  transform,
};
