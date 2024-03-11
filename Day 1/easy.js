/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (let i of nums) {
    if (obj[`${i}`] !== undefined) {
      obj[`${i}`] = obj[`${i}`] + 1;
    } else {
      obj[`${i}`] = 1;
    }
  }
  console.log(obj);
  for ([key, value] of Object.entries(obj)) {
    if (value === 1) {
      return key;
    }
  }
};

console.log(singleNumber([1, 2, 1, 2, 1, 2, 1, 2, 3]));
