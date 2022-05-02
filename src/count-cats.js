const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let numCats = 0
  array.forEach(element => {
    element.forEach(element => {
      if (element === "^^") {
        numCats += 1
      }
    });
  });
  return numCats
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
